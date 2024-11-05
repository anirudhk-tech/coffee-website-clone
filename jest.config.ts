/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/imageMock.tsx',
  },
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      {
				jsc: {
					target: "es2021",
				},
			},
    ], // Use SWC for transforming JS/TS files
  },
  preset: "ts-jest",
};

module.exports = createJestConfig(config);
