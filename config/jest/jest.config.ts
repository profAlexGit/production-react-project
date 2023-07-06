/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
	// All imported modules in your tests should be mocked automatically
	// automock: false,

	// Stop running tests after `n` failures
	// bail: 0,

	// The directory where Jest should store its cached dependency information
	// cacheDirectory: "C:\\Users\\staro\\AppData\\Local\\Temp\\jest",

	// Automatically clear mock calls, instances, contexts and results before every test
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\'
	],
	moduleDirectories: [
		'node_modules'
	],
	moduleFileExtensions: [
		'js',
		'mjs',
		'cjs',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node'
	],
	rootDir: '../../',
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
	]
};

export default config;
