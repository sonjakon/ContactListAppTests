import { test, expect } from "@playwright/test";
import { addContact } from "../helpers.js";

test("add new contact - contact added to the list", async ({ page }) => {
    let contactEmail = await addContact(page);
    await expect(page.getByRole("cell", { name: contactEmail })).toBeVisible();
});
