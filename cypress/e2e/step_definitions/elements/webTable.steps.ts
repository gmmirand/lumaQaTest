import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { WebTablePage } from '../../pages/elements/webTablePage';

const mainPage = new MainPage();
const webTablePage = new WebTablePage();


When('I click on the {string} card', (cardName: string) => {
  mainPage.clickCard(cardName);
});

When('I click on the {string} option in the sidebar', (option: string) => {
  mainPage.clickSidebarOption(option);
});

When(
  'I add a new user with first name {string} and last name {string}',
  (firstName: string, lastName: string) => {
    webTablePage.addNewUser(firstName, lastName);
  }
);

Then('I should see the user {string} in the table', (name: string) => {
  webTablePage.verifyUserInTable(name);
});

When('I delete the user {string}', (name: string) => {
  webTablePage.deleteUser(name);
});

Then('I should not see the user {string} in the table', (name: string) => {
  webTablePage.verifyUserNotInTable(name);
});

When('I add multiple users until there are more than 10 rows', () => {
  webTablePage.addMultipleUsers(8);
});

Then('I should be able to navigate to the next page of the table', () => {
  webTablePage.verifyPagination();
});
