// cypress/e2e/step_definitions/datePicker.steps.ts
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DatePickerPage from '../pages/datePickerPage';
import { MainPage } from '../pages/mainPage';

const mainPage = new MainPage();

// Navegação

Given('I go to the Date Picker page', () => {
  mainPage.clickSidebarOption('Date Picker');
});

// Select Date picker
When('I click on the "Select Date" input', () => {
  DatePickerPage.clickSelectDate();
});

When('I choose the date {string} from the calendar', (date: string) => {
  DatePickerPage.chooseDate(date);
});

Then('the "Select Date" input should have the value {string}', (expected: string) => {
  DatePickerPage.verifySelectDateValue(expected);
});

// Date And Time picker
When('I click on the "Date And Time" input', () => {
  DatePickerPage.clickDateAndTime();
});

When('I select the time {string} from the time list', (time: string) => {
  DatePickerPage.selectTime(time);
});

Then('the "Date And Time" input should have the value {string}', (expected: string) => {
  DatePickerPage.verifyDateAndTimeValue(expected);
});
