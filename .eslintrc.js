module.exports = {
	root: false,
	// This tells ESLint to load the config from the package `eslint-config-custom`
	extends: ["@tokilabs/eslint-config/nest"],
	settings: {
		next: {
			rootDir: [""],
		},
	},
	"env": {
		"es2020": true,
		"node": true,
		"jest": true
	}
};
