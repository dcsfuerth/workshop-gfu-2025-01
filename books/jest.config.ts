import type { Config } from 'jest';
import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
};

export default jestConfig;
