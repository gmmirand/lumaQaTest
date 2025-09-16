export class NestedFramesPage {

  navigateToNestedFrames() {
    cy.contains('Alerts, Frame & Windows').click();
    cy.contains('Nested Frames').click();
  }

  getParentFrameBody(): Cypress.Chainable<HTMLElement> {
    return cy.get('#frame1')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }

  getChildFrameBody(): Cypress.Chainable<HTMLElement> {
    return this.getParentFrameBody()
      .find('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }
}

