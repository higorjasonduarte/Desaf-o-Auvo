const { test, expect } = require('@jest/globals');
const { chromium } = require('playwright');
const LoginPage = require('../pages/login.page');
const ProductsPage = require('../pages/products.page');

test('Pesquisar um produto', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  
  await productsPage.searchProduct('Sauce Labs Backpack');
  const products = await productsPage.getProducts();
  expect(products).toContain('Sauce Labs Backpack');

  await browser.close();
});
