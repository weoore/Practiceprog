class MenuPage {
  constructor(page) {
      this.page = page;
      this.menuButton = '#react-burger-menu-btn';
      this.resetAppStateButton = '#reset_sidebar_link';
  }

  async resetAppState() {
    await this.page.waitForSelector(this.menuButton, { state: 'visible', timeout: 60000 });
    await this.page.click(this.menuButton);
  
    await this.page.waitForSelector(this.resetAppStateButton, { state: 'visible', timeout: 60000 });
    await this.page.click(this.resetAppStateButton);
  }  
}

module.exports = { MenuPage };
