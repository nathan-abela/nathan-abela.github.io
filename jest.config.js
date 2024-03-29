process.env.TZ = 'GMT';

module.exports = {
	roots: ['<rootDir>'],
	testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.tsx', '**/*.test.ts', '**/*.test.tsx'],
	setupFilesAfterEnv: ['<rootDir>/src/test/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/build/', '/dist/', '<rootDir>/node_modules/'],
	moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
	collectCoverageFrom: [
		'**/src/**/**/*.{js,jsx,ts,tsx}',
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/redux/**/index.ts',
		'!**/src/components/**/*.stories.+(js|ts|tsx)',
		'!**/__tests__/**',
		'!**/node_modules/**',
		'!**/.next/**',
		'!**/build/**',
	],
	reporters: [
		'default',
		[
			'jest-html-reporter',
			{
				pageTitle: 'Unit Tests Report',
				outputPath: './src/test/tests-report/unit-test-report.html',
				includeFailureMsg: true,
				includeConsoleLog: true,
			},
		],
	],
	coverageThreshold: {
		global: {
			statements: 80,
			branches: 75,
			functions: 80,
			lines: 80,
		},
	},
	projects: ['./src/test/jest.lint.js', './src/test/jest.unittest.js'],
};
