import { Page, expect, Locator } from "playwright/test";

export class Homepage {
  readonly page: Page;
  readonly startButton: Locator;
  readonly scramblerHomePageText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startButton = this.page.getByRole("link", { name: "Start to Create" });
    this.scramblerHomePageText = this.page.getByRole("heading", {
      name: /scrambler ducati meets artificial intelligence/i,
    });
  }

  async navigateToHomePage() {
    await expect(this.scramblerHomePageText).toBeVisible();
  }

  async clickStartToCreate() {
    await expect(this.startButton).toBeVisible();
    await this.startButton.click();
  }
}
