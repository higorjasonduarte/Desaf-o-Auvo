class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
  }

  async validateProductInCart(productName) {
    await this.page.locator('.cart_item').filter({ hasText: productName }).isVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;
