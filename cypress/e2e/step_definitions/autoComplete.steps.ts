import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';
import { autoCompletePage } from '../pages/autoCompletePage';

const mainPage = new MainPage();

When('I open the Auto Complete widget', () => {
    mainPage.clickSidebarOption('Auto Complete');
});

Then('I can select multiple colors', () => {
    const colors = ['Red', 'Green', 'Blue'];
    colors.forEach(color => {
        autoCompletePage.typeInMultiple(color);
        autoCompletePage.verifyMultipleSelected(color);
    });
});

Then('I can select a single color', () => {
    const color = 'Black';
    autoCompletePage.typeInSingle(color);
    autoCompletePage.verifySingleSelected(color);
});
