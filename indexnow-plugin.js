const fs = require('fs');
const path = require('path');

module.exports = function (context, options) {
    return {
        name: 'docusaurus-plugin-indexnow',
        async postBuild({ siteConfig, routesPaths, outDir }) {
            // 1. Hardcoded 32-character secure key for IndexNow API authorization
            const keyStr = 'c28a559ed5034f3189cd11dbb9bd6160';
            const host = 'wiki.suryaraj.com';

            // 2. Write the verification key file directly into the build output
            fs.writeFileSync(path.join(outDir, `${keyStr}.txt`), keyStr);
            console.log(`\n[IndexNow] Generated verification key file: ${keyStr}.txt`);

            // 3. Map all generated dynamic and static routes to the absolute host URL
            const urlList = routesPaths.map(route => `https://${host}${route}`);

            const payload = {
                host: host,
                key: keyStr,
                keyLocation: `https://${host}/${keyStr}.txt`,
                urlList: urlList
            };

            console.log(`[IndexNow] Preparing to send ${urlList.length} indexed URLs across Bing and Yandex...`);

            // 4. Send the POST request to the central IndexNow API endpoint
            try {
                const response = await fetch('https://api.indexnow.org/indexnow', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    console.log(`[IndexNow] ✅ Successfully submitted all ${urlList.length} URLs to IndexNow! (Status: ${response.status})`);
                } else {
                    console.error(`[IndexNow] ❌ Failed to submit URLs:`, response.status, response.statusText);
                }
            } catch (err) {
                console.error(`[IndexNow] ❌ Network error communicating with IndexNow:`, err.message);
            }
        }
    };
};
