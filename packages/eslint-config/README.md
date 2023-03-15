# Shared Prettier configuration

This is Toki Labs shared [ESLint](https://eslint.org/) configuration and it changes some of the default behavior.

## Integrate into new project

#### 1. Install this package as devDependency

```bash
# with Yarn
$ yarn add -D @tokilabs/eslint-config

# with npm
$ npm i -D @tokilabs/eslint-config

# with pnpm
$ pnpm add -D @tokilabs/eslint-config
```

#### 2. Install peer dependencies

The configuration requires some packages (including prettier) to work.
You should install them in your project as devDependencies.

To do that, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```bash
# with Yarn
$ yarn dlx install-peerdeps --dev @tokilabs/eslint-config

# with npm
$ npx install-peerdeps --dev @tokilabs/eslint-config

#with pnpm
$ pnpm dlx install-peerdeps --dev @tokilabs/eslint-config
```

#### 3. Configure your project

Create a `.eslintrc.js` file in project root with the following content:

```js
module.exports = {
  extends: ["@doppelmutzi/eslint-config-react"]
};
```
