import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';
import { UploadDownloadPage } from '../pages/uploadDownloadPage';

const mainPage = new MainPage();
const ud = new UploadDownloadPage();

const fileName = 'sampleFile.jpeg'; // nome do arquivo baixado

// Navegar para Upload and Download
When('I navigate to the Upload and Download page', () => {
  mainPage.clickCard('Elements');
  mainPage.clickSidebarOption('Upload and Download');
});

When('I download the sample file', () => {
  cy.task('deleteFileIfExists', { fileName }).then(() => {
    ud.clickDownload();
  });
});

Then('the file should exist in the downloads folder', () => {
  cy.task('checkFileExists', { fileName }).should('eq', true);
});

When('I prepare the sample file for upload', () => {
  cy.task('checkFileExists', { fileName }).then(exists => {
    if (!exists) throw new Error(`${fileName} does not exist`);
  });
});


// Fazer upload
When('I upload the sample file', () => {
  ud.uploadFile(`downloads/${fileName}`);
});

// Verificar upload
Then('the upload should be successful', () => {
  ud.assertUploadedFile(fileName);
});
