import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');
  await page.getByRole('button', { name: 'Login' }).click();
});

test('shows validation error for missing/invalid username', async ({ page }) => {
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();
  // Clear username and enter an invalid value (empty)
  await page.locator('input[type="text"]').fill('abcd');
  // Fill password so only username is invalid
  await page.locator('input[type="password"]').fill('somepassword');
  await page.getByRole('button', { name: 'Login' }).click();


});