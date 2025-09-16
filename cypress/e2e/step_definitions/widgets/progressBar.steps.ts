import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { ProgressBarPage } from '../../pages/widgets/progressBarPage';
import { expect } from 'chai';

const mainPage = new MainPage();
const progressBarPage = new ProgressBarPage();

Given('I go to the Progress Bar page', () => {
  mainPage.clickSidebarOption('Progress Bar');
});

When('I click the start button', () => {
  progressBarPage.clickStart();
});

When('I click the stop button', () => {
  progressBarPage.clickStop();
});

When('I click the start button again', () => {
  progressBarPage.clickStart();
});

When('I wait until the progress bar reaches 100%', () => {
  progressBarPage.waitUntilProgressBarIs100();
});

When('I click the reset button', () => {
  progressBarPage.clickReset();
});

Then('the progress bar should start increasing', () => {
  progressBarPage.progressBar()
    .invoke('attr', 'aria-valuenow')
    .should('match', /^[1-9]\d*$/);
});

Then('the progress bar should stop', () => {
  progressBarPage.progressBar()
    .invoke('attr', 'aria-valuenow')
    .then((val1) => {
      cy.wait(1000);
      progressBarPage.progressBar()
        .invoke('attr', 'aria-valuenow')
        .should('eq', val1);
    });
});

Then('the progress bar should continue increasing', () => {
  progressBarPage.progressBar()
    .invoke('attr', 'aria-valuenow')
    .then((val1) => {
      cy.wait(1000);
      progressBarPage.progressBar()
        .invoke('attr', 'aria-valuenow')
        .should((val2) => {
          expect(Number(val2)).to.be.greaterThan(Number(val1));
        });
    });
});

Then('the progress bar should be reset to 0%', () => {
  progressBarPage.progressBar()
    .invoke('attr', 'aria-valuenow')
    .should('eq', '0');
});
