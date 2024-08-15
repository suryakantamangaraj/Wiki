const { exec } = require('child_process');

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

  exec('node generateMindMapContent.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing JavaScript script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`JavaScript script stderr: ${stderr}`);
      return;
    }
    console.log(`JavaScript script stdout: ${stdout}`);
  });
});
