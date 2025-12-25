import {test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ENV } from "../utils/envload";
import { LoginCredentails } from "../utils/LoginCredentials";

type LoginFixtures = {
    loginPage: LoginPage;
    ValidCredentials: LoginCredentails;
}

export const test = base.extend <LoginFixtures> (
    {
        loginPage: async ({page}, use) => {
            const loginPage = new LoginPage(page);
            await loginPage.open(ENV.BASE_URL);
            await use(loginPage);
            
        },

        ValidCredentials: async ({}, use) => {
            await use({
                username: ENV.user,
                password: ENV.passwd
            })
        }
    }
)