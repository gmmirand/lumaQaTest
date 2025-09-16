import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { TabsPage } from '../../pages/widgets/tabsPage';

const mainPage = new MainPage();
const tabsPage = new TabsPage();

When('I navigate to the Tabs section', () => {
  mainPage.clickSidebarOption('Tabs');
});

When('I click the {string} tab', (tabName: string) => {
  tabsPage.clickTab(tabName as 'What' | 'Origin' | 'Use');
});

Then('the {string} tab should be active', (tabName: string) => {
  tabsPage.tabShouldBeActive(tabName as 'What' | 'Origin' | 'Use');
});

Then('the {string} tab should not be active', (tabName: string) => {
  tabsPage.tabShouldNotBeActive(tabName as 'What' | 'Origin' | 'Use');
});

Then('the "More" tab should be disabled', () => {
  tabsPage.moreTabShouldBeDisabled();
});

Then('the {string} tab should be active by default', (tabName: string) => {
  const tabsPage = new TabsPage();
  tabsPage.tabShouldBeActive(tabName as 'What' | 'Origin' | 'Use');
});
