// https://playwright.dev/docs/writing-tests#first-test

import { test, expect } from "@playwright/test";
import { page } from "/lab/checklist";

test("Title Test", async ({page})) => {
    await page.goto('/lab/checklist');
    await expect(page.getTestId("title")).toHaveText("Progress Checklist")
}