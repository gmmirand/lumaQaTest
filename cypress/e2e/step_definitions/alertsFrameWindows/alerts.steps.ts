import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { AlertsPage } from '../../pages/alertsFrameWindows/alertsPage';
import { expect } from 'chai';

const mainPage = new MainPage();
const alertsPage = new AlertsPage();

When('I navigate to the Alerts section', () => {
  mainPage.clickCard('Alerts, Frame & Windows');
  mainPage.clickSidebarOption('Alerts');
});

When('I click the {string} button for simple alert', () => {
  alertsPage.clickSimpleAlert();
});

Then('I should validate the alert text is {string}', (text: string) => {
  globalThis.Cypress.on('window:alert', (alertText: string) => {
    expect(alertText).to.eq(text);
  });
});

When('I click the {string} button for timer alert', () => {
  alertsPage.clickTimerAlert();
});

Then('I should validate the timer alert text is {string}', (text: string) => {
  globalThis.Cypress.on('window:alert', (alertText: string) => {
    expect(alertText).to.eq(text);
  });
});

When('I click the {string} button for confirm', () => {
  alertsPage.clickConfirm();
});

Then('I should validate the confirm text is {string}', (text: string) => {
  globalThis.Cypress.on('window:confirm', (confirmText: string) => {
    expect(confirmText).to.eq(text);
    return true; // ✅ aceita automaticamente "OK"
  });
});

When('I click the {string} button for prompt', (buttonName: string) => {
  cy.window().then((win) => {
    (cy as any).stub(win, 'prompt').returns('Cypress Test');
    alertsPage.clickPrompt();
  });

  alertsPage.clickPrompt();
});

Then('I should validate the page displays the prompt result', () => {
  cy.contains('You entered Cypress Test').should('be.visible');
});
