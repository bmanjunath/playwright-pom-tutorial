import {test, expect} from '@playwright/test';

test ('handling new tab', async ({page, context}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');


    //assiging locator
    const newTabButton = page.getByRole('button', {name: 'New Tab'});
 
    await expect(newTabButton).toHaveCount(1);

    // capture new window popup
    const [newtabPage] = await Promise.all([

    context.waitForEvent('page'),
    newTabButton.click()
    ]);

    await newtabPage.waitForLoadState('load');

    await page.waitForTimeout(2000);

    
    const newTabTitle = await newtabPage.title();

    console.log(' new tab title is: ', newTabTitle);

    await expect.soft(newTabTitle).toContain('');
    console.log('popup tab url is', newtabPage.url());

});



test('handling new window', async ({page, context})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // locator
    const popupbutton = page.locator('#PopUp');

    //
    await expect(popupbutton).toHaveCount(1);


    const [popupWindow] = await Promise.all([

        context.waitForEvent('page'),
        popupbutton.click()

    ]);

    await popupWindow.waitForLoadState('load');

    console.log('popup url is', popupWindow.url());
    console.log('title is:', await popupWindow.title());

    const newWindiowTitle = popupWindow.title();
    const newWindiowUrl = popupWindow.url();

    await expect.soft(newWindiowTitle).toContain('Selenium');
    //await expect.soft(newWindiowUrl).toMatch('https://playwright.dev/');

})