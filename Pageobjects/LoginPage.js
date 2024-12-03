class LoginPage {

    async navigateToLoginScreen() {
        return await page.goto(global.BASE_URL);
    }

    async verifyLoginPageIsDisplayed() {
        return expect(await page.title()).to.equal('Log in - Asana');
    }

    async submitLoginForm() {
        const emailId = "ben+pose@workwithloop.com";
        const passwordId ="Password123";
        const elementEmail = await page.waitForSelector(locators.email);
        const email = await page.locator('#lui_2').fill(emailId);
        const continueButton = await page.getByText('Continue').click();
        const elementPassword = await page.waitForSelector(locators.password);
        const password = await page.locator('#lui_6').fill(passwordId);
        const logInButton = await page.getByText('Log in').click();
     
    }

    async verifyHomePageIsDisplayed() {
        return expect(await page.title()).to.equal('Home - Asana');
    }

    async verifyEmailErrormessage() {
        const elementEmail = await page.waitForSelector(locators.email);
        await page.fill(email,'7656787654');
        const emailError = await expect(page.getByRole('alert', {name: 'Please enter a valid email address.'})).toBeVisible();

    }

    async verifyPasswordErrormessage() {
        const elementPassword = await page.waitForSelector(locators.password);
        await page.fill(email,emailId);
        await page.continueButton.click();
        await page.fill(password, 'password');
        await page.logInButton.click();
        const passwordError = await expect(page.getByRole('alert', {name: 'The username or password is not correct.'})).toBeVisible();

    }
}