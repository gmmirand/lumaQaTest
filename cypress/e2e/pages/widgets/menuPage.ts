/// <reference types="cypress" />

export class MenuPage {
  menuItemShouldBeVisible(menuItem: string) {
    cy.contains('#nav a', menuItem).should('exist').and('be.visible');
  }

  submenuItemsShouldExist(parentItem: string, subItems: string[]) {
    cy.contains('#nav a', parentItem)
      .parent('li')
      .find('ul li a')
      .then(($elements: JQuery<HTMLElement>) => {
        const texts = Cypress._.map($elements, el => el.innerText.trim());

        subItems.forEach(item => {
          expect(texts).to.include(item);
        });
      });
  }
}
