import { Homepage } from "../pages/homePage";
import { CreatePage } from "../pages/createPage";
import { test as baseTest } from "@playwright/test";

const test = baseTest.extend<{
  homePage: Homepage;
  createPage: CreatePage;
}>({
  homePage: async ({ page }, use) => {
    await use(new Homepage(page));
  },
  createPage: async ({ page }, use) => {
    await use(new CreatePage(page));
  },
});
export default test;
