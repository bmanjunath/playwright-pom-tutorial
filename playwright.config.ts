import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load .env automatically
dotenv.config({ path: path.resolve(__dirname, 'env/.env') });

export default defineConfig({
  testDir: './tests',
  workers: 3,
  fullyParallel: true,
  retries: 1,
  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,                  // browser will open visibly
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: { slowMo: 300 },   // slows actions for visibility
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
