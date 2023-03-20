# Shared Prettier configuration

This is Toki Labs shared [ESLint](https://eslint.org/) configuration for custom servers and it changes some of the default behavior.

## Integrate into new project

#### 1. Install this package as devDependency

```bash
# with Yarn
$ yarn add -D @tokilabs/eslint-config-custom-server

# with npm
$ npm i -D @tokilabs/eslint-config-custom-server

# with pnpm
$ pnpm add -D @tokilabs/eslint-config-custom-server
```

#### 2. Install peer dependencies

The configuration requires some packages (including eslint) to work.
You should install them in your project as devDependencies.

To do that, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```bash
# with Yarn
$ yarn dlx install-peerdeps --dev @tokilabs/eslint-config-custom-server

# with npm
$ npx install-peerdeps --dev @tokilabs/eslint-config-custom-server

#with pnpm
$ pnpm dlx install-peerdeps --dev @tokilabs/eslint-config-custom-server
```

#### 3. Configure your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ["@tokilabs/eslint-config-custom-server"]
};
```
