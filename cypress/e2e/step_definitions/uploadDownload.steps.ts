import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';
import { UploadDownloadPage } from '../pages/uploadDownloadPage';

const mainPage = new MainPage();
const ud = new UploadDownloadPage();
const fileName = 'sampleFile.jpeg'; // nome do arquivo baixado

// 2️⃣ Navegar para Upload and Download
When('I navigate to the Upload and Download page', () => {
  mainPage.clickCard('Elements');
  mainPage.clickSidebarOption('Upload and Download');
});

// Fazer download do arquivo
When('I download the sample file', () => {
  const downloadsFolder = globalThis.Cypress.config('downloadsFolder') || 'cypress/downloads';
  const filePath = `${downloadsFolder}/${fileName}`;

  // ⚠️ Passar um objeto { fileName } em vez de string
  cy.task('deleteFileIfExists', { fileName }).then(() => {
    ud.clickDownload();

    // Espera o arquivo aparecer
    cy.readFile(filePath, { timeout: 10000 }).should('exist');
  });
});


// 4️⃣ Validar que o arquivo existe após download
Then('the file should exist in the downloads folder', () => {
  cy.task('checkFileExists', { fileName }).should('eq', true);
});

When('I prepare the sample file for upload', () => {
  // Copia o arquivo baixado para a pasta fixtures
  cy.task('copyFileToFixtures', { fileName }).then(() => {
    // Confirma que existe na fixtures
    cy.fixture(fileName).should('exist');
  });
});


When('I upload the sample file', () => {
  ud.uploadFile({ fileName }); // Passa apenas o fileName
});




// 7️⃣ Validar upload
Then('the upload should be successful', () => {
  ud.assertUploadedFile(fileName);
});
