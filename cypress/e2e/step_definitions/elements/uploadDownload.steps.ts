import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { UploadDownloadPage } from '../../pages/elements/uploadDownloadPage';

const mainPage = new MainPage();
const ud = new UploadDownloadPage();
const fileName = 'sampleFile.jpeg';
When('I navigate to the Upload and Download page', () => {
  mainPage.clickCard('Elements');
  mainPage.clickSidebarOption('Upload and Download');
});

When('I download the sample file', () => {
  const downloadsFolder = Cypress.config('downloadsFolder') || 'cypress/downloads';
  const filePath = `${downloadsFolder}/${fileName}`;

  cy.task('deleteFileIfExists', { fileName }).then(() => {
    ud.clickDownload();

    cy.readFile(filePath, { timeout: 10000 }).should('exist');
  });
});


Then('the file should exist in the downloads folder', () => {
  cy.task('checkFileExists', { fileName }).should('eq', true);
});

When('I prepare the sample file for upload', () => {
  cy.task('copyFileToFixtures', { fileName }).then(() => {
    cy.fixture(fileName).should('exist');
  });
});

When('I upload the sample file', () => {
  ud.uploadFile({ fileName });
});


Then('the upload should be successful', () => {
  ud.assertUploadedFile(fileName);
});
