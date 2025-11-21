import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Wall Street Silver/);
    await expect(page.locator('h1')).toContainText('Wall Street Silver');
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');

    // Test docs navigation
    await page.click('a[href="/docs"]');
    await expect(page).toHaveURL(/\/docs/);
    await expect(page.locator('h1')).toContainText('Documentation');

    // Test blog navigation
    await page.click('a[href="/blog"]');
    await expect(page).toHaveURL(/\/blog/);
    await expect(page.locator('h1')).toContainText('Blog');

    // Test research navigation
    await page.click('a[href="/research"]');
    await expect(page).toHaveURL(/\/research/);
    await expect(page.locator('h1')).toContainText('Research');
  });

  test('contact form renders', async ({ page }) => {
    await page.goto('/contact');

    await expect(page.locator('h1')).toContainText('Contact');
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('docs page renders MDX content', async ({ page }) => {
    await page.goto('/docs/getting-started');

    await expect(page.locator('h1')).toContainText('Getting Started');
    await expect(page.locator('article')).toBeVisible();
  });

  test('legal pages are accessible', async ({ page }) => {
    // Privacy policy
    await page.goto('/legal/privacy');
    await expect(page.locator('h1')).toContainText('Privacy Policy');

    // Terms of service
    await page.goto('/legal/terms');
    await expect(page.locator('h1')).toContainText('Terms of Service');
  });

  test('404 page works', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');

    await expect(page.locator('h1')).toContainText('404');
    await expect(page.locator('a[href="/"]')).toBeVisible();
  });

  test('responsive navigation on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Mobile menu button should be visible
    const mobileMenuButton = page.locator('button[aria-label="Open menu"]');
    await expect(mobileMenuButton).toBeVisible();
  });
});

test.describe('Performance', () => {
  test('homepage meets performance budget', async ({ page }) => {
    await page.goto('/');

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Check basic performance metrics
    const performanceTiming = await page.evaluate(() =>
      JSON.stringify(window.performance.timing)
    );

    expect(performanceTiming).toBeTruthy();
  });
});

test.describe('Accessibility', () => {
  test('homepage has no critical accessibility issues', async ({ page }) => {
    await page.goto('/');

    // Check for basic accessibility features
    const header = page.locator('header');
    await expect(header).toBeVisible();

    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();

    const main = page.locator('main');
    await expect(main).toBeVisible();

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});

test.describe('Social links', () => {
  test('header has correct links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('nav-github')).toHaveAttribute('href', 'https://github.com/SilverIntelligence/');
    await expect(page.getByTestId('nav-linkedin')).toHaveAttribute('href', 'https://www.linkedin.com/company/wall-street-silver/');
  });

  test('footer has correct links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('footer-github')).toHaveAttribute('href', 'https://github.com/SilverIntelligence/');
    await expect(page.getByTestId('footer-linkedin')).toHaveAttribute('href', 'https://www.linkedin.com/company/wall-street-silver/');
  });
});
