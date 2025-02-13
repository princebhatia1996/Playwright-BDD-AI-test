import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "playwright";

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext({
      viewport: { width: 1920, height: 1080 },
    });
    this.page = await context.newPage();

    await this.page.goto("https://hacktheicon.scramblerducati.com/");
    await this.page.getByRole("button", { name: "Accept All Cookies" }).click();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
