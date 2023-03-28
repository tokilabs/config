module.exports = {
	root: false,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		project: "./tsconfig.json",
	},
	ignorePatterns: ["node_modules"],
	globals: {
		describe: "readable",
		it: "readable",
		expect: "readable",
		jest: "readable",
	},
	env: {
		node: true,
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/strict",
		"prettier",
	],
	plugins: ["@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"@typescript-eslint/unified-signatures": 0,
		"@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "_|h" }],
		"import/prefer-default-export": 0,
		"import/extensions": 0,
		"no-await-in-loop": 0,
		"no-param-reassign": 0,
		"class-methods-use-this": 0,
		"no-restricted-globals": 0,
		"@typescript-eslint/unbound-method": 0,
		"max-len": 0,
		"no-prototype-builtins": 0,
		"no-async-promise-executor": 0,
		"no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
		"@typescript-eslint/ban-types": [
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
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-shadow": 1,
	},
	settings: {
		jest: {
			version: 27,
		},
	},
};
