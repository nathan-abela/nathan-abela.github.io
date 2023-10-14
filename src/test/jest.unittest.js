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
		'^Atoms(.*)$': '<rootDir>/components/atoms$1',
		'^Molecules(.*)$': '<rootDir>/components/molecules$1',
		'^Organisms(.*)$': '<rootDir>/components/organisms$1',
		'^Templates(.*)$': '<rootDir>/components/templates$1',
		// Other folders
		'^@Types(.*)$': '<rootDir>/@types$1',
		'^Public(.*)$': '<rootDir>/public$1',
		'^Pages(.*)$': '<rootDir>/pages$1',
		'^Redux(.*)$': '<rootDir>/redux$1',
		'^Utils(.*)$': '<rootDir>/utils$1',
	},
};
