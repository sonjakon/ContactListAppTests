import { test, expect } from "@playwright/test";
import { signUp } from "../helpers";

// Reset storage state to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } });

test("create new account - user is logged in", async ({ page }) => {
  await test.step("sign up as a new user", async () => {
    await signUp(page);
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
});