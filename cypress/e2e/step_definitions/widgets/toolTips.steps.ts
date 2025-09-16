import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { ToolTipsPage } from '../../pages/widgets/toolTipsPage';

const mainPage = new MainPage();
const toolTipsPage = new ToolTipsPage();

When('I navigate to the Tool Tips section', () => {
  mainPage.clickSidebarOption('Tool Tips');
});

Then('I should see a tooltip when hovering over the button', () => {
  toolTipsPage.hoverButton();
  toolTipsPage.tooltipShouldBeVisible('You hovered over the Button');
});

Then('I should see a tooltip when hovering over the text input', () => {
  toolTipsPage.hoverTextInput();
  toolTipsPage.tooltipShouldBeVisible('You hovered over the text field');
});

Then('I should see a tooltip when hovering over the {string} link', (linkText: string) => {
  toolTipsPage.hoverTextLink(linkText as 'Contrary' | '1.10.32');
  const expectedTooltip = linkText === 'Contrary' ? 'You hovered over the Contrary' : 'You hovered over the 1.10.32';
  toolTipsPage.tooltipShouldBeVisible(expectedTooltip);
});
