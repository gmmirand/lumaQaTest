export class MainPage {

  openHomePage() {
    cy.visit('https://demoqa.com', {
      timeout: 180000,
      onLoad: undefined,
      failOnStatusCode: false
    });
  }

  clickCard(cardName: string) {
    cy.get('.card-body h5', { timeout: 30000 })
      .contains(cardName)
      .should('be.visible')
      .click();
  }

  clickSidebarOption(option: string) {
    cy.get('.element-list .menu-list li', { timeout: 30000 })
      .contains(option)
      .should('be.visible')
      .click();
  }

}
