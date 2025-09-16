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
        const day = new Date(date).getDate().toString();

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
                const actualString = actual as string; // informa pro TS que é string
                if (!actualString) throw new Error('Input vazio');

                const normalized = actualString.replace(/\b(\d):/, '0$1:');

                cy.wrap(normalized).should('eq', expected);
            });
    }

}

export default new DatePickerPage();
