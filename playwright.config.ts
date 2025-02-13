import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./features",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: "list",
  use: {
    headless: false,
    actionTimeout: 0,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
