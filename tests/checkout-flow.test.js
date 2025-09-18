const { chromium } = require('playwright');
const LoginPage = require('../pages/login.page');
const ProductsPage = require('../pages/products.page');
const CartPage = require('../pages/cart.page');
const CheckoutPage = require('../pages/checkout.page');

describe('E2E Checkout Flow - SauceDemo', () => {
  let browser, context, page;
  let loginPage, productsPage, cartPage, checkoutPage;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should complete a purchase successfully', async () => {
    // 1. Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // 2. Validação do produto e navegação
    await productsPage.validateProduct('Sauce Labs Backpack', '$29.99');

    // 3. Adicionar ao carrinho
    await productsPage.addBackpackToCart();
    await productsPage.goToCart();

    // 4. Validar produto no carrinho e ir para checkout
    await cartPage.validateProductInCart('Sauce Labs Backpack');
    await cartPage.proceedToCheckout();

    // 5. Preencher dados e finalizar pedido
    await checkoutPage.fillInformation('Higor', 'de Oliveira', '38553-154');
    await checkoutPage.finishOrder();

    const success = await checkoutPage.validateSuccess();
    expect(success).toContain('Thank you for your order!');
  }, 60000);
});
