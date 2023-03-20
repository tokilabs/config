# Shared Jest presets

This is Toki Labs shared for [Jest](https://jestjs.io) preset and it changes some of the default behavior.

## Integrate into new project

#### 1. Install this package as devDependency

```bash
# with Yarn
$ yarn add -D @tokilabs/jest-presets

# with npm
$ npm i -D @tokilabs/jest-presets

# with pnpm
$ pnpm add -D @tokilabs/jest-presets
```

#### 2. Install peer dependencies

The configuration requires some packages (including jest) to work.
You should install them in your project as devDependencies.

To do that, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```bash
# with Yarn
$ yarn dlx install-peerdeps --dev @tokilabs/jest-presets

# with npm
$ npx install-peerdeps --dev @tokilabs/jest-presets

#with pnpm
$ pnpm dlx install-peerdeps --dev @tokilabs/jest-presets
```

#### 3. Configure your project

Create a jest.config.js file in project root with the following content:

```js
module.exports = {
 preset: "@tokilabs/jest-presets/node"
}
```
