import { Page, expect, Locator } from "playwright/test";

export class CreatePage {
  readonly page: Page;
  readonly ducatiTitle: Locator;
  readonly textBoxForDescription: Locator;
  readonly generateButton: Locator;
  readonly generationLoadingIcon: Locator;
  readonly fourImages: Locator[];
  readonly firsName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly selectCountry: Locator;
  readonly submitButton: Locator;
  readonly tandcCheckbox: Locator;
  readonly nextButton: Locator;
  readonly downloadButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ducatiTitle = this.page.getByRole("heading", {
      name: /create your custom scrambler ducati/i,
    });
    this.textBoxForDescription = this.page.getByRole("textbox", {
      name: "Scrambler Ducati [Insert your",
    });
    this.generateButton = this.page.getByRole("button", {
      name: "Generate",
      exact: true,
    });
    this.generationLoadingIcon = this.page.getByRole("img", {
      name: "Spinning animated Scrambler",
    });
    this.fourImages = [
      this.page.getByRole("button", { name: "generated image" }).first(),
      this.page.getByRole("button", { name: "generated image" }).nth(1),
      this.page.getByRole("button", { name: "generated image" }).nth(2),
      this.page.getByRole("button", { name: "generated image" }).nth(3),
    ];
    this.firsName = this.page.getByRole("textbox", { name: "First Name" });
    this.lastName = this.page.getByRole("textbox", { name: "Last Name" });
    this.email = this.page.getByRole("textbox", { name: "Email" });
    this.selectCountry = this.page.getByRole("combobox", {
      name: "Select Country",
    });
    this.submitButton = this.page.getByRole("button", { name: "Submit" });
    this.tandcCheckbox = this.page.getByRole("checkbox", {
      name: "to understand your",
    });
    this.nextButton = this.page.getByRole("button", { name: "Next" });
    this.downloadButton = this.page.getByRole("button", { name: "Download" });
  }

  async ducatiCustomScrambler() {
    await expect(this.ducatiTitle).toBeVisible();
    await expect(this.textBoxForDescription).toBeVisible();
    await expect(this.generateButton).toBeVisible();
  }

  async fillingPromptAndGenerate() {
    await this.textBoxForDescription.fill("I want a black ducati");
    await this.generateButton.click();
  }

  async waitForGeneration() {
    await expect(this.generationLoadingIcon).toBeHidden();
  }

  async fourImagesGenerated() {
    for (const image of this.fourImages) {
      await expect(image).toBeVisible({ timeout: 60000 });
    }
  }

  async fillDetails() {
    await this.firsName.fill("John");
    await this.lastName.fill("Doe");
    await this.email.fill("jd@test.com");
    await this.selectCountry.click();
    await this.page.getByRole("option", { name: "Albania" }).click();
    await this.tandcCheckbox.check();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async chooseImage() {
    await this.fourImages[0].click();
    await this.nextButton.click();
  }

  async downloadImage() {
    await this.downloadButton.click();
  }

  async assertDownloadedImageSize() {
    //This does not work because when you try download the image an error occurs
  }
}
