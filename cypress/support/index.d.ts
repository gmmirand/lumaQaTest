/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {

    task(
      event: string,
      arg?: any,
      options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>
    ): Chainable<any>;

    realClick(options?: any): Chainable<Subject>;
    realMouseDown(options?: any): Chainable<Subject>;
    realMouseMove(x: number, y: number, options?: any): Chainable<Subject>;
    realMouseUp(options?: any): Chainable<Subject>;
  }
}
