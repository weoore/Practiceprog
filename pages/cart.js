class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItem = '.cart_item';
      this.removeButtons = '.cart_item button';
    }
  
    async removeItem(itemIndex) {
      await this.page.locator(this.removeButtons).nth(itemIndex).click();
    }
  
    async getItemCount() {
      return await this.page.locator(this.cartItem).count();
    }
  }
  
  module.exports = { CartPage };
  