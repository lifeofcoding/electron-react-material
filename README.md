# electron-react-material
Jump start your next :electron: Electron app with React and Material-UI!

## Features
- Utilize eslint and husky to enforce a clean, consistent code style.
- Minimally configured; less bloat for you to undo!
- Material-UI for an elegant interface with **Dark Mode** support by default!

## Getting Started
First, install [yarn](https://yarnpkg.com). Then, depending on your preference:
### SSH
```bash
git clone git@github.com:zlstringham/electron-react-material my-project
cd my-project

# Delete boilerplate git history and start anew
rm -rf .git && git init

# Install dependencies
yarn

# Start dev server
yarn dev
```
### HTTPS
```bash
git clone https://github.com/zlstringham/electron-react-material.git my-project
cd my-project

# Delete boilerplate git history and start anew
rm -rf .git && git init

# Install dependencies
yarn

# Start dev server
yarn dev
```
## electron-webpack
[electron-webpack](https://webpack.electron.build/) provides a great set of tooling for automatically configuring canonical
Electron projects. For information on customizing the configuration, please refer to its documentation site.

### Whitelisting
One known issue with electron-webpack is especially prevalent in React hooks, where multiple versions of React are detected.
(See: [electron-webpack#349](https://github.com/electron-userland/electron-webpack/issues/349).)

The currently suggested workaround for this is to "whitelist" modules which are also dependent on React. For example, if you
include `redux` and `react-redux`, you would want to whitelist `react-redux` but not `redux`:
electron-webpack.json
```json
{
  "whiteListedModules": [
     "react-redux"
  ]
}
```
Refer to [White-listing externals](https://webpack.electron.build/configuration#white-listing-externals) for more information.
