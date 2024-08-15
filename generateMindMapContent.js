const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'mindmap.mmd');
const outputDir = path.resolve(__dirname, 'src/generated');
const outputFilePath = path.join(outputDir, 'MindMapContent.js');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading mindmap.mmd:', err);
    return;
  }

  const content = `export const mindmapContent = \`${data}\`;`;

  fs.writeFile(outputFilePath, content, (err) => {
    if (err) {
      console.error('Error writing MindMapContent.js:', err);
      return;
    }

    console.log('MindMapContent.js has been generated.');
  });
});
