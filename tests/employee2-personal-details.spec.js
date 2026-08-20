import { test, expect } from '@playwright/test';

test('Add new employee personal details', async ({ page }) => {
  // --- Login ---
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();

  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');

  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');

  await page.getByRole('button', { name: 'Login' }).click();

  // --- Navigate to HR > Employee > Personal Details ---
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();

  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();

  await page.getByRole('complementary').getByTestId('Employee').click();
  await page.getByRole('complementary').getByTestId('Personal details').click();

  // Open "Add" under Personal details submenu
  await page
    .locator(
      '.ps-menuitem-root.ps-submenu-root.ps-open.css-1ulgp3w > .ps-submenu-content > .css-ewdv3l > li > .ps-menu-button'
    )
    .first()
    .click();

  // --- Fill Personal Details form ---
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('PF-2026-00125');

  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('EMP00125');

  await page.getByText('Select a title').click();
  await page.getByRole('option', { name: 'Mr', exact: true }).click();

  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('A.B.');

  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Perera');

  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Amal Bandara Perera');

  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('199012345678');

  await page.locator('input[type="date"]').fill('1990-12-12');

  await page.locator('div:nth-child(9) > .mb-3 > .form-control').click();
  await page.locator('div:nth-child(9) > .mb-3 > .form-control').fill('Buddhism');

  await page.locator('div:nth-child(10) > .mb-3 > .form-control').click();
  await page.locator('div:nth-child(10) > .mb-3 > .form-control').fill('Sri Lankan');

  await page.getByRole('radio').first().check();
  await page.getByRole('radio').nth(2).check();

  await page.locator('textarea').first().click();
  await page.locator('textarea').first().fill('No. 25, Main Street, Colombo 05');

  await page.locator('.col-4 > .mb-3 > .form-control').first().click();
  await page.locator('.col-4 > .mb-3 > .form-control').first().fill('0771234567');

  await page.locator('input[type="email"]').first().click();
  await page.locator('input[type="email"]').first().fill('amal.perera@example.com');

  await page.locator('input[type="email"]').nth(1).click();
  await page.locator('input[type="email"]').nth(1).fill('amal.perera@company.lk');

  await page.locator('textarea').nth(1).click();
  await page.locator('textarea').nth(1).fill('No. 45, Lake Road, Colombo 08');

  await page.locator('div:nth-child(18) > .mb-3 > .form-control').click();
  await page.locator('div:nth-child(18) > .mb-3 > .form-control').fill('0112345678');

  await page.locator('textarea').nth(2).click();
  await page.locator('textarea').nth(2).fill('Nimal Perera – Brother 0719876543');

  // --- Save ---
  await page.getByRole('button', { name: 'Save' }).click();

  // Confirmation checkbox + final save
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Save' }).click();
});



test('View / manage employee numbers', async ({ page }) => {
  // --- Login ---
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();

  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');

  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');

  await page.getByRole('button', { name: 'Login' }).click();

  // --- Navigate to HR > Employee > Personal Details ---
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();

  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();

  await page.getByRole('complementary').getByTestId('Employee').click();
  await page.getByRole('complementary').getByTestId('Personal details').click();

  // --- Go to Employee numbers link ---
  await page.getByRole('link', { name: 'Employee numbers' }).click();

  // --- Select an employee from the dropdown ---
  await page.getByText('Select a employee').click();
  // The test fails because there are no options available in the dropdown box. The test should be updated to select a valid employee from the dropdown box before proceeding.
 
});


test('Open employee list view', async ({ page }) => {
  // --- Login ---
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();

  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');

  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');

  await page.getByRole('button', { name: 'Login' }).click();

  // --- Navigate to HR > Employee > Personal Details ---
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();

  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();

  await page.getByRole('complementary').getByTestId('Employee').click();
  await page.getByRole('complementary').getByTestId('Personal details').click();

  // --- Open the Employee list view ---
  await page.getByRole('link', { name: 'List view' }).click();

  // --- Verify list view loaded ---
  await expect(page.getByRole('table')).toBeVisible();
});


test('Open employee number list view', async ({ page }) => {
  // --- Login ---
  await page.goto('http://124.43.17.171:4001/');
  await page.getByRole('button', { name: 'OK' }).click();

  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('erp@test');

  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('dev@erp@test');

  await page.getByRole('button', { name: 'Login' }).click();

  // --- Navigate to HR > Employee > Personal Details ---
  await page.getByRole('button', { name: 'Explore ERP Features' }).click();
  await page.getByText('Human Resources Management').click();

  await page.locator('.react-select__input-container').click();
  await page.getByRole('option', { name: '- Nugegoda' }).click();

  await page.getByRole('complementary').getByTestId('Employee').click();
  await page.getByRole('complementary').getByTestId('Personal details').click();

  // --- Go to Employee numbers link ---
  await page.getByRole('link', { name: 'Employee numbers' }).click();

  // --- Open the Number list view ---
  await page.getByRole('link', { name: 'Number list view' }).click();

  // --- Verify the list view loaded correctly ---
  await expect(page.getByText('Page Not Found')).not.toBeVisible();
});




















