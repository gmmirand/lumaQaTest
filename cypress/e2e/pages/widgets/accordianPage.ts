class AccordionPage {
    private accordionSectionTitles = '.card-header';
    private accordionSectionContents = '.card-body';

    expandSectionByIndex(index: number) {
        cy.get(this.accordionSectionTitles).eq(index).click();
    }

    contentShouldBeVisibleByIndex(index: number) {
        cy.get(this.accordionSectionContents).eq(index).should('be.visible');
    }

    contentShouldNotBeVisibleByIndex(index: number) {
        cy.get(this.accordionSectionContents).eq(index).should('not.be.visible');
    }

    getSectionsCount() {
        return cy.get(this.accordionSectionTitles).its('length');
    }
}

export const accordionPage = new AccordionPage();
