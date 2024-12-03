class HomePage {
    async navigateToSection(sectionText, expectedTitle) {
        await page.getByText(sectionText).click();
        return expect(await page.title()).to.equal(expectedTitle);
    }

    async verifyChildVisibility(parentXpath, childXpath) {
        const parentElement = page.locator(parentXpath);
        const childElement = parentElement.locator(childXpath);
        const isChildVisible = await childElement.isVisible();
        expect(isChildVisible).toBeTruthy();
    }

    async confirmTags(parentXpath, childXpath, tags) {
        const parentElement = page.locator(parentXpath);
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