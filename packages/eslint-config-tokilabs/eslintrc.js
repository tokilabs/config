module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.tests.json',
      ecmaVersion: '2020',
      sourceType: 'module',
    },
    ignorePatterns: ['node_modules', 'build', 'notes', 'build-*', '**/*.js'],
    globals: {
      h: 'readable',
      figma: 'readable',
      __html__: 'readable',
      describe: 'readable',
      it: 'readable',
      expect: 'readable',
      cy: 'readable',
      jest: 'readable',
    },
    env: {
      browser: true,
      es2021: true,
      es2017: true,
      node: true,
    },
    extends: [
      'preact',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:@typescript-eslint/strict',
      'prettier',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      '@typescript-eslint/unified-signatures': 0,
      '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '_|h' }],
      'import/prefer-default-export': 0,
      'import/extensions': 0,
      'no-await-in-loop': 0,
      'no-param-reassign': 0,
      'class-methods-use-this': 0,
      'no-restricted-globals': 0,
      'max-len': 0,
      'react/function-component-definition': 0,
      'react/require-default-props': 0,
      'react/jsx-props-no-spreading': 0,
      'no-prototype-builtins': 0,
      'no-async-promise-executor': 0,
      'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
      '@typescript-eslint/ban-types': [
        2,
        {
          types: {
            object: {
              message:
                'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.',
            },
          },
          extendDefaults: true,
        },
      ],
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-shadow': 1,
    },
    settings: {
      jest: {
        version: 27,
      },
    },
  };