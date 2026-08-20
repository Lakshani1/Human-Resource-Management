import { test, expect } from '@playwright/test';

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
  await page.getByRole('complementary').getByTestId('Location cardre').click();
  await page.getByTestId('manage').first().click();
  await page.getByRole('textbox', { name: 'Search workstation...' }).click();
  await page.getByRole('textbox', { name: 'Search workstation...' }).fill('nugegoda');
  await page.getByRole('textbox', { name: 'Search designation...' }).click();
  await page.getByRole('textbox', { name: 'Search designation...' }).fill('boralla');
  await page.getByRole('button', { name: 'Save Plan' }).click();
  await page.getByRole('cell', { name: '0' }).first().click();
  await page.getByRole('cell', { name: '0' }).nth(1).click();
  await page.getByRole('cell', { name: 'NP' }).click();
  await page.getByRole('button', { name: 'Save Plan' }).click();
  await page.getByText('Please fill the required').click();
  //the test fails because the required fields are not filled. The test should be updated to fill all required fields before clicking the save button.
});