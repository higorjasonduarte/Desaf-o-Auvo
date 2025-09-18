const { test, expect } = require('@jest/globals');
const { chromium } = require('playwright');
const LoginPage = require('../pages/login.page');
const ProductsPage = require('../pages/products.page');
const ProductDetailPage = require('../pages/product-detail.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');

// Lista de usuários permitidos para checkout
const users = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
  { username: 'performance_glitch_user', password: 'secret_sauce' },
  { username: 'visual_user', password: 'secret_sauce' },
];

test.each(users)(
  'Finalizar pedido para o usuário %s',
  async ({ username, password }) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(username, password);

    // Verifica se o login foi bem-sucedido
    const urlAfterLogin = page.url();
    expect(urlAfterLogin).toBe('https://www.saucedemo.com/inventory.html');

    // Pesquisa e adiciona produto ao carrinho
    await productsPage.searchProduct('Sauce Labs Backpack');
    await productDetailPage.addToCart();

    // Vai para o carrinho e faz o checkout
    await cartPage.goToCheckout();
    await checkoutPage.completeCheckout('John', 'Doe', '12345');

    const urlAfterCheckout = page.url();
    expect(urlAfterCheckout).toBe('https://www.saucedemo.com/checkout-complete.html');

    await browser.close();
  }
);
