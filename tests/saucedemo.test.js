const { test, expect } = require('@playwright/test');

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
  });

});

