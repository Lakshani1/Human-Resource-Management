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
  await page.getByRole('complementary').getByTestId('Employee').click();
  await page.getByRole('link', { name: 'Covering officer' }).click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByText('No options available').click();
  //the test fails because there are no options available in the dropdown box. The test should be updated to select a valid option from the dropdown box before proceeding.
});