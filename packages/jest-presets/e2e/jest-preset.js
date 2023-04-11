/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import * as base from "../base-preset";

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	...base,
	preset: "ts-jest",
	moduleFileExtensions: ["js", "json", "ts"],
	rootDir: ".",
	testEnvironment: "node",
	testRegex: ".e2e-spec.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
};
