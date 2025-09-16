import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { DynamicPropertiesPage } from '../../pages/elements/dynamicPropertiesPage';

const mainPage = new MainPage();
const dp = new DynamicPropertiesPage();

// Navegação

When('I navigate to the Dynamic Properties page', () => {
  mainPage.clickCard('Elements'); // abre o card Elements
  mainPage.clickSidebarOption('Dynamic Properties'); // clica no menu lateral
});

// Enable After button
Then('the "Enable After 5 Seconds" button should be disabled initially', () => {
  dp.assertEnableButtonInitiallyDisabled();
});

Then('the "Enable After 5 Seconds" button should become enabled after 5 seconds', () => {
  dp.assertEnableButtonBecomesEnabled();
});

// Color Change button
Then('the "Color Change" button should have its initial color', () => {
  dp.assertColorButtonInitialColor();
});

Then('the "Color Change" button should change color after 5 seconds', () => {
  dp.assertColorButtonChangesColor();
});

// Visible After button
Then('the "Visible After 5 Seconds" button should not be visible initially', () => {
  dp.assertVisibleButtonInitiallyHidden();
});

Then('the "Visible After 5 Seconds" button should become visible after 5 seconds', () => {
  dp.assertVisibleButtonAppears();
});
