export class AutoCompletePage {
  multipleInput = '#autoCompleteMultipleInput';
  singleInput = '#autoCompleteSingleInput';

  typeInMultiple(value: string) {
    cy.get(this.multipleInput)
      .type(value)
      .type('{enter}');
  }

  typeInSingle(value: string) {
    cy.get(this.singleInput)
      .type(value)
      .type('{enter}');
  }

  verifyMultipleSelected(value: string) {
    cy.get('.auto-complete__multi-value__label')
      .should('contain.text', value, { timeout: 5000 });
  }

  verifySingleSelected(value: string) {
    cy.get('.auto-complete__single-value')
      .should('contain.text', value, { timeout: 5000 });
  }
}

export const autoCompletePage = new AutoCompletePage();
