# Shared Typescript configuration

This is Toki Labs shared [Typescript](https:typescriptlang.org) configuration and it changes some of the default behavior.

## Integrate into new project

#### 1. Install this package as devDependency

```bash
# with Yarn
$ yarn add -D @tokilabs/tsconfig

# with npm
$ npm i -D @tokilabs/tsconfig

# with pnpm
$ pnpm add -D @tokilabs/tsconfig
```

#### 2. Configure your project

```json
{
 "extends": "@tokilabs/tsconfig/base.json"
}
```

For a setup of your figma project with preact

```json
{
 "extends": "@tokilabs/tsconfig/figma-preact.json"
}
```
