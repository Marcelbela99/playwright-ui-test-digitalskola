import { expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    async login() {
        await this.page.goto(process.env.BASE_URL); 
        await this.page.waitForLoadState('networkidle'); 
        await this.page.waitForTimeout(2000); 
        await expect(this.page).toHaveScreenshot('login-page.png', { maxDiffPixels: 1000 });
        await this.page.waitForSelector(this.usernameInput, { timeout: 60000 }); 
        await this.page.addStyleTag({ content: '* { transition: none !important; animation: none !important; }' });
        await this.page.fill(this.usernameInput, process.env.USERNAME); 
        await this.page.fill(this.passwordInput, process.env.PASSWORD); 
        await this.page.click(this.loginButton);
    }

    async takeScreenshot() {
        await this.page.screenshot({ path: 'login-page.png' });
    }
}

export default LoginPage;
