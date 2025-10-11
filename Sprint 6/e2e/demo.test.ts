import { expect, test } from '@playwright/test';

test('Title Test', async ({ page }) => {
	await page.goto('/src/lab/checklist');
	await expect(page.locator('title')).toHaveText("Progress Checklist");
});
