/// <reference types="cypress" />

import './commands';
import 'cypress-file-upload';

globalThis.Cypress.on('uncaught:exception', (_err: unknown, _runnable: Mocha.Runnable) => {
  return false;
});
