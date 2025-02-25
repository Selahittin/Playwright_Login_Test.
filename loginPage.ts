import { test, expect } from '@playwright/test';

test('Successful login to Practice Test Automation', async ({ page }) => {
    // Go to the login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Fill in the username
    await page.fill('#username', 'student');

    // Fill in the password
    await page.fill('#password', 'Password123');

    // Click the submit button
    await page.click('#submit');

    // Verify successful login
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
    await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');

    // Verify the logout button is visible
    await expect(page.locator('a[href="/practice-test-login/"]')).toBeVisible();
});
