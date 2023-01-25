/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@routes/(.*)$': '<rootDir>/src/routes/$1',
    '^@servers/(.*)$': '<rootDir>/src/servers/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@validations/(.*)$': '<rootDir>/src/validations/$1',
  },
}