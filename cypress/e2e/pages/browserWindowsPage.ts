export class BrowserWindowsPage {
  newTabButton = '#tabButton';
  newWindowButton = '#windowButton';
  newWindowMessageButton = '#messageWindowButton';

  clickNewTab() {
    cy.get(this.newTabButton).click();
  }

  clickNewWindow() {
    cy.get(this.newWindowButton).click();
  }

  clickNewWindowMessage() {
    cy.get(this.newWindowMessageButton).click();
  }
}
