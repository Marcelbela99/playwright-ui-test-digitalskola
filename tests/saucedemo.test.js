import { test, expect } from '@playwright/test';
import LoginPage from './LoginPage.js';

let loginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
});

test('User login with visual assertion', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.takeScreenshot(); // Visual assertion untuk halaman login
});

test.describe('SauceDemo Test', () => {
  
  test('User success login and add item to cart', async ({ page }) => {
    // Step login 
    await page.goto('https://www.saucedemo.com');
    
    // Step Fill in username and password 
    await page.fill('input[name="user-name"]', 'standard_user');
    await page.fill('input[name="password"]', 'secret_sauce');
    await page.click('input[type="submit"]');

    // Step Validate user is on the dashboard
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

    // Step Add the first item to the cart
    await page.click('button[data-test="add-to-cart-sauce-labs-backpack"]');
    
    // Step Validate that the cart icon shows 1 item
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

     // Step Take a screenshot of the dashboard for visual verification
    await loginPage.takeScreenshot(); 
  })

});

