const fs = require('fs');
const path = require('path');

const host = 'wiki.suryaraj.com';
const keyStr = 'c167b73914c94ed7a4d396c95ea51ac5';

// Read sitemap.xml from the build output directory
const sitemapPath = path.join(__dirname, '../build/sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
    console.error('[IndexNow] sitemap.xml not found at', sitemapPath);
    process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Extract all URLs from the sitemap via regex
const regex = /<loc>(.*?)<\/loc>/g;
const urlList = [];
let match;
while ((match = regex.exec(sitemapContent)) !== null) {
    urlList.push(match[1]);
}

if (urlList.length === 0) {
    console.warn('[IndexNow] No URLs extracted from sitemap.xml');
    process.exit(0);
}

const payload = {
    host: host,
    key: keyStr,
    keyLocation: `https://${host}/${keyStr}.txt`,
    urlList: urlList
};

console.log(`[IndexNow] Submitting ${urlList.length} indexed URLs across Bing and Yandex endpoints...`);

fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(payload)
})
    .then(async response => {
        if (response.ok) {
            console.log(`[IndexNow] ✅ Successfully submitted URLs! (Status: ${response.status})`);
        } else {
            console.error(`[IndexNow] ❌ Failed to submit URLs. Status: ${response.status} - ${response.statusText}`);
        }
    })
    .catch(err => {
        console.error(`[IndexNow] ❌ Error communicating with IndexNow API:`, err.message);
    });
