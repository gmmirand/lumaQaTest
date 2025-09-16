import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { PracticeFormPage } from '../../pages/elements/practiceFormPage';
import { DataTable } from '@badeball/cypress-cucumber-preprocessor';


const mainPage = new MainPage();
const formPage = new PracticeFormPage();

When('I navigate to the Practice Form page', () => {
  mainPage.clickCard('Forms');
  mainPage.clickSidebarOption('Practice Form');
});

When('I submit the empty form', () => {
  formPage.submitForm();
});

Then('I should see required field warnings', () => {
  formPage.assertRequiredFieldWarnings();
})

When('I fill in the form with valid data', (dataTable: DataTable) => {
  const data = dataTable.rowsHash();
  if (data.firstName) {
    cy.get('#firstName').clear().type(data.firstName);
  }
  if (data.lastName) {
    cy.get('#lastName').clear().type(data.lastName);
  }
  if (data.email) {
    cy.get('#userEmail').clear().type(data.email);
  }
  if (data.gender) {
    cy.get(`input[name="gender"][value="${data.gender}"]`).check({ force: true });
  }
  if (data.mobile) {
    cy.get('#userNumber').clear().type(data.mobile);
  }
});


When('I submit the form', () => {
  formPage.submitForm();
});

Then('I should see a successful submission', () => {
  formPage.assertSuccessfulSubmission();
});
