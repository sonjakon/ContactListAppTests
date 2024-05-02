import { test, expect } from "@playwright/test";
import { baseURL, signUp } from "../helpers";

test("log out - shows login form", async ({ page }) => {
  await page.goto(`${baseURL}/contactList`);
  await page.getByRole("button", { name: "Logout" }).click();
  await expect(page.locator("form input#email")).toBeVisible();
  await expect(page.locator("form input#password")).toBeVisible();
});
