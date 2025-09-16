import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

let resourceId: string;

When('I send a GET request to {string}', (endpoint: string) => {
  cy.request('GET', `https://api.restful-api.dev${endpoint}`).then((response) => {
    cy.wrap(response).as('response');
  });
});


When('I send a POST request to {string} with body:', (endpoint: string, dataTable: DataTable) => {
  const body = dataTable.rowsHash();
  cy.request('POST', `https://api.restful-api.dev${endpoint}`, body).then((response: any) => { // <- aqui
    cy.wrap(response).as('response');
    if (response.body?.id) resourceId = response.body.id; // opcional safe check
  });
});

When('I create and update a resource with name {string} with body:', (name: string, dataTable: DataTable) => {
  const createBody = { name };
  cy.request('POST', 'https://api.restful-api.dev/objects', createBody).then((createResponse: any) => {
    expect([200, 201]).to.include(createResponse.status); // aceita 200 ou 201
    expect(createResponse.body).to.have.property('id');
    resourceId = createResponse.body.id;

    const updateBody = dataTable.rowsHash();
    cy.request('PUT', `https://api.restful-api.dev/objects/${resourceId}`, updateBody).then((updateResponse: any) => {
      expect([200, 201]).to.include(updateResponse.status); // aceita 200 ou 201
      cy.wrap(updateResponse).as('response');
    });
  });
});

When('I create and delete a resource with name {string}', (name: string) => {
  const createBody = { name };
  cy.request('POST', 'https://api.restful-api.dev/objects', createBody).then((createResponse: any) => {
    expect([200, 201]).to.include(createResponse.status);
    expect(createResponse.body).to.have.property('id');
    resourceId = createResponse.body.id;

    cy.request('DELETE', `https://api.restful-api.dev/objects/${resourceId}`).then((deleteResponse: any) => {
      expect([200, 204]).to.include(deleteResponse.status); // aceita 200 ou 204
      cy.wrap(deleteResponse).as('response');
    });
  });
});


Then('the response status should be {int}', (status: number) => {
  cy.get('@response').then((response: any) => {
    expect(response.status).to.eq(status);
  });
});

Then('the response should be an array', () => {
  cy.get('@response').then((response: any) => {
    expect(response.body).to.be.an('array');
  });
});

Then('the array length should be greater than {int}', (length: number) => {
  cy.get('@response').then((response: any) => {
    expect(response.body).to.be.an('array');
    expect(response.body.length).to.be.greaterThan(length);
  });
});

Then('the response body should have property {string} with value {string}', (property: string, value: string) => {
  cy.get('@response').then((response: any) => {
    expect(response.body).to.have.property(property, value);
  });
});

Then('the response body should have property {string}', (property: string) => {
  cy.get('@response').then((response: any) => {
    expect(response.body).to.have.property(property);
  });
});


When('I create a new resource with body:', (dataTable: DataTable) => {
  const body = dataTable.rowsHash();
  cy.request('POST', 'https://api.restful-api.dev/objects', body).then((response: any) => {
    expect([200, 201]).to.include(response.status);
    expect(response.body).to.have.property('id');
    resourceId = response.body.id;
    cy.wrap(response).as('response');
  });
});

When('I update the resource with id {string} with body:', (id: string, dataTable: DataTable) => {
  const body = dataTable.rowsHash();
  cy.request('PUT', `https://api.restful-api.dev/objects/${id}`, body).then((response: any) => {
    expect([200, 201]).to.include(response.status);
    cy.wrap(response).as('response');
  });
});

When('I delete the resource with id {string}', (id: string) => {
  cy.request('DELETE', `https://api.restful-api.dev/objects/${id}`).then((response: any) => {
    expect([200, 204]).to.include(response.status);
    cy.wrap(response).as('response');
  });
});

Then('the resource with id {string} should not exist', (id: string) => {
  cy.request({ url: `https://api.restful-api.dev/objects/${id}`, failOnStatusCode: false }).then((response: any) => {
    expect(response.status).to.eq(404);
  });
});
