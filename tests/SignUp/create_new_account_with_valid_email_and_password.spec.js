import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker'

test('create new account with valid email and password - successful sign up', async ({ page }) => {

    test.slow();

    const username = faker.internet.userName();
    const email = username + '@blondmail.com';

    await test.step("sign up to Contact List App", async () => {
        await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
        await page.getByRole('button', { name: 'Sign up' }).click();
        await page.getByPlaceholder('First Name').click();
        await page.getByPlaceholder('First Name').fill('Ime');
        await page.getByPlaceholder('Last Name').click();
        await page.getByPlaceholder('Last Name').fill('Prezime');
        await page.getByPlaceholder('Email').click();
        await page.getByPlaceholder('Email').fill(email);
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('sonja123');
        await page.getByRole('button', { name: 'Submit' }).click();
    })

    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});