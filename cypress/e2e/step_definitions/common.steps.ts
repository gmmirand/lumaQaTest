import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';

const mainPage = new MainPage();

Given('I open the DemoQA home page', () => {
    mainPage.openHomePage();
});
