import { expect } from "@playwright/test";
import { test } from "../fixtures/login.fixtures"
import { LoginCredentails } from "../utils/LoginCredentials";
import { LoginStatus } from "../utils/LoginStatus";

test.describe("Login Tests)", () => {


test ("positive login test", async ({ loginPage, ValidCredentials}) => {

    const status = await loginPage.login(ValidCredentials);

    expect(status).toBe(LoginStatus.SUCCESS);
    await loginPage.verifySuccessfulLogin();
}

);

test ("negative login test for username", async ({ loginPage, ValidCredentials}) => {

const invaliduser: LoginCredentails = {
    ...ValidCredentials,
    username: "invalid"
}
    const status = await loginPage.login(invaliduser);
    expect(status).toBe(LoginStatus.FAILURE)
    await loginPage.verifyErrorMessage("Your username is invalid!")
}

);


test ("negative login test for passowrd", async ({ loginPage, ValidCredentials}) => {

    const invaliduser: LoginCredentails = {
        ...ValidCredentials,
        password: "password"
    }
        const status = await loginPage.login(invaliduser);
        expect(status).toBe(LoginStatus.FAILURE)
        await loginPage.verifyErrorMessage("Your password is invalid!")
    }
    
    );

    // test("Positive login test", async ({ page }) => {
    //     const loginPage = new LoginPage(page);

    //     const credentials: LoginCredentails = {
    //         username: ENV.user,
    //         password: ENV.passwd
    //     };

    //     await loginPage.open(ENV.BASE_URL);

    //     const status = await loginPage.login(credentials);

    //     expect(status).toBe(LoginStatus.SUCCESS);
    //     await loginPage.verifySuccessfulLogin();
    // });


    

    // test("Negative username test", async ({ page }) => {
    //     const loginPage = new LoginPage(page);

    //     const credentials: LoginCredentails = {
    //         username: "incorrectUser",
    //         password: ENV.passwd
    //     };

    //     await loginPage.open(ENV.BASE_URL);

    //     const status = await loginPage.login(credentials);

    //     expect(status).toBe(LoginStatus.FAILURE);
    //     await loginPage.verifyErrorMessage("Your username is invalid!");
    // });

    // test("Negative password test", async ({ page }) => {
    //     const loginPage = new LoginPage(page);

    //     const credentials: LoginCredentails = {
    //         username: ENV.user,
    //         password: "incorrectPassword"
    //     };

    //     await loginPage.open(ENV.BASE_URL);

    //     const status = await loginPage.login(credentials);

    //     expect(status).toBe(LoginStatus.FAILURE);
    //     await loginPage.verifyErrorMessage("Your password is invalid!");
    // });

});
