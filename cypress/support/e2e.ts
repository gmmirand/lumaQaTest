/// <reference types="cypress" />

import './commands';
import 'cypress-file-upload';
import "cypress-real-events/support";


// Ignorar erros de script não capturados da aplicação
globalThis.Cypress.on('uncaught:exception', (_err: unknown, _runnable: Mocha.Runnable) => {
  return false; // evita que o teste falhe
});
