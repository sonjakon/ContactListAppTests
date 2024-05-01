import { test, expect } from '@playwright/test';
import { setup as authSetup } from './auth/auth.setup.js';

let page;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await authSetup({ page });
});

test.use({ storageState: 'playwright/.auth/user.json' });

test('edit contact details - contact details updated', async ({ page }) => {

    await test.step("edit contact from the list", async () => {
        await page.goto('https://thinking-tester-contact-list.herokuapp.com/contactList');
        await page.getByRole('cell', { name: 'Ime Prezime' }).click();
        await page.getByRole('button', { name: 'Edit Contact' }).click();

        await page.evaluate(() => {
            const streetAddressInput = document.getElementById('street2');
            streetAddressInput.value = '';
        });

        const newText = 'Treca Adresa III';
        await page.fill('#street2', newText);

        await page.getByRole('button', { name: 'Submit' }).click();
    })

    await test.step("confirm contact details are updated", async () => {
        await expect(page.getByTestId('street2')).toHaveText('Treca Adresa III');
    })
});