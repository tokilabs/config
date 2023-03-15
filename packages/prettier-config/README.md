# Shared Prettier configuration

This is Toki Labs shared [Prettier](https://prettier.io/) configuration and it changes some of the default behavior.

## Integrate into new project

#### 1. Install this package as devDependency

```bash
# with Yarn
$ yarn add -D @tokilabs/prettier-config

# with npm
$ npm i -D @tokilabs/prettier-config

# with pnpm
$ pnpm add -D @tokilabs/prettier-config
```

#### 2. Install peer dependencies

The configuration requires some packages (including prettier) to work.
You should install them in your project as devDependencies.

To do that, you can make use of the tool [install-peerdeps](https://github.com/nathanhleung/install-peerdeps):

```bash
# with Yarn
$ yarn dlx install-peerdeps --dev @tokilabs/prettier-config

# with npm
$ npx install-peerdeps --dev @tokilabs/prettier-config

#with pnpm
$ pnpm dlx install-peerdeps --dev @tokilabs/prettier-config
```

#### 3. Configure your project

Create a .prettierrc file in project root with the following content:

```bash
"@tokilabs/prettier-config"
```

**OR**

to the `prettier` property of your `package.json`

```js
{
  ...
  "prettier": "@tokilabs/prettier-config"
  ...
}
```
