const { expect } = require('@playwright/test');

class LoginHomePage {

    constructor(page) {
        this.page = page; // Assign the page instance to the class
    }

    async navigateToLoginScreen() {
        await this.page.goto('https://app.asana.com/-/login', { timeout: 10000 });

    }


    async verifyLoginPageIsDisplayed() {
        const title = await this.page.title(); 
        expect(title).toBe('Log in - Asana');
    }

    async submitLoginForm() {
        const emailId = "ben+pose@workwithloop.com";
        const passwordId ="Password123";
        const elementEmail = await this.page.waitForSelector('//input[contains(@class, "LoginEmailForm-emailInput")]');
        const email = await this.page.locator('//input[contains(@class, "LoginEmailForm-emailInput")]').fill(emailId);
        const continueButton = await this.page.locator('//div[@role="button" and contains(@class, "LoginEmailForm-continueButton")]');
        await continueButton.click();
        const elementPassword = await this.page.waitForSelector('//input[contains(@class, "LoginPasswordForm-passwordInput")]');
        const password = await this.page.locator('//input[contains(@class, "LoginPasswordForm-passwordInput")]').fill(passwordId);
        const logInButton = await this.page.locator('//div[contains(@class, "LoginPasswordForm-loginButton")]').click();
     
    }

    async verifyHomePageIsDisplayed() {
        return expect(await this.page.title()).to.equal('Home - Asana');
    }

    async verifyEmailErrormessage() {
        const elementEmail = await this.page.waitForSelector(locators.email);
        await this.page.fill(email,'7656787654');
        const emailError = await expect(this.page.getByRole('alert', {name: 'Please enter a valid email address.'})).toBeVisible();

    }

    async verifyPasswordErrormessage() {
        const elementPassword = await this.page.waitForSelector(locators.password);
        await this.page.fill(email,emailId);
        await this.page.continueButton.click();
        await this.page.fill(password, 'password');
        await this.page.logInButton.click();
        const passwordError = await expect(this.page.getByRole('alert', {name: 'The username or password is not correct.'})).toBeVisible();

    }    

    async navigateToSection(sectionText, expectedTitle) {
        await this.page.getByText(sectionText).click();
        return expect(await this.page.title()).to.equal(expectedTitle);
    }

    async verifyChildVisibility(parentXpath, childXpath) {
        const parentElement = this.page.locator(parentXpath);
        const childElement = parentElement.locator(childXpath);
        const isChildVisible = await childElement.isVisible();
        expect(isChildVisible).toBeTruthy();
    }

    async confirmTags(parentXpath, childXpath, tags) {
        const parentElement = this.page.locator(parentXpath);
        const childElement = parentElement.locator(childXpath);
        for (const tag of tags) {
            const nestedElement = childElement.locator(`xpath=.//span[contains(text(), "${tag}")]`);
            const isTagVisible = await nestedElement.isVisible();
            expect(isTagVisible).toBeTruthy();
        }
    }

    async navigateToCrossFunctionalProject() {
        return this.navigateToSection('Cross-functional project plan, Project', 'Cross-functional project plan, Project - Asana');
    }

    async verifyToDoListDraftProjectBrief() {
        return this.verifyChildVisibility(
            '//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]',
            './/div[contains(@class, "BoardCardLayout-contentAboveSubtasks")]'
        );
    }

    async confirmPriorityOnTrack() {
        return this.confirmTags(
            '//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]',
            './/div[contains(@class, "BoardCardLayout-contentAboveSubtasks")]',
            ['Draft project brief', 'On track']
        );
    }

    async verifyToDoListScheduleMeeting() {
        return this.verifyChildVisibility(
            '//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]',
            '(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[3]'
        );
    }

    async confirmMediumAtRisk() {
        return this.confirmTags(
            '//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]',
            '(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[3]',
            ['Medium', 'At risk']
        );
    }

    async verifyToDoListShareTimeline() {
        return this.verifyChildVisibility(
            '//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]',
            '(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[2]'
        );
    }

    async confirmHighOffTrack() {
        return this.confirmTags(
            '//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]',
            '(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[2]',
            ['High', 'Off track']
        );
    }

    async navigateToWorkRequests() {
        return this.navigateToSection('Work Requests', 'Work Requests - Asana');
    }

    async verifyNewRequests() {
        return this.verifyChildVisibility(
            '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][1]',
            '(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[1]'
        );
    }

    async confirmNewRequestTags() {
        return this.confirmTags(
            '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][1]',
            '(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[1]',
            ['Medium priority', 'Low effort', 'New hardware', 'Not Started']
        );
    }

    async verifyInProgress() {
        return this.verifyChildVisibility(
            '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][3]',
            '(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[3]'
        );
    }

    async confirmInProgressTags() {
        return this.confirmTags(
            '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][3]',
            '(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[3]',
            ['Low priority', 'Low effort', 'Password reset', 'Waiting']
        );
    }

    async verifyCompleted() {
        return this.verifyChildVisibility(
            '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][4]',
            '(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[4]'
        );
    }

    async confirmCompletedTags() {
        return this.confirmTags(
            '//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][4]',
            '(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[4]',
            ['High priority', 'Low effort', 'New hardware', 'Done']
        );
    }
}

module.exports = LoginHomePage;