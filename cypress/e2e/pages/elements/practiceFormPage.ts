// cypress/e2e/pages/practiceFormPage.ts

export class PracticeFormPage {

    firstNameInput = '#firstName';
    lastNameInput = '#lastName';
    emailInput = '#userEmail';
    genderRadio = 'input[name="gender"]';
    mobileInput = '#userNumber';
    submitButton = '#submit';

    successModal = '#example-modal-sizes-title-lg';
    closeModalButton = '#closeLargeModal';

    submitForm() {
        cy.get(this.submitButton).click();
    }

    assertRequiredFieldWarnings() {
        cy.get(this.firstNameInput).should('have.prop', 'validity').and('have.property', 'valueMissing', true);
        cy.get(this.lastNameInput).should('have.prop', 'validity').and('have.property', 'valueMissing', true);
        cy.get(this.mobileInput).should('have.prop', 'validity').and('have.property', 'valueMissing', true);
        cy.get(this.genderRadio).first().should('have.prop', 'validity').and('have.property', 'valueMissing', true);
    }

    assertSuccessfulSubmission() {
        cy.get(this.successModal)
            .should('be.visible')
            .and('contain.text', 'Thanks for submitting the form');

        cy.get(this.closeModalButton).click({ force: true });
    }
}
