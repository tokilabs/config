/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import * as base from "../base-preset";

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	...base,
	preset: "ts-jest",
	roots: ["<rootDir>"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	modulePathIgnorePatterns: ["<rootDir>/test/__fixtures__", "<rootDir>/node_modules", "<rootDir>/dist"],
};
