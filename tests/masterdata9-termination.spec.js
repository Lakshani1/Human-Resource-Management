import { test, expect } from '@playwright/test';

test('add new termination', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Termination').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByRole('textbox').nth(1).fill('Contract Expiry');
  await page.locator('textarea').fill('Employment ends when the contract period expires.');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('update termination', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Termination').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'Contract End' }).click();
  await page.getByRole('textbox').nth(1).fill('Transfer to Another Organization');
  await page.getByText('Employment contract period').fill('Employment contract period completed.');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('delete termination', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Termination').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'Retirement' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('list view and active', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Termination').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li:nth-child(2) > .ps-menu-button').click();
  await page.getByRole('row', { name: '5 Transfer to Another' }).getByRole('img').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('change termination privileges', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('erp@test');
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
  await page.locator('tr:nth-child(26) > td:nth-child(2)').click();
  await page.locator('[id="83"]').uncheck();
  await page.locator('[id="84"]').uncheck();
  await page.locator('[id="85"]').uncheck();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('add termination without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Termination').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByRole('textbox').nth(1).fill('Termination Without Permission');
  await page.locator('textarea').fill('Permission validation test.');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('update termination without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Termination').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'Contract End' }).click();
  await page.getByText('Employment contract period').fill('Updated without permission.');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('delete termination without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Termination').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'Retirement' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByText('Cannot delete this employee').click();
});





