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
  await page.goto('http://124.43.17.171:4001/');
  await page.getByText('Human Resources Management').click();
  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();
  await page.getByRole('complementary').getByTestId('Master data').click();
  await page.getByRole('listitem').filter({ hasText: 'Master dataDepartmentAdd' }).getByTestId('Family dependent').click();
  await page.getByTestId('manage').nth(1).click();
  await page.getByText('Page Not Found').click();
  //the test fails because the page is not found. The test should be updated to navigate to the correct page before clicking the manage button.
});