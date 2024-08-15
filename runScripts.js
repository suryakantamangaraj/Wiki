const { exec } = require('child_process');
const path = require('path');

// Ensure the output directory exists
const outputDir = path.join(__dirname, 'src', 'generated');
const outputFilePath = path.join(outputDir, 'mindmap.png');

exec('python generate_mindmap.py', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Python script: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Python script stderr: ${stderr}`);
    return;
  }
  console.log(`Python script stdout: ${stdout}`);

  // Convert the .mmd file to an image using Mermaid CLI
  exec(`mmdc -i mindmap.mmd -o ${outputFilePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error converting .mmd to image: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Mermaid CLI stderr: ${stderr}`);
      return;
    }
    console.log(`Mermaid CLI stdout: ${stdout}`);
  });
});
