import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';
import { accordionPage } from '../pages/accordianPage';

const mainPage = new MainPage();

When('I navigate to the Widgets section', () => {
    mainPage.clickCard('Widgets');
});

When('I open the Accordian widget', () => {
    mainPage.clickSidebarOption('Accordian');
});

Then('I should see all Accordian sections', () => {
    accordionPage.getSectionsCount().should('be.gt', 0);
});

Then('I can expand and collapse each section', () => {
    accordionPage.getSectionsCount().then(count => {
        for (let i = 0; i < count; i++) {
            accordionPage.expandSectionByIndex(i);
            accordionPage.contentShouldBeVisibleByIndex(i);

            if (i > 0) {
                // garante que a anterior foi colapsada
                accordionPage.contentShouldNotBeVisibleByIndex(i - 1);
            }
        }
    });
});
