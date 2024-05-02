import { test, expect } from "@playwright/test";
import { addContact, baseURL } from "../helpers";

test("view contact - contact details are presented", async ({ page }) => {
  let contactEmail;

  await test.step("test setup", async () => {
    contactEmail = await addContact(page);
  });

  await test.step("view contact details", async () => {
    await page.goto(`${baseURL}/contactList`);
    await page.getByRole("cell", { name: contactEmail }).click();
    await expect(page).toHaveURL(`${baseURL}/contactDetails`);

    const emailElement = page.locator("#email");
    await expect(emailElement).toContainText(contactEmail);
  });
});
