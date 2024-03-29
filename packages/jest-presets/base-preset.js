/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import { defaults } from "jest-config";

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	...defaults,
	automock: false,
	bail: 0,
	cacheDirectory: "/tmp/jest_rt",
	// Automatically clear mock calls and instances between every test
	clearMocks: true,
	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,
	// The directory where Jest should output its coverage files
	coverageDirectory: "./coverage",
	coveragePathIgnorePatterns: ["/node_modules/"],
	// Indicates which provider should be used to instrument code for coverage
	coverageProvider: "v8",
	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: ["json-summary", "lcov"],
	errorOnDeprecated: true,
	moduleDirectories: ["node_modules"],
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
	// A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
	moduleNameMapper: {},
	// Activates notifications for test results
	notify: true,
	// A preset that is used as a base for Jest's configuration
	preset: "ts-jest",
	// Run tests from one or more projects
	projects: undefined,
	// Use this configuration option to add custom reporters to Jest
	reporters: undefined,
	// Automatically reset mock state between every test
	resetMocks: false,
	// Reset the module registry before running each individual test
	resetModules: false,
	// Automatically restore mock state between every test
	restoreMocks: false,
	// The root directory that Jest should scan for tests and modules within
	rootDir: "./",
	// A list of paths to directories that Jest should use to search for files in
	roots: [],
	// Allows you to use a custom runner instead of Jest's default test runner
	runner: "jest-runner",
	// The paths to modules that run some code to configure or set up the testing environment before each test
	setupFiles: [],
	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	setupFilesAfterEnv: [],
	// The number of seconds after which a test is considered as slow and reported as such in the results.
	slowTestThreshold: 5,
	// The test environment that will be used for testing
	testEnvironment: "jest-environment-node",
	// Options that will be passed to the testEnvironment
	testEnvironmentOptions: {},
	// Adds a location field to test results
	testLocationInResults: true,
	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: ["/node_modules/"],
	// The regexp pattern or array of patterns that Jest uses to detect test files
	testRegex: [],
	// This option allows use of a custom test runner
	testRunner: "jest-circus/runner",
	transform: { "^.+\\.(t|j)s$": "ts-jest" },
};
