module.exports = {
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
  testMatch: ['**/src/**/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babel: true,
      tsconfig: 'tsconfig.json',
    }]
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@app/constants': '<rootDir>/src/constants',
    '@app/controllers': '<rootDir>/src/controllers',
    '@app/guards': '<rootDir>/src/guards',
    '@app/models': '<rootDir>/src/models',
    '@app/services': '<rootDir>/src/services',
    '@app/utils': '<rootDir>/src/utils',
    '@app/testing': '<rootDir>/src/testing',
  },
};
