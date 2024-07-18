# YPM Team Points

Dependencies:
* [Node.js](https://nodejs.org/en)

Run the following commands to get started.

```
$ npm install
$ npm run dev
```

Deploy to local server using the `deploy.sh` script. Make necessary changes before you deploy.

```
$ scp -i ~/.ssh/id_ed25519 -P <port> -r -v dist/* <user>@<hostname>:/var/www/<subdomain.domain.com>/
```
* `id_ed25519`: Replace with your ssh key
* `port`: SSH port of your server
* `user`: User of your server
* `hostname`: Hostname or IP address of your server
* `subdomain.domain.com`: Your fully qualified domain name (FQDN)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
