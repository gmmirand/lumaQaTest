export class AutoCompletePage {
  multipleInput = '#autoCompleteMultipleInput';
  singleInput = '#autoCompleteSingleInput';

  // Digita e seleciona um valor no multiple select usando Enter
  typeInMultiple(value: string) {
    cy.get(this.multipleInput)
      .type(value)
      .type('{enter}');
  }

  // Digita e seleciona um valor no single select usando Enter
  typeInSingle(value: string) {
    cy.get(this.singleInput)
      .type(value)
      .type('{enter}');
  }

  // Verifica se o valor foi selecionado no multiple select
  verifyMultipleSelected(value: string) {
    cy.get('.auto-complete__multi-value__label') // verifica os labels dos valores selecionados
      .should('contain.text', value, { timeout: 5000 });
  }

  // Verifica se o valor foi selecionado no single select
  verifySingleSelected(value: string) {
    cy.get('.auto-complete__single-value') // verifica o div que mostra o valor selecionado
      .should('contain.text', value, { timeout: 5000 });
  }
}

export const autoCompletePage = new AutoCompletePage();
