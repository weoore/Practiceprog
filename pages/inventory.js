class InventoryPage {
    constructor(page) {
      this.page = page;
      this.addButtons = '.inventory_item button';
      this.cartBadge = '.shopping_cart_badge';
      this.cartLink = '.shopping_cart_link';
    }
  
    async addToCart(itemIndex) {
      await this.page.locator(this.addButtons).nth(itemIndex).click();
    }
  
    async goToCart() {
      await this.page.click(this.cartLink);
    }
  
    async getCartCount() {
      return await this.page.locator(this.cartBadge).innerText();
    }
  }
  
  module.exports = { InventoryPage };
  