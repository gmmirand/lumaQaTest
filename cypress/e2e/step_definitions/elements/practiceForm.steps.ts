import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { PracticeFormPage } from '../../pages/elements/practiceFormPage';
import { DataTable } from '@badeball/cypress-cucumber-preprocessor';


const mainPage = new MainPage();
const formPage = new PracticeFormPage();

// 2️⃣ Navegar para Practice Form
When('I navigate to the Practice Form page', () => {
  mainPage.clickCard('Forms');
  mainPage.clickSidebarOption('Practice Form');
});

// 3️⃣ Submeter formulário vazio
When('I submit the empty form', () => {
  formPage.submitForm();
});

// 4️⃣ Validar campos obrigatórios
Then('I should see required field warnings', () => {
  formPage.assertRequiredFieldWarnings();
});

When('I fill in the form with valid data', (dataTable: DataTable) => {
  const data = dataTable.rowsHash(); // transforma a tabela em objeto { chave: valor }

  // Preenche os campos
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


// 6️⃣ Submeter formulário preenchido
When('I submit the form', () => {
  formPage.submitForm();
});

// 7️⃣ Validar submissão bem-sucedida
Then('I should see a successful submission', () => {
  formPage.assertSuccessfulSubmission();
});
