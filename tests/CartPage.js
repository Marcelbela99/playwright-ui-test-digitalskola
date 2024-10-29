class CartPage {
    constructor(page) {
        this.page = page;
        this.cartBadge = '.shopping_cart_badge';
        this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
    }

    async addItemToCart() {
        await this.page.click(this.addToCartButton);
    }

    async isItemAdded() {
        return await this.page.isVisible(this.cartBadge);
    }
}
export default CartPage;
