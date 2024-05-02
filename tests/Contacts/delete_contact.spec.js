import { test, expect } from "@playwright/test";
import { baseURL, addContact } from "../helpers.js";

test("delete contact - contact deleted", async ({ page }) => {
  let contactEmail;

  await test.step("test setup", async () => {
    contactEmail = await addContact(page);
  });

  await test.step("select and delete contact", async () => {
    await page.goto(`${baseURL}/contactList`);
    await page.getByRole("cell", { name: contactEmail }).click();
    page.on("dialog", (dialog) => dialog.accept());
    await page.getByRole("button", { name: "Delete Contact" }).click();
  });

  await test.step("verify contact is deleted", async () => {
    await expect(page).toHaveURL(`${baseURL}/contactList`);
    const contactTableEl = page.locator("body");
    await expect(contactTableEl).not.toContainText(contactEmail);
  })
});
