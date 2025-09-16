import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { NestedFramesPage } from '../../pages/alertsFrameWindows/nestedFramesPage';

const nestedFramesPage = new NestedFramesPage();

When('I navigate to the Nested Frames section', () => {
  nestedFramesPage.navigateToNestedFrames();
});

Then('I should validate that the parent frame contains {string}', (expectedText: string) => {
  nestedFramesPage.getParentFrameBody()
    .should('contain.text', expectedText);
});

Then('I should validate that the child frame contains {string}', (expectedText: string) => {
  nestedFramesPage.getChildFrameBody()
    .should('contain.text', expectedText);
});

