const { Given, When , Then , Before } = require('@cucumber/cucumber');
const playwright = require('playwright');
const LoginHomePage = require('../Pageobjects/LoginHomePage');

let loginhomePage;  // Declare the variable to hold the instance

Before(async function () {
    // This hook will be executed before all scenarios
    const browser = await playwright.chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    this.page = await context.newPage();

    // Now, instantiate loginhomePage after this.page is initialized
    loginhomePage = new LoginHomePage(this.page);
});

Given('I am on the login screen', async function() {
    await loginhomePage.navigateToLoginScreen();
    await loginhomePage.verifyLoginPageIsDisplayed();
  });

When('I fill the login form with valid credentials', async function() {
    await loginhomePage.submitLoginForm();
  });

Then('I should be able to see the home screen', async function() {
    await loginhomePage.verifyHomePageIsDisplayed();
  });

Then('Navigate to Cross-functional project plan, Project', async function() {
    await loginhomePage.navigateToCrossFunctionalProject();
    
});

Then('Verify Draft project brief is in the To do column', async function() {
    await loginhomePage.verifyToDoListDraftProjectBrief();
});

Then('Confirm tags: Non-Priority and On track', async function() {
    await loginhomePage.confirmPriorityOnTrack();
});

Then('Verify Schedule kickoff meeting is in the To do column', async function() {
    await loginhomePage.verifyToDoListScheduleMeeting();
});

Then('Confirm tags: Medium and At risk', async function() {
    await loginhomePage.confirmMediumAtRisk();
});

Then('Verify Share timeline with teammates is in the To do column', async function() {
    await loginhomePage.verifyToDoListShareTimeline();
});

Then('Confirm tags: High and Off Track', async function() {
    await loginhomePage.confirmHighOffTrack();
});

Then('Navigate to Work Requests', async function() {
    await loginhomePage.navigateToWorkRequests();
    
});

Then('Verify Laptop setup for new hire is in the New Requests column', async function() {
    await loginhomePage.verifyNewRequests();
});

Then('Confirm tags: Medium priority, Low effort, New hardware, and Not Started', async function() {
    await loginhomePage.confirmNewRequestTags();
});

Then('Verify Password not working is in the New Requests column', async function() {
    await loginhomePage.verifyInProgress();
});

Then('Confirm tags: Low priority, Low effort, Password reset, and Waiting', async function() {
    await loginhomePage.confirmInProgressTags();
});

Then('Verify New keycard for Daniela V is in the New Requests column', async function() {
    await loginhomePage.verifyCompleted();
});

Then('Confirm tags: High priority, Low effort, New hardware, and Done', async function() {
    await loginhomePage.confirmCompletedTags();
});