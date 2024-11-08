const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');
const { InventoryPage } = require('../pages/inventory');
const { MenuPage } = require('../pages/menu');

test('Add item to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const menuPage = new MenuPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await inventoryPage.addToCart(0); // Добавляем первый товар

  // Получаем количество товаров в корзине
  const cartCount = await inventoryPage.getCartCount();
  await expect(cartCount).toBe('1'); // Сравниваем с ожидаемым значением

  // Сброс состояния
  await menuPage.resetAppState();
});
