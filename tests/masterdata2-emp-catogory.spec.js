import { test, expect } from '@playwright/test';

test('create employee category', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('add new').nth(1).click();
  await page.locator('.react-select__input-container').first().click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Sift- Time Employee');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('3');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('Night - Day Shit');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('edit employee category', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.getByTestId('legend-location-button').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('add new').nth(1).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'EMPC0007 - Full-Time Employees' }).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Grade 3');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('On site');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('delete employee category', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('add new').nth(1).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'EMPC0013 - Sift- Time Employee' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
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
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('list view').nth(1).click();
  await page.locator('.MuiDataGrid-cell > svg > path').first().click();
});

test('create add new one', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('add new').nth(1).click();
  await page.locator('.react-select__input-container').first().click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Sift- Time Employee');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('3');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('Night - Day Shit');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('change privileges', async ({ page }) => {
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
  await page.locator('[id="40"]').uncheck();
  await page.locator('[id="41"]').uncheck();
  await page.locator('[id="42"]').uncheck();
  const saveButton = page.getByRole('button', { name: 'Save' });
  await saveButton.waitFor({ state: 'visible' });
  await saveButton.click();
});


test('add employee category with out permissions', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('add new').nth(1).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('abc');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('2');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('none');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});


test('update employee category without permissions', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByText('OKNoCancel').click();
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
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('add new').nth(1).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'EMPC0014 - ABC' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('ABC new');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});


test('delete employee category without permissions', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Employee category').click();
  await page.getByTestId('add new').nth(1).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'EMPC0007 - Full-Time Employees' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.getByText('Cannot delete this employee').click();
});



