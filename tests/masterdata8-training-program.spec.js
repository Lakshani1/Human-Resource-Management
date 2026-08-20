import { test, expect } from '@playwright/test';

test('add new training programme', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Training programme').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Leadership Development Programme');
  await page.getByText('Select a category').click();
  await page.getByRole('option', { name: 'Short term' }).click();
  await page.getByText('Select a type').click();
  await page.getByRole('option', { name: 'Training' }).click();
  await page.getByRole('checkbox').first().check();
  await page.locator('.col-md-6 > .mb-3 > .border > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
  await page.getByRole('option', { name: 'Sri Lanka' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('IIT');
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('6');
  await page.getByText('Select a period unit').click();
  await page.getByRole('option', { name: 'Weeks' }).click();
  await page.getByRole('spinbutton').nth(1).click();
  await page.getByRole('spinbutton').nth(1).fill('15000');
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('spinbutton').nth(2).click();
  await page.getByRole('spinbutton').nth(2).fill('1');
  await page.getByRole('spinbutton').nth(3).click();
  await page.getByRole('spinbutton').nth(3).fill('15000');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('Training programme designed to improve leadership, decision-making, communication, and team management skills.');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('update training programme', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Training programme').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').first().click();
  await page.getByRole('option', { name: 'TRPRO0007 - Leadership' }).click();
  await page.getByRole('spinbutton').nth(3).click();
  await page.getByRole('spinbutton').nth(3).fill('150001');
  await page.getByRole('spinbutton').nth(1).click();
  await page.getByRole('spinbutton').nth(1).fill('150000');
  await page.locator('.col-6 > .mb-3 > .border > .css-b62m3t-container > .react-select__control > .react-select__indicators > .react-select__indicator.react-select__dropdown-indicator').click();
  await page.getByRole('option', { name: 'Months' }).click();
  await page.getByRole('spinbutton').nth(3).click();
  await page.getByRole('spinbutton').nth(3).fill('15000');
  await page.getByText('Remark Training programme').click();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('delete traing programme', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Training programme').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').first().click();
  await page.getByRole('option', { name: 'TRPRO0008 - abc' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('list view', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Training programme').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li:nth-child(2) > .ps-menu-button').click();
});



test('test', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Administration').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Privileges').click();
  await page.getByRole('link', { name: 'User privileges' }).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'erp@test' }).click();
  await page.getByText('Select a module').click();
  await page.getByRole('option', { name: 'human resource' }).click();
  await page.locator('tr:nth-child(25) > td:nth-child(2)').click();
  await page.locator('[id="73"]').uncheck();
  await page.locator('[id="74"]').uncheck();
  await page.locator('[id="75"]').uncheck();
  await page.getByRole('button', { name: 'Save' }).click();
  });

test('add training programme without permission', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Training programme').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByRole('textbox').nth(1).fill('Training Without Permission');
  await page.getByText('Select a category').click();
  await page.getByRole('option', { name: 'Short term' }).click();
  await page.getByText('Select a type').click();
  await page.getByRole('option', { name: 'Training' }).click();
  await page.getByRole('checkbox').first().check();
  await page.locator('.col-md-6 > .mb-3 > .border > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
  await page.getByRole('option', { name: 'Sri Lanka' }).click();
  await page.getByRole('textbox').nth(2).fill('IIT');
  await page.getByRole('spinbutton').first().fill('6');
  await page.getByText('Select a period unit').click();
  await page.getByRole('option', { name: 'Weeks' }).click();
  await page.getByRole('spinbutton').nth(1).fill('15000');
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('spinbutton').nth(2).fill('1');
  await page.getByRole('spinbutton').nth(3).fill('15000');
  await page.locator('textarea').fill('Permission validation test.');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('update training programme without permission', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Training programme').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').first().click();
  await page.getByRole('option', { name: 'TRPRO0007 - Leadership' }).click();
  await page.getByRole('spinbutton').nth(3).fill('15001');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('delete training programme without permission', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Training programme').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').first().click();
  await page.getByRole('option', { name: 'TRPRO0008 - abc' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  
});
  
  
  
  
  
  
