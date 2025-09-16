export class FramesPage {
  // Clica na opção Frames do menu lateral
  clickFramesOption() {
    cy.contains('.element-list .menu-list li', 'Frames').click();
  }

  // Retorna o body do primeiro iframe para poder interagir
  getFirstIframeBody() {
    return cy
      .get('#frame1')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }

  // Retorna o body do segundo iframe
  getSecondIframeBody() {
    return cy
      .get('#frame2')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }
}
