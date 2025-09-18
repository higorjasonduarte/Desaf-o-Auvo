class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('.inventory_item_name');
    this.backpackAddToCart = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async validateProduct(title, price) {
    const product = this.page.locator('.inventory_item').filter({ hasText: title });
    await product.locator('.inventory_item_name').isVisible();
    await product.locator('.inventory_item_price').isVisible();
  }

  async addBackpackToCart() {
    await this.backpackAddToCart.click();
  }

  async goToCart() {
    await this.cartButton.click();
  }
}

module.exports = ProductsPage;
