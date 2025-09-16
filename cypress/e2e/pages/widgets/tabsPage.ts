/// <reference types="cypress" />

export class TabsPage {
  clickTab(tabName: 'What' | 'Origin' | 'Use') {
    cy.get('.nav-tabs a')
      .contains(tabName)
      .should('not.have.class', 'disabled')
      .click();
  }

  tabShouldBeActive(tabName: 'What' | 'Origin' | 'Use') {
    cy.get('.nav-tabs a')
      .contains(tabName)
      .should('have.class', 'active');
  }

  tabShouldNotBeActive(tabName: 'What' | 'Origin' | 'Use') {
    cy.get('.nav-tabs a')
      .contains(tabName)
      .should('not.have.class', 'active');
  }

  moreTabShouldBeDisabled() {
    cy.get('.nav-tabs a')
      .contains('More')
      .should('have.class', 'disabled')
      .and('have.attr', 'aria-disabled', 'true');
  }
}
