// cypress/e2e/pages/practiceFormPage.ts

export class PracticeFormPage {
    // ========================
    // Seletores dos campos
    // ========================
    firstNameInput = '#firstName';
    lastNameInput = '#lastName';
    emailInput = '#userEmail';
    genderRadio = 'input[name="gender"]';
    mobileInput = '#userNumber';
    submitButton = '#submit';

    // Modal de sucesso
    successModal = '#example-modal-sizes-title-lg';
    closeModalButton = '#closeLargeModal';

    // ========================
    // Métodos da página
    // ========================

    submitForm() {
        cy.get(this.submitButton).click();
    }

    // ✅ Validação de campos obrigatórios usando :invalid
    assertRequiredFieldWarnings() {
        // Espera que os campos obrigatórios estejam inválidos após tentar submeter o form vazio
        cy.get(this.firstNameInput).should('have.prop', 'validity').and('have.property', 'valueMissing', true);
        cy.get(this.lastNameInput).should('have.prop', 'validity').and('have.property', 'valueMissing', true);
        cy.get(this.mobileInput).should('have.prop', 'validity').and('have.property', 'valueMissing', true);
        cy.get(this.genderRadio).first().should('have.prop', 'validity').and('have.property', 'valueMissing', true);
    }

    // ✅ Submissão bem-sucedida
    assertSuccessfulSubmission() {
        cy.get(this.successModal)
            .should('be.visible')
            .and('contain.text', 'Thanks for submitting the form');

        // Fecha modal usando force:true, pois ele pode estar parcialmente oculto
        cy.get(this.closeModalButton).click({ force: true });
    }
}
