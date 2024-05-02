import { test, expect } from "@playwright/test";
import { baseURL, signUp } from "../helpers";

// Reset storage state to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } });

test("enter valid credentials - successful login", async ({ page }) => {
  let userEmail;

  await test.step("test setup", async () => {
    userEmail = await signUp(page);
    await page.getByRole("button", { name: "Logout" }).click();
  });

  await test.step("log in with a new account", async () => {
    await page.goto(baseURL);
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill(userEmail);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("sonja123");
    await page.getByRole("button", { name: "Submit" }).click();
  });

  await test.step("verify logout button is shown", async () => {
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  })
});
