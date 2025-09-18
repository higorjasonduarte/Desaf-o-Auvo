const { test, expect } = require('@jest/globals');
const { chromium } = require('playwright');
const LoginPage = require('../pages/login.page');
const ProductsPage = require('../pages/products.page');
const ProductDetailPage = require('../pages/product-detail.page');

test('Validar detalhes do produto', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const productDetailPage = new ProductDetailPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'secret_sauce');
  
  await productsPage.searchProduct('Sauce Labs Backpack');
  const productDetails = await productDetailPage.getProductDetails();
  expect(productDetails.title).toBe('Sauce Labs Backpack');
  expect(productDetails.price).toBe('$29.99');
  expect(productDetails.description).toBe('Carry all the things in this sleek backpack made of high quality material.');

  await browser.close();
});
