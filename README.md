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

To generate the mind map, follow these steps:

1. **Ensure you have Python installed** on your system. You can check this by running:
    ```sh
    python --version
    ```

2. **Navigate to the directory** containing the `generate_mindmap.py` script.

3. **Run the script** using the following command:
    ```sh
    python generate_mindmap.py
    ```

This will create a `mindmap.mmd` file in the same directory, containing the structure of your `docs` folder.


![Build Status](https://github.com/suryakantamangaraj/Wiki/actions/workflows/deploy-to-github-pages.yml/badge.svg)
![Build Status](https://github.com/suryakantamangaraj/Wiki/actions/workflows/github-code-scanning/codeql/badge.svg)