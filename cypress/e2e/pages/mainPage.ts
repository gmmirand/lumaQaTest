export class MainPage {
  openHomePage() {
    cy.visit('/');
  }

  clickCard(cardName: string) {
    cy.contains('.card-body h5', cardName).click();
  }

  clickSidebarOption(option: string) {
    cy.contains('.element-list .menu-list li', option).click();
  }
}
