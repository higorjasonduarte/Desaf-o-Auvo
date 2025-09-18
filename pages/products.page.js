class ProductsPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('[data-test="product_search"]');
    this.productList = page.locator('.inventory_item');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.page.keyboard.press('Enter');
  }

  async getProducts() {
    return await this.productList.allTextContents();
  }
}

module.exports = ProductsPage;
