module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	env: {
		es2021: true,
		node: true
	},
	plugins: ["@typescript-eslint", "turbo"],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"turbo",
		"prettier"
	],
	overrides: [],
	ignorePatterns: [".eslintrc.cjs", "dist/"],
	rules: {
		"turbo/no-undeclared-env-vars": "error",
		"@typescript-eslint/array-type": [
			"warn",
			{default: "array-simple", readonly: "array-simple"}
		]
	}
};
