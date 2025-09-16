export class WebTablePage {
    addNewUser(firstName: string, lastName: string) {
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#userEmail').type(`${firstName}.${lastName}@test.com`);
        cy.get('#age').type('30');
        cy.get('#salary').type('5000');
        cy.get('#department').type('QA');
        cy.get('#submit').click();
    }

    verifyUserInTable(name: string) {
        cy.get('.rt-tbody').should('contain.text', name);
    }

    deleteUser(name: string) {
        cy.contains('.rt-tr-group', name).within(() => {
            cy.get('[title="Delete"]').click();
        });
    }

    verifyUserNotInTable(name: string) {
        cy.get('.rt-tbody').should('not.contain.text', name);
    }

    addMultipleUsers(count: number) {
        for (let i = 0; i < count; i++) {
            this.addNewUser(`User${i}`, `Test${i}`);
        }
    }

verifyPagination() {
    // Clica no botão Next
    cy.get('.-next button').should('not.be.disabled').click();

    // Valida que o primeiro usuário da segunda página é User7 Test7
    cy.get('.rt-tbody .rt-tr-group').first().within(() => {
        cy.get('.rt-td').eq(0).should('have.text', 'User7'); // First Name
        cy.get('.rt-td').eq(1).should('have.text', 'Test7'); // Last Name
    });

    // Verifica também o input da página
    cy.get('.-pageJump input').should('have.value', '2');
}

}

