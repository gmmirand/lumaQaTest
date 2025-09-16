export class ModalDialogsPage {

  navigateToModalDialogs() {
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
