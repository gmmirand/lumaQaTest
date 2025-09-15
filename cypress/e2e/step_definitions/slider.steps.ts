import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SliderPage } from '../pages/sliderPage';

const sliderPage = new SliderPage();

Given('I go to the Slider page', () => {
  cy.contains('.element-list .menu-list li', 'Slider').click();
});

Then('the slider input should display {string}', (value: string) => {
  sliderPage.verifySliderValue(Number(value));
});

When('I set the slider to {string}', (value: string) => {
  sliderPage.setSliderValue(Number(value));
});
