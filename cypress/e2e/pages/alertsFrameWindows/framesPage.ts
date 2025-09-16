export class FramesPage {

  clickFramesOption() {
    cy.contains('.element-list .menu-list li', 'Frames').click();
  }

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
