class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('.checkout_button');
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;
