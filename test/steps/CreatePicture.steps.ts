import { Given, When, Then } from "@cucumber/cucumber";
import { Homepage } from "../pages/homePage";
import { CreatePage } from "../pages/createPage";
import { CustomWorld } from "../support/world";
import { create } from "domain";

Given(
  "I am on the Ducati Scrambler website",
  async function (this: CustomWorld) {
    const homepage = new Homepage(this.page);
    await homepage.navigateToHomePage();
  }
);

When("I click Start to Create", async function (this: CustomWorld) {
  const homepage = new Homepage(this.page);
  await homepage.clickStartToCreate();
});

Then(
  "I should see the Create Your Custom Scrambler Ducati page",
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    await createPage.ducatiCustomScrambler();
  }
);

Given("I am on the image creation page", async function (this: CustomWorld) {
  const homepage = new Homepage(this.page);
  await homepage.clickStartToCreate();
});

When(
  "I fill in the prompt and click Generate",
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    await createPage.fillingPromptAndGenerate();
  }
);

Then(
  "I wait for the generation process to complete",
  { timeout: 60000 },
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    await createPage.waitForGeneration();
  }
);

Then(
  "I should see the 4 generated images",
  { timeout: 60000 },
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    await createPage.fourImagesGenerated();
  }
);

Given(
  "the 4 images have been generated and are visible",
  { timeout: 60000 },
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    const homepage = new Homepage(this.page);
    await homepage.clickStartToCreate();
    await createPage.fillingPromptAndGenerate();
    await createPage.waitForGeneration();
    await createPage.fourImagesGenerated();
  }
);

When(
  "I fill in my details and accept the terms",
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    await createPage.fillDetails();
  }
);

When("I click Submit", async function (this: CustomWorld) {
  const createPage = new CreatePage(this.page);
  await createPage.clickSubmit();
});

Then(
  "I should be able to choose one of the 4 images",
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    await createPage.chooseImage();
  }
);

Then(
  "the resolution of the saved file should be 2056 x 1368",
  async function (this: CustomWorld) {
    const createPage = new CreatePage(this.page);
    await createPage.downloadImage();
    await createPage.assertDownloaded();
    await createPage.assertDownloadedImageSize();
  }
);
