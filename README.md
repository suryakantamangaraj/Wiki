# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


### Running the Mind Map Generator

#### Python Script: `generate_mindmap.py`

Generates a `mindmap.mmd` file with the structure of your `docs` folder.

**Usage:**
1. Ensure Python is installed:
    ```sh
    python --version
    ```
2. Navigate to the script's directory and run:
    ```sh
    python generate_mindmap.py
    ```

#### JavaScript Script: `generateMindMapContent.js`

Formats `mindmap.mmd` for Mermaid and writes to `MindMapContent.js`.

**Usage:**
1. Ensure Node.js is installed:
    ```sh
    node --version
    ```
2. Navigate to the script's directory and run:
    ```sh
    node generateMindMapContent.js
    ```

### Running Both Scripts Sequentially

#### Combined Script: `runScripts.js`

Runs both scripts in sequence.

**Usage:**
1. Navigate to the script's directory and run:
    ```sh
    node runScripts.js
    ```

### Recommended Usage

Run the combined script for the entire process:
```sh
node runScripts.js
```

This ensures both scripts are executed in the correct order, generating and formatting the mind map content for your Docusaurus project.


![Build Status](https://github.com/suryakantamangaraj/Wiki/actions/workflows/deploy-to-github-pages.yml/badge.svg)
![Build Status](https://github.com/suryakantamangaraj/Wiki/actions/workflows/github-code-scanning/codeql/badge.svg)