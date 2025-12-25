import { Page, Locator, expect } from "@playwright/test";
import { LoginCredentails } from "../utils/LoginCredentials";
import { LoginStatus } from "../utils/LoginStatus";

export class LoginPage {
    readonly page: Page;

    // Locators grouped & typed
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.submitButton = page.locator("#submit");
        this.errorMessage = page.locator("#error");
        this.logoutButton = page.locator("a", { hasText: "Log out" });
    }

    /**
     * Opens the login page
     */
    async open(url: string): Promise<void> {
        await this.page.goto(url);
    }

    /**
     * Performs login using typed credentials
     */
    async login(credentials: LoginCredentails): Promise<LoginStatus> {
        const { username, password } = credentials;

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();

        if (await this.errorMessage.isVisible()) {
            return LoginStatus.FAILURE;
        }

        return LoginStatus.SUCCESS;
    }

    /**
     * Verifies login failure scenario
     */
    async verifyErrorMessage(expectedMessage: string): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText(expectedMessage);
    }

    /**
     * Verifies successful login
     */
    async verifySuccessfulLogin(): Promise<void> {
        await expect(this.page).toHaveURL(/logged-in-successfully/);
        await expect(this.page.locator("text=Congratulations")).toBeVisible();
        await expect(this.logoutButton).toBeVisible();
    }
}
