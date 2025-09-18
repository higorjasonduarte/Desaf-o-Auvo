const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/loginPage');
const { ProductsPage } = require('./pages/products.page');
const { ProductDetailPage } = require('./pages/product-detail.page');
const { CartPage } = require('./pages/cart.page');
const { CheckoutPage } = require('./pages/checkout.page');

test('E2E: Compra de produto no SauceDemo', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetail = new ProductDetailPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await page.goto('https://www.saucedemo.com');
  await login.login('standard_user', 'secret_sauce');

  await products.selectFirstProduct();
  await productDetail.validateProductDetails();
  await productDetail.addToCart();

  await cart.goToCart();
  await cart.proceedToCheckout();

  await checkout.fillCheckoutForm('João', 'Silva', '12345');
  await checkout.finishOrder();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
