import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from '../pages/mainPage';
import { SelectMenuPage } from '../pages/selectMenuPage';

const mainPage = new MainPage();
const selectMenuPage = new SelectMenuPage();

When('I navigate to the Select Menu section', () => {
  mainPage.clickSidebarOption('Select Menu');
});

When('I choose {string} from the {string}', (value: string, selectType: string) => {
  switch (selectType) {
    case 'Select Value':
      selectMenuPage.selectReactOption('withOptGroup', value);
      break;
    case 'Select One':
      selectMenuPage.selectReactOption('selectOne', value);
      break;
    case 'Old Style Select Menu':
      selectMenuPage.selectOldStyle(value);
      break;
    default:
      throw new Error(`Unknown select type: ${selectType}`);
  }
});

Then('I should see {string} selected in {string}', (value: string, selectType: string) => {
  switch (selectType) {
    case 'Select Value':
      selectMenuPage.verifyReactOption('withOptGroup', value);
      break;
    case 'Select One':
      selectMenuPage.verifyReactOption('selectOne', value);
      break;
    case 'Old Style Select Menu':
      selectMenuPage.verifyOldStyle(value);
      break;
    default:
      throw new Error(`Unknown select type: ${selectType}`);
  }
});

When('I choose multiple {string} from the {string}', (values: string, selectType: string) => {
  const options = values.split(',').map(v => v.trim());
  switch (selectType) {
    case 'Multiselect drop down':
      selectMenuPage.selectMultiDropdown(options);
      break;
    case 'Standard multi select':
      selectMenuPage.selectStandardMulti(options);
      break;
    default:
      throw new Error(`Unknown multi select type: ${selectType}`);
  }
});

Then('I should see multiple {string} selected in {string}', (values: string, selectType: string) => {
  const options = values.split(',').map(v => v.trim());
  switch (selectType) {
    case 'Multiselect drop down':
      selectMenuPage.verifyMultiDropdown(options);
      break;
    case 'Standard multi select':
      selectMenuPage.verifyStandardMulti(options);
      break;
    default:
      throw new Error(`Unknown multi select type: ${selectType}`);
  }
});
