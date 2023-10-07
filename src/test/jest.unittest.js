const path = require('path');

module.exports = {
	...require('./jest.common'),
	rootDir: path.join(__dirname, '..'),
	displayName: 'test',
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	modulePathIgnorePatterns: ['<rootDir>/cypress/e2e'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test/__mocks__/fileMock.js',
		'\\.(css|less|sass)$': '<rootDir>/test/__mocks__/styleMock.js',
		// Components
		'^Atoms(.*)$': '<rootDir>/src/components/atoms$1',
		'^Molecules(.*)$': '<rootDir>/src/components/molecules$1',
		'^Organisms(.*)$': '<rootDir>/src/components/organisms$1',
		'^Templates(.*)$': '<rootDir>/src/components/templates$1',
		// Other folders
		'^@Types(.*)$': '<rootDir>/@types$1',
		'^Public(.*)$': '<rootDir>/public$1',
		'^Pages(.*)$': '<rootDir>/src/pages$1',
		'^Redux(.*)$': '<rootDir>/src/redux$1',
		'^Utils(.*)$': '<rootDir>/src/utils$1',
	},
};
