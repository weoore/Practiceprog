class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.checkoutButton = '#checkout';
      this.firstNameInput = '#first-name';
      this.lastNameInput = '#last-name';
      this.postalCodeInput = '#postal-code';
      this.finishButton = '#finish';
    }
  
    async startCheckout() {
      await this.page.click(this.checkoutButton);
    }
  
    async fillCheckoutDetails(firstName, lastName, postalCode) {
      await this.page.fill(this.firstNameInput, firstName);
      await this.page.fill(this.lastNameInput, lastName);
      await this.page.fill(this.postalCodeInput, postalCode);
    }
  
    async completeCheckout() {
      await this.page.click(this.finishButton);
    }
  }
  
  module.exports = { CheckoutPage };
  