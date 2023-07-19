import { test, expect } from '@playwright/test';

test('Test Login', async ({ page }) => {
  await page.goto('http://localhost:3000/front/login');
  await page.waitForLoadState('networkidle');
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('Admin');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForLoadState('networkidle');
  const heading = page.getByRole('heading', { name: 'Welcome Admin Admin!' })
  await expect(heading).toBeVisible();
});