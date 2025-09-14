import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';
import { BrowserWindowsPage } from '../pages/browserWindowsPage';

const mainPage = new MainPage();
const browserPage = new BrowserWindowsPage();

Given('I open the homepage', () => {
  mainPage.openHomePage();
});

When('I navigate to the Browser Windows section', () => {
  mainPage.clickCard('Alerts, Frame & Windows');
  mainPage.clickSidebarOption('Browser Windows');
});

// ---------- Intercept window.open ----------
When('I click the {string} button', (buttonName: string) => {
  // Stub de window.open usando Cypress.sinon
  cy.window().then((win) => {
    const stub = globalThis.Cypress.sinon.stub(win, 'open');
    cy.wrap(stub).as('windowOpen'); // aqui criamos o alias
  });

  switch (buttonName) {
    case 'New Tab':
      browserPage.clickNewTab();
      break;
    case 'New Window':
      browserPage.clickNewWindow();
      break;
    case 'New Window Message':
      browserPage.clickNewWindowMessage();
      break;
    default:
      throw new Error(`Button "${buttonName}" not defined`);
  }
});


Then('a new window should have been opened', () => {
  cy.get('@windowOpen').should('have.been.called');
});
