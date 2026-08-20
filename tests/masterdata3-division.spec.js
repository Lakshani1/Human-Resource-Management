import { test, expect } from '@playwright/test';

test('add new division', async ({ page }) => {
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
  await page.getByRole('complementary').getByTestId('Division').click();
  await page.getByTestId('add new').nth(1).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Corporate Services');
  await page.locator('div:nth-child(6) > .mb-3 > .border > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
  await page.getByRole('option', { name: 'DEP0002 - Human Resource' }).click();
  await page.locator('div:nth-child(7) > .mb-3 > .border > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
  await page.locator('textarea').click();
  await page.locator('textarea').fill('HR, Finance, Administration');
  await page.getByText('HR, Finance, Administration').click();
  await page.getByRole('button', { name: 'Save' }).click();
});

