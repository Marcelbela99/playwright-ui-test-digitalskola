// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
  ],
  projects: [
    {
      name: 'chromium' ,
      use: { ...devices['Desktop Chrome'] },
    }
  ],
  
  use: { 
    trace: 'on-first-retry',
  },
});

