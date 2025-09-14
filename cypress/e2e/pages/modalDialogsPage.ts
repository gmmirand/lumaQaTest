export class ModalDialogsPage {

  navigateToModalDialogs() {
    // Abre o menu principal e clica em Modal Dialogs
    cy.contains('Alerts, Frame & Windows').click();
    cy.contains('Modal Dialogs').click();
  }

  openSmallModal() {
    cy.get('#showSmallModal').click();
  }

  openLargeModal() {
    cy.get('#showLargeModal').click();
  }

  getSmallModalTitle() {
    return cy.get('#example-modal-sizes-title-sm');
  }

  getLargeModalTitle() {
    return cy.get('#example-modal-sizes-title-lg');
  }
}
