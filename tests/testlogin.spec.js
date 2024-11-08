const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');

test('Login with empty fields shows error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('', '');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username is required');
});
