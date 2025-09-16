import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../../pages/mainPage';
import { MenuPage } from '../../pages/widgets/menuPage';

const mainPage = new MainPage();
const menuPage = new MenuPage();

When('I navigate to the Menu section', () => {
  mainPage.clickSidebarOption('Menu');
});

Then('I should see {string} in the menu', (menuItem: string) => {
  menuPage.menuItemShouldBeVisible(menuItem);
});

Then(
  'I should see its sub items {string} in {string}',
  (subItems: string, parentItem: string) => {
    const items = subItems.split(',').map(i => i.trim());
    menuPage.submenuItemsShouldExist(parentItem, items);
  }
);
