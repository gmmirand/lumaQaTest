import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { FramesPage } from '../../pages/alertsFrameWindows/framesPage';

const mainPage = new MainPage();
const framesPage = new FramesPage();

When('I navigate to the Frames section', () => {
  mainPage.clickCard('Alerts, Frame & Windows');
  framesPage.clickFramesOption();
});

Then('I should validate that the first iframe contains {string}', (text: string) => {
  framesPage.getFirstIframeBody().contains(text).should('be.visible');
});

Then('I should validate that the second iframe contains {string}', (text: string) => {
  framesPage.getSecondIframeBody().contains(text).should('be.visible');
});
