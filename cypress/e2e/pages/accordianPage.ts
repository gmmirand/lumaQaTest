class AccordionPage {
    // Títulos das seções do accordion
    private accordionSectionTitles = '.card-header';
    // Conteúdos das seções
    private accordionSectionContents = '.card-body';

    // Expande/colapsa seção pelo índice
    expandSectionByIndex(index: number) {
        cy.get(this.accordionSectionTitles).eq(index).click();
    }

    // Verifica se o conteúdo está visível
    contentShouldBeVisibleByIndex(index: number) {
        cy.get(this.accordionSectionContents).eq(index).should('be.visible');
    }

    // Verifica se o conteúdo NÃO está visível
    contentShouldNotBeVisibleByIndex(index: number) {
        cy.get(this.accordionSectionContents).eq(index).should('not.be.visible');
    }

    // Retorna o número de seções
    getSectionsCount() {
        return cy.get(this.accordionSectionTitles).its('length');
    }
}

export const accordionPage = new AccordionPage();
