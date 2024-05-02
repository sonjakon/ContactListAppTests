import { test as setup, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { baseURL } from "./helpers";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  const email = faker.internet.email();

  await page.goto(baseURL);
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Ime");
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("Prezime");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("sonja123");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();

  await page.context().storageState({ path: authFile });
});
