export class AlertsPage {
  // Botões
  simpleAlertButton = '#alertButton';
  timerAlertButton = '#timerAlertButton';
  confirmButton = '#confirmButton';
  promptButton = '#promtButton';

  clickSimpleAlert() {
    cy.get(this.simpleAlertButton).click();
  }

  clickTimerAlert() {
    cy.get(this.timerAlertButton).click();
  }

  clickConfirm() {
    cy.get(this.confirmButton).click();
  }

  clickPrompt() {
    cy.get(this.promptButton).click();
  }
}
