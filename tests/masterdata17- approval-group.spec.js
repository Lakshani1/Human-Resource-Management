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
  await page.getByRole('listitem').filter({ hasText: 'Master dataDepartmentAdd' }).getByTestId('Approval group').click();
  await page.locator('.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button').first().click();
  await page.locator('.react-select__input-container.css-1ezlvm0').click();
  await page.getByRole('option', { name: '[movement] IT Division' }).click();
  await page.locator('svg').nth(4).click();
  await page.getByRole('option', { name: 'Work request' }).click();
  await page.getByRole('button').nth(2).click();
  await page.getByRole('button', { name: 'Yes, remove it!' }).click();
  await page.getByRole('button', { name: 'Add new' }).click();
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('1');
  await page.locator('.col-8 > .mb-3 > .border > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
  await page.getByRole('spinbutton').first().click();
  await page.getByRole('spinbutton').first().fill('2');
  await page.locator('div').filter({ hasText: /^Select a officer$/ }).nth(3).click();
  await page.getByRole('heading', { name: 'Approval Officers & Time' }).click();
  await page.locator('.col-8 > .mb-3 > .border > .css-b62m3t-container > .react-select__control > .react-select__value-container > .react-select__input-container').click();
  //Can't select an officer from the dropdown box. No options available in the dropdown box.
});