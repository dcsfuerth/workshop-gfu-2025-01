import type { Config } from 'jest';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  // setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  testEnvironment: 'jsdom',
};

export default jestConfig;
