import { test, expect } from '@playwright/test';

test('add new document type', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Document type').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByRole('textbox').nth(1).fill('Appointment Letter');
  await page.locator('textarea').fill('Official document confirming employee appointment.');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('update document type', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Document type').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByText('Select a document type').click();
  await page.getByRole('option', { name: 'Experience Letter' }).click();
  await page.getByText('Manage employee and company-').fill('Manage employee and company-related official records.');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('delete document type', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Document type').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByText('Select a document type').click();
  await page.getByRole('option', { name: 'Employee Records' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('list view and active', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Document type').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li:nth-child(2) > .ps-menu-button').click();
  await page.getByRole('row', { name: '1 Birth Certificate No Remark' }).getByRole('img').click();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('change document type privileges', async ({ page }) => {
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
  await page.locator('tr:nth-child(28) > td:nth-child(2)').click();
  await page.locator('[id="302"]').uncheck();
  await page.locator('[id="303"]').uncheck();
  await page.locator('[id="304"]').uncheck();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('add document type without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Document type').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByRole('textbox').nth(1).fill('Document Without Permission');
  await page.locator('textarea').fill('Permission validation test.');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('update document type without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Document type').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByText('Select a document type').click();
  await page.getByRole('option', { name: 'Experience Letter' }).click();
  await page.getByText('Manage employee and company-').fill('Updated without permission.');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('delete document type without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Document type').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.getByText('Select a document type').click();
  await page.getByRole('option', { name: 'Experience Letter' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.getByText('Cannot delete this document').click();
});

