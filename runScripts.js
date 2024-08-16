const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure the output directory exists
const outputDir = path.join(__dirname, 'src', 'generated');
const outputFilePath = path.join(outputDir, 'mindmap.png');

// Function to run Yarn build
function runYarnBuild(callback) {
  execFile('yarn', ['build'], (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Yarn build: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Yarn build stderr: ${stderr}`);
      return;
    }
    console.log(`Yarn build stdout: ${stdout}`);
    callback();
  });
}

// Function to generate the mind map
function generateMindMap(callback) {
  execFile('python', ['generate_mindmap.py'], (error, stdout, stderr) => {
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
    execFile('mmdc', ['-i', 'mindmap.mmd', '-o', outputFilePath], (error, stdout, stderr) => {
      if (error) {
        console.error(`Error converting .mmd to image: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Mermaid CLI stderr: ${stderr}`);
        return;
      }
      console.log(`Mermaid CLI stdout: ${stdout}`);
      callback();
    });
  });
}

// Function to run the Docker command
function runDockerCommand() {
  // Read the config.json file
  const configPath = path.join(__dirname, 'config.json');
  const configContent = fs.readFileSync(configPath, 'utf8');

  execFile('docker', ['run', '--env-file=.env', '-e', `CONFIG=${configContent}`, 'algolia/docsearch-scraper'], (error, stdout, stderr) => {
    if (error) {
      console.error(`Error running Docker command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Docker command stderr: ${stderr}`);
      return;
    }
    console.log(`Docker command stdout: ${stdout}`);
  });
}

// Execute the functions in sequence
runYarnBuild(() => {
  generateMindMap(() => {
    runDockerCommand();
  });
});
