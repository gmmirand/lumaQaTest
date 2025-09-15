// cypress/e2e/pages/datePickerPage.ts
export class DatePickerPage {
    selectDateInput = () => cy.get('#datePickerMonthYearInput');
    dateAndTimeInput = () => cy.get('#dateAndTimePickerInput');

    clickSelectDate() {
        this.selectDateInput().click();
    }

    clickDateAndTime() {
        this.dateAndTimeInput().click();
    }

    chooseDate(date: string) {
        // Converte a data para pegar o dia
        const day = new Date(date).getDate().toString();

        // Clica no dia correspondente
        cy.get('.react-datepicker__day')
            .not('.react-datepicker__day--outside-month')
            .contains(day)
            .click();
    }

    selectTime(time: string) {
        cy.get('.react-datepicker__time-list li').contains(time).click();
    }

    verifySelectDateValue(expected: string) {
        this.selectDateInput().should('have.value', expected);
    }

    verifyDateAndTimeValue(expected: string) {
        this.dateAndTimeInput()
            .invoke('val')
            .then((actual) => {
                if (!actual) throw new Error('Input vazio');

                // Normaliza a hora: transforma 2:30 PM em 02:30 PM
                const normalized = actual.replace(/\b(\d):/, '0$1:');

                cy.wrap(normalized).should('eq', expected);
            });
    }


}

export default new DatePickerPage();
