/// <reference types="cypress" />

export class SelectMenuPage {
    selectReactOption(containerId: string, option: string) {
        cy.get(`#${containerId} input`).click({ force: true }).type(`${option}{enter}`);
    }

    verifyReactOption(containerId: string, expected: string) {
        cy.get(`#${containerId}`).should('contain.text', expected);
    }

    selectOldStyle(option: string) {
        cy.get('#oldSelectMenu').select(option);
    }

    verifyOldStyle(option: string) {
        cy.get('#oldSelectMenu').find('option:selected').should('have.text', option);
    }

    selectMultiDropdown(options: string[]) {
        options.forEach(opt => {
            cy.get('#react-select-4-input').click({ force: true }).type(`${opt}{enter}`);
        });
    }

    verifyMultiDropdown(options: string[]) {
        options.forEach(opt => {
            cy.get('.css-12jo7m5').should('contain.text', opt);
        });
    }

    selectStandardMulti(options: string[]) {
        cy.get('#cars').select(options);
    }

    verifyStandardMulti(options: string[]) {
        cy.get('#cars').find('option:selected').then(($selected: JQuery<HTMLElement>) => {
            const selectedTexts = $selected.toArray().map(el => el.textContent?.trim() || '');
            options.forEach(opt => {
                expect(selectedTexts).to.include(opt);
            });
        });
    }


}
