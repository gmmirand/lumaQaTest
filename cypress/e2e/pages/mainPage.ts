export class MainPage {

  openHomePage() {
    cy.visit('https://demoqa.com', {
      timeout: 120000, // timeout total
      onLoad: undefined, // ignora o evento load
      failOnStatusCode: false // opcional, se o site pode retornar 3xx/4xx
    });
  }

  clickCard(cardName: string) {
    cy.contains('.card-body h5', cardName)
      .should('be.visible')
      .click();
  }

  clickSidebarOption(option: string) {
    cy.contains('.element-list .menu-list li', option)
      .should('be.visible')
      .click();
  }
}
