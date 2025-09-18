class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.productTitle = page.locator('.inventory_details_name');
    this.productPrice = page.locator('.inventory_details_price');
    this.productDescription = page.locator('.inventory_details_desc');
    this.addToCartButton = page.locator('[data-test="add-to-cart-button"]');
  }

  async getProductDetails() {
    const title = await this.productTitle.textContent();
    const price = await this.productPrice.textContent();
    const description = await this.productDescription.textContent();
    return { title, price, description };
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = ProductDetailPage;
