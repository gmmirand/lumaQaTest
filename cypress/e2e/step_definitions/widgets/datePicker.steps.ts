import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import DatePickerPage from '../../pages/widgets/datePickerPage';
import { MainPage } from '../../pages/mainPage';

const mainPage = new MainPage();


Given('I go to the Date Picker page', () => {
  mainPage.clickSidebarOption('Date Picker');
});

When('I click on the "Select Date" input', () => {
  DatePickerPage.clickSelectDate();
});

When('I choose the date {string} from the calendar', (date: string) => {
  DatePickerPage.chooseDate(date);
});

Then('the "Select Date" input should have the value {string}', (expected: string) => {
  DatePickerPage.verifySelectDateValue(expected);
});

When('I click on the "Date And Time" input', () => {
  DatePickerPage.clickDateAndTime();
});

When('I select the time {string} from the time list', (time: string) => {
  DatePickerPage.selectTime(time);
});

Then('the "Date And Time" input should have the value {string}', (expected: string) => {
  DatePickerPage.verifyDateAndTimeValue(expected);
});
