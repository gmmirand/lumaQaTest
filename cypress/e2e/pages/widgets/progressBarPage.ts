/// <reference types="cypress" />

export class ProgressBarPage {
    startButton() {
        return cy.get('#startStopButton');
    }

    resetButton() {
        return cy.get('#resetButton');
    }

    progressBar() {
        return cy.get('.progress-bar');
    }

    clickStart() {
        this.startButton().should('be.visible').click();
    }

    clickStop() {
        this.startButton().should('be.visible').click();
    }

    clickReset() {
        this.resetButton().should('be.visible').click();
    }

    waitUntilProgressBarIs100(timeout = 60000) { // 60s
        cy.log('Aguardando progress bar chegar a 100%');
        cy.wait(11000);
        this.progressBar()
            .should('exist')
            .invoke('attr', 'aria-valuenow')
            .should('eq', '100', { timeout })

    }


}
