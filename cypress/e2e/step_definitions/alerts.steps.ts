import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';
import { AlertsPage } from '../pages/alertsPage';
import { expect } from 'chai';

const mainPage = new MainPage();
const alertsPage = new AlertsPage();

// ---------- Navegação ----------
When('I navigate to the Alerts section', () => {
  mainPage.clickCard('Alerts, Frame & Windows');
  mainPage.clickSidebarOption('Alerts');
});

// ---------- Simple Alert ----------
When('I click the {string} button for simple alert', () => {
  alertsPage.clickSimpleAlert();
});

Then('I should validate the alert text is {string}', (text: string) => {
  globalThis.Cypress.on('window:alert', (alertText: string) => {
    expect(alertText).to.eq(text);
  });
});

// ---------- Timer Alert ----------
When('I click the {string} button for timer alert', () => {
  alertsPage.clickTimerAlert();
});

Then('I should validate the timer alert text is {string}', (text: string) => {
  globalThis.Cypress.on('window:alert', (alertText: string) => {
    expect(alertText).to.eq(text);
  });
});

// ---------- Confirm ----------
When('I click the {string} button for confirm', () => {
  alertsPage.clickConfirm();
});

Then('I should validate the confirm text is {string}', (text: string) => {
  globalThis.Cypress.on('window:confirm', (confirmText: string) => {
    expect(confirmText).to.eq(text);
    return true; // ✅ aceita automaticamente "OK"
  });
});

// ---------- Prompt ----------
When('I click the {string} button for prompt', (buttonName: string) => {
  cy.window().then((win) => {
    // Stub do prompt apenas UMA VEZ antes do clique
    globalThis.Cypress.sinon.stub(win, 'prompt').returns('Cypress Test');
  });
  alertsPage.clickPrompt();
});

Then('I should validate the page displays the prompt result', () => {
  // Verifica o resultado do prompt na página
  cy.contains('You entered Cypress Test').should('be.visible');
});
