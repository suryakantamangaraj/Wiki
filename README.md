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

---

***

___

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

#### Converting `.mmd` to Image

Converts the generated `mindmap.mmd` file to a PNG image using Mermaid CLI.

**Usage:**
1. Ensure Node.js and Mermaid CLI are installed:
    ```sh
    node --version
    npm install -g @mermaid-js/mermaid-cli
    ```
2. Navigate to the script's directory and run:
    ```sh
    mmdc -i mindmap.mmd -o src/generated/mindmap.png
    ```

### Running Both Steps Sequentially

#### Combined Script: `runScripts.js`

Runs the Python script to generate the mind map and then converts it to an image.

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

---

***

___

![Build Status](https://github.com/suryakantamangaraj/Wiki/actions/workflows/deploy-to-github-pages.yml/badge.svg)
![Build Status](https://github.com/suryakantamangaraj/Wiki/actions/workflows/github-code-scanning/codeql/badge.svg)