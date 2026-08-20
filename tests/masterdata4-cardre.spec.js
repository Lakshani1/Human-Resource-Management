import { test, expect } from '@playwright/test';

test('add new cardre location wise cardre', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('add new').nth(2).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('HR Executive');
  await page.getByText('Select a employee category').click();
  await page.getByRole('option', { name: 'EMPC0007 - Full-Time Employees' }).click();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('row', { name: 'DEP0002 Human Resource' }).getByRole('checkbox').check();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Manage employee records, recruitment activities, attendance, leave, and HR documentation.');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Responsible for day-to-day HR operations and employee support.');
  await page.getByRole('button', { name: 'Save' }).click();
});


test('add new cardre', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('add new').nth(2).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Administrative Officer');
  await page.getByText('Select a employee category').click();
  await page.getByRole('option', { name: 'EMPC0007 - Full-Time Employees' }).click();
  await page.getByText('Select a salary scale').click();
  await page.getByRole('option', { name: 'M1', exact: true }).click();
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('2');
  await page.getByRole('spinbutton').nth(1).click();
  await page.getByRole('spinbutton').nth(1).fill('3');
  await page.getByRole('checkbox').nth(2).uncheck();
  await page.getByRole('row', { name: 'DEP0002 Human Resource' }).getByRole('checkbox').check();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Handle administrative tasks, documentation, correspondence, and office coordination.');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Supports administrative activities and office coordination.');
  await page.getByRole('button', { name: 'Save' }).click();
});

test('edit cardre', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('add new').nth(2).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'DES0003 - IT assistant manager' }).click();
  await page.getByText('Select a employee category').click();
  await page.getByRole('option', { name: 'EMPC0011 - Sift- Time Employee' }).click();
  await page.locator('tr:nth-child(11) > td > .form-check-input').check();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('delete cardre', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('add new').nth(2).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'DES0003 - IT assistant manager' }).click();
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
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('list view').nth(2).click();
  await page.getByRole('row', { name: '1 DES0001 Senior manager Full' }).getByRole('img').click();
  await page.locator('div:nth-child(16) > .form-check > .form-check-input').check();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('cahange privilages', async ({ page }) => {
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
  await page.locator('[id="50"]').uncheck();
  await page.locator('[id="51"]').uncheck();
  await page.locator('[id="52"]').uncheck();
  await page.getByRole('button', { name: 'Save' }).click();
});


test('add cardre without permissions', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('add new').nth(2).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('abc');
  await page.locator('div').filter({ hasText: /^Select a employee category$/ }).nth(2).click();
  await page.getByRole('option', { name: 'EMPC0007 - Full-Time Employees' }).click();
  await page.getByRole('row', { name: 'DEP0002 Human Resource' }).getByRole('checkbox').check();
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('1');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('edit cardre without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('add new').nth(2).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'DES0001 - Senior manager' }).click();
  await page.getByText('M1').click();
  await page.getByRole('option', { name: 'HA1' }).click();
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('-1');
  await page.getByRole('row', { name: 'DEP0003 Finance division' }).getByRole('checkbox').check();
  await page.getByRole('row', { name: 'DEP0012 IT Division' }).getByRole('checkbox').uncheck();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Please fill the required').click();
});

test('delete cardre without permission', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Manage cardre').click();
  await page.getByTestId('add new').nth(2).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: 'DES0001 - Senior manager' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes, delete it!' }).click();
  await page.getByText('Cannot delete this').click();
});

test('change privilages list view', async ({ page }) => {
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
  await page.locator('[id="53"]').uncheck();
  await page.locator('[id="57"]').uncheck();
  await page.getByRole('button', { name: 'Save' }).click();
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
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
});