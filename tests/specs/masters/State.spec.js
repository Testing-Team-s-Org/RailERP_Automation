
import { test } from '@playwright/test';
import { appUrls, credentials } from '../../../config.js';
import { PageManagers } from '../../../page-manager/Page-Manager.js';
import { StatePageTC } from '../../../testcases/state-tc/StateTc.js';

test.describe('RailERP Login Automation', () => {

    let page;
    let context;

    test.beforeEach(async ({ browser }) => {

        // Create browser context
        context = await browser.newContext({ignoreHTTPSErrors: true});

        // Create new page
        page = await context.newPage();

        // Navigate to RailERP login
        await page.goto(appUrls.loginURL);

    });

    test.afterEach(async () => {
        await context?.close();
    });

    test('Verify State Master Screen – Create a State, Validate the Created State, and Delete the State', async () => {

     const pm = new PageManagers(page);
     const stateTc = new StatePageTC(page);


        await pm.loginPage.loginPage(
            credentials.validLogin.username,
            credentials.validLogin.password,
            credentials.validLogin.checkbox
        );

        await stateTc.createStates();

    })

})