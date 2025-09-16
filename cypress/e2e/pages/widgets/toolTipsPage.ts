/// <reference types="cypress" />

export class ToolTipsPage {
  hoverButton() {
    cy.get('#toolTipButton').trigger('mouseover');
  }

  hoverTextInput() {
    cy.get('#toolTipTextField').trigger('mouseover');
  }

  hoverTextLink(text: 'Contrary' | '1.10.32') {
    cy.contains('a', text).trigger('mouseover');
  }

  tooltipShouldBeVisible(tooltipText: string) {
    cy.get('.tooltip-inner').should('be.visible').and('contain.text', tooltipText);
  }
}
