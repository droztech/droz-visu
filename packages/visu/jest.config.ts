import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>$1',
    '^@library(.*)$': '<rootDir>/src/library$1',
    '^@types(.*)$': '<rootDir>/src/library/types$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['src/library/**/**'],
  coveragePathIgnorePatterns: ['src/library/index.ts', 'src/library/styles'],
}

export default config
