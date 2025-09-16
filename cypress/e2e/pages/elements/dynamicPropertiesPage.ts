export class DynamicPropertiesPage {

  enableAfterButton = '#enableAfter';
  colorChangeButton = '#colorChange';
  visibleAfterButton = '#visibleAfter';


  openPage() {
    cy.visit('/dynamic-properties');
  }

  assertEnableButtonInitiallyDisabled() {
    cy.get(this.enableAfterButton, { timeout: 7000 })
      .should('exist')
      .should('be.disabled');
  }

  assertEnableButtonBecomesEnabled() {
    cy.get(this.enableAfterButton, { timeout: 8000 }).should('be.enabled');
  }

  assertColorButtonInitialColor() {
    cy.get(this.colorChangeButton).should('have.class', 'btn-primary');
  }

  assertColorButtonChangesColor() {
    cy.get(this.colorChangeButton, { timeout: 7000 }).should('have.class', 'text-danger');
  }

  assertVisibleButtonInitiallyHidden() {
    cy.get(this.visibleAfterButton).should('not.exist');
  }

  assertVisibleButtonAppears() {
    cy.get(this.visibleAfterButton, { timeout: 7000 }).should('be.visible');
  }
}
