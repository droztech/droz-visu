const config = {
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>$1',
    '^@library(.*)$': '<rootDir>/src/library$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['src/library/**/**'],
  coveragePathIgnorePatterns: ['src/library/index.ts'],
}

export default config
