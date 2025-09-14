import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ModalDialogsPage } from '../pages/modalDialogsPage';

const modalPage = new ModalDialogsPage();

When('I navigate to the Modal Dialogs section', () => {
  modalPage.navigateToModalDialogs();
});

When('I open the small modal', () => {
  modalPage.openSmallModal();
});

When('I open the large modal', () => {
  modalPage.openLargeModal();
});

Then('I should see the small modal title as {string}', (expectedTitle: string) => {
  modalPage.getSmallModalTitle().should('contain.text', expectedTitle);
});

Then('I should see the large modal title as {string}', (expectedTitle: string) => {
  modalPage.getLargeModalTitle().should('contain.text', expectedTitle);
});
