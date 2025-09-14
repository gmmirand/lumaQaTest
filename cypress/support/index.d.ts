/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Tipagem para cy.task
     */
    task(
      event: string,
      arg?: any,
      options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>
    ): Chainable<any>;
  }
}
