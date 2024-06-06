import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(500)
  const canvas = page.locator("canvas");
  await expect(canvas).toHaveScreenshot('test.png', {
    timeout: 15_000,
  });
});
