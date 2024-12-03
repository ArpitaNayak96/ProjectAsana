class HomePage {

    async navigatetoCrossFunctionalproject() {
        const project = await page.getByText('Cross-functional project plan, Project').click();
        return expect(await page.title()).to.equal('Cross-functional project plan, Project - Asana');
    
    }

    async verifyToDolistDraftProjectBrief() {
        const parentElement_toDoList = page.locator('xpath=//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]');
        const childElement_DraftProjectbrief = parentElement_toDoList.locator('xpath=(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[2]');
        const isDraftChildVisible = await childElement_DraftProjectbrief.isVisible();
        expect(isDraftChildVisible).toBeTruthy();
    }

    async confirmTagsProrityOntract() {
        const parentElement_toDoList = page.locator('xpath=//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]');
        const childElement_DraftProjectbrief = parentElement_toDoList.locator('xpath=(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[2]');
        const nestedElementPriority = childElement_DraftProjectbrief.locator('xpath=.//span[contains(text(), "Non-Priority")]');
        const nestedElementOnTrack = childElement_DraftProjectbrief.locator('xpath=.//span[contains(text(), "On track")]');
        const ispriorityNestedElementVisible = await nestedElementPriority.isVisible();
        expect(ispriorityNestedElementVisible).toBeTruthy();
        const isOnTrackNestedElement2Visible = await nestedElementOnTrack.isVisible();
        expect(isOnTrackNestedElement2Visible).toBeTruthy();
    }

    async verifyToDolistScheduleMeeting() {
        const parentElement_toDoList = page.locator('xpath=//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]');
        const childElement_Schedulemeeting = parentElement_toDoList.locator('xpath=(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[3]');
        const isMeetingChildVisible = await childElement_Schedulemeeting.isVisible();
        expect(isMeetingChildVisible).toBeTruthy();
    }

    async confirmTagsMediumAtRisk() {
        const parentElement_toDoList = page.locator('xpath=//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]');
        const childElement_Schedulemeeting = parentElement_toDoList.locator('xpath=(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[3]');
        const nestedElementMedium = childElement_Schedulemeeting.locator('xpath=.//span[contains(text(), "Medium")]');
        const nestedElementAtRisk = childElement_Schedulemeeting.locator('xpath=.//span[contains(text(), "At risk")]');
        const isMediumNestedElementVisible = await nestedElementMedium.isVisible();
        expect(isMediumNestedElementVisible).toBeTruthy();
        const isRiskNestedElementVisible = await nestedElementAtRisk.isVisible();
        expect(isRiskNestedElementVisible).toBeTruthy();
    }

    async verifyToDolistShareTimeline() {
        const parentElement_toDoList = page.locator('xpath=//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]');
        const childElement_ShareTimeline = parentElement_toDoList.locator('xpath=(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[2]');
        const isTimelineChildVisible = await childElement_ShareTimeline.isVisible();
        expect(isTimelineChildVisible).toBeTruthy();
    }

    async confirmTagsMediumAtRisk() {
        const parentElement_toDoList = page.locator('xpath=//div[@id="asana"]//div[contains(@class, "CommentOnlyBoardBody-column")][2]');
        const childElement_ShareTimeline = parentElement_toDoList.locator('xpath=(.//div[contains(@class, "BoardCardLayout-contentAboveSubtasks")])[2]');
        const nestedElementHigh = childElement_ShareTimeline.locator('xpath=.//span[contains(text(), "High")]');
        const nestedElementOffTrack = childElement_ShareTimeline.locator('xpath=.//span[contains(text(), "Off track")]');
        const isHighNestedElementVisible = await nestedElementHigh.isVisible();
        expect(isHighNestedElementVisible).toBeTruthy();
        const isOfftrackNestedElementVisible = await nestedElementOffTrack.isVisible();
        expect(isOfftrackNestedElementVisible).toBeTruthy();
    }

    async navigatetoWorkRequests() {
        const Workrequest = await page.getByText('Work Requests').click();
        return expect(await page.title()).to.equal('Work Requests - Asana');
    
    }

    async verifyNewRequests() {
        const parentElement_Newrequest = page.locator('xpath=//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][1]');
        const childElement_LaptopSetup = parentElement_Newrequest.locator('xpath=(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[1]');
        const isRequestsChildVisible = await childElement_LaptopSetup.isVisible();
        expect(isRequestsChildVisible).toBeTruthy();
    }

    async confirmTagsNewRequests() {
        const parentElement_Newrequest = page.locator('xpath=//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][1]');
        const childElement_LaptopSetup = parentElement_Newrequest.locator('xpath=(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[1]');
        const nestedElementMediumPriority = childElement_LaptopSetup.locator('xpath=.//span[contains(text(), "Medium priority")]');
        const nestedElementLowEffort = childElement_LaptopSetup.locator('xpath=(.//span[contains(text(), "Low effort")])[1]');
        const nestedElementNewHardware = childElement_LaptopSetup.locator('xpath=(.//span[contains(text(), "New hardware")])[1]');
        const nestedElementNotStarted = childElement_LaptopSetup.locator('xpath=//span[contains(text(), "Not Started")]');
        const isMedPriNestedElementVisible = await nestedElementMediumPriority.isVisible();
        expect(isMedPriNestedElementVisible).toBeTruthy();
        const isLowNestedElementVisible = await nestedElementLowEffort.isVisible();
        expect(isLowNestedElementVisible).toBeTruthy();
        const isHardwareNestedElementVisible = await nestedElementNewHardware.isVisible();
        expect(isHardwareNestedElementVisible).toBeTruthy();
        const isStartedNestedElement2Visible = await nestedElementNotStarted.isVisible();
        expect(isStartedNestedElement2Visible).toBeTruthy();
    }

    async verifyInProgress() {
        const parentElement_Inprogress = page.locator('xpath=//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][3]');
        const childElement_Password = parentElement_Inprogress.locator('xpath=(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[3]');
        const isProgressChildVisible = await childElement_Password.isVisible();
        expect(isProgressChildVisible).toBeTruthy();
    }

    async confirmTagsInprogress() {
        const parentElement_Inprogress = page.locator('xpath=//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][3]');
        const childElement_Password = parentElement_Inprogress.locator('xpath=(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[3]');
        const nestedElementLowPriority = childElement_Password.locator('xpath=.//span[contains(text(), "Low priority")]');
        const nestedElementEffortLow = childElement_Password.locator('xpath=(.//span[contains(text(), "Low effort")])[2]');
        const nestedElementPassword = childElement_Password.locator('xpath=(.//span[contains(text(), "Password reset")])[1]');
        const nestedElementWaiting = childElement_Password.locator('xpath=//span[contains(text(), "Waiting")]');
        const isLowPriNestedElementVisible = await nestedElementLowPriority.isVisible();
        expect(isLowPriNestedElementVisible).toBeTruthy();
        const isEffortNestedElementVisible = await nestedElementEffortLow.isVisible();
        expect(isEffortNestedElementVisible).toBeTruthy();
        const isPasswordNestedElementVisible = await nestedElementPassword.isVisible();
        expect(isPasswordNestedElementVisible).toBeTruthy();
        const isWaitingNestedElement2Visible = await nestedElementWaiting.isVisible();
        expect(isWaitingNestedElement2Visible).toBeTruthy();
    }

    async verifyCompleted() {
        const parentElement_Completed = page.locator('xpath=//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][4]');
        const childElement_Keycard = parentElement_Completed.locator('xpath=(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[4]');
        const isCompletedChildVisible = await childElement_Keycard.isVisible();
        expect(isCompletedChildVisible).toBeTruthy();
    }

    async confirmTagsInprogress() {
        const parentElement_Completed = page.locator('xpath=//div[@class="CommentOnlyBoardColumn CommentOnlyBoardBody-column"][4]');
        const childElement_Keycard = parentElement_Completed.locator('xpath=(.//div[@class="CommentOnlyBoardColumnCardsContainer-cardsList"])[4]');
        const nestedElementHighPriority = childElement_Keycard.locator('xpath=.//span[contains(text(), "High priority")]');
        const nestedElementEffort = childElement_Keycard.locator('xpath=(.//span[contains(text(), "Low effort")])[3]');
        const nestedElementHardware = childElement_Keycard.locator('xpath=(.//span[contains(text(), "New hardware")])[2]');
        const nestedElementDone = childElement_Keycard.locator('xpath=//span[contains(text(), "Done")]');
        const isHighPriNestedElementVisible = await nestedElementHighPriority.isVisible();
        expect(isHighPriNestedElementVisible).toBeTruthy();
        const isLENestedElementVisible = await nestedElementEffort.isVisible();
        expect(isLENestedElementVisible).toBeTruthy();
        const isNewwareNestedElementVisible = await nestedElementHardware.isVisible();
        expect(isNewwareNestedElementVisible).toBeTruthy();
        const isDoneNestedElement2Visible = await nestedElementDone.isVisible();
        expect(isDoneNestedElement2Visible).toBeTruthy();
    }
}