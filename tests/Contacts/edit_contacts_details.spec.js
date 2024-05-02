import { test, expect } from "@playwright/test";
import { addContact, baseURL } from "../helpers";
import { faker } from "@faker-js/faker";

test("edit contact details - contact details updated", async ({ page }) => {
  let contactEmail;

  await test.step("test setup", async () => {
    contactEmail = await addContact(page);
  });

  const newAddress = faker.location.street();

  await test.step("edit contact from the list", async () => {
    await page.goto(`${baseURL}/contactList`);
    await page.getByRole("cell", { name: contactEmail }).click();
    await page.getByRole("button", { name: "Edit Contact" }).click();

    // Wait for the data to load
    const emailInput = page.locator("#email");
    await expect(emailInput).toHaveValue(contactEmail);

    // Set new address
    await page.fill("#street2", newAddress);
    await page.getByRole("button", { name: "Submit" }).click();
  });

  await test.step("confirm contact details are updated", async () => {
    await page.waitForURL(`${baseURL}/contactDetails`);
    const streetEl = page.locator("#street2");
    await expect(streetEl).toHaveText(newAddress, { timeout: 10000 });
  });
});
