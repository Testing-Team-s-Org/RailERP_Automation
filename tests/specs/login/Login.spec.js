
import { test } from '@playwright/test';
import { appUrls, credentials } from '../../../config.js';
import { PageManagers } from '../../../page-manager/Page-Manager.js';

test.describe('RailERP Login Automation', () => {

    let page;
    let context;

    test.beforeEach(async ({ browser }) => {

        // Create browser context
        context = await browser.newContext({
            ignoreHTTPSErrors: true
        });

        // Create new page
        page = await context.newPage();

        // Navigate to RailERP login
        await page.goto(appUrls.loginURL);

    });

    test.afterEach(async () => {
        await context?.close();
    });

    test('Verify Login with InValid Credentials', async () => {

        const pm = new PageManagers(page);

        // Valid Login
        await pm.loginPage.invalidLogin(
            credentials.invalidLogin.username,
            credentials.invalidLogin.password,
            credentials.invalidLogin.checkbox
        );

    });

    test('Verify Login with Valid Credentials', async () => {

        const pm = new PageManagers(page);


        await pm.loginPage.loginPage(
            credentials.validLogin.username,
            credentials.validLogin.password,
            credentials.validLogin.checkbox
        );


    });

});
