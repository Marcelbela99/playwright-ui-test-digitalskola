class DashboardPage {
    constructor(page) {
        this.page = page;
        this.inventoryList = '.inventory_list';
    }

    async isOnDashboard() {
        return await this.page.isVisible(this.inventoryList);
    }
}
module.exports = DashboardPage;
