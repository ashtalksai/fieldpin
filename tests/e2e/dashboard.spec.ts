import { test, expect } from "@playwright/test";

async function setupUser(page: any) {
  const email = `dash+${Date.now()}@sharklasers.com`;
  await page.goto("/signup");
  await page.getByPlaceholder(/Ranger Martinez/i).fill("Dashboard Tester");
  await page.getByPlaceholder(/sarah@parkservice.gov/i).fill(email);
  await page.getByPlaceholder(/Min. 8 characters/i).fill("TestPass123!");
  await page.getByRole("button", { name: /create account/i }).click();
  await page.waitForURL("**/dashboard", { timeout: 10000 });
}

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await setupUser(page);
  });

  test("dashboard overview loads with stat cards", async ({ page }) => {
    await expect(page.getByText("Total Pins This Month")).toBeVisible();
    await expect(page.getByText("Active Rangers Today")).toBeVisible();
    await expect(page.getByText("Pending Syncs")).toBeVisible();
    await expect(page.getByText("Reports Generated")).toBeVisible();
  });

  test("Leaflet map renders on dashboard", async ({ page }) => {
    await expect(page.locator(".leaflet-container")).toBeVisible();
  });

  test("demo data banner is visible", async ({ page }) => {
    await expect(page.getByText(/this is demo data/i)).toBeVisible();
  });

  test("recent activity feed shows events", async ({ page }) => {
    // Activity feed contains ranger activity entries
    await expect(page.getByText("Recent Activity")).toBeVisible();
    // Feed has at least one entry
    const activities = page.locator("text=/dropped|reported|logged|synced/");
    await expect(activities.first()).toBeVisible();
  });

  test("sidebar navigation links work", async ({ page }) => {
    await page.getByRole("link", { name: /^Map$/i }).click();
    await expect(page).toHaveURL(/\/dashboard\/map/);
  });

  test("rangers page loads with ranger table", async ({ page }) => {
    await page.goto("/dashboard/rangers");
    await expect(page.getByRole("heading", { name: /rangers/i })).toBeVisible();
    await expect(page.getByText("Sarah Martinez")).toBeVisible();
    await expect(page.getByRole("button", { name: /invite ranger/i })).toBeVisible();
  });

  test("reports page loads with filter controls", async ({ page }) => {
    await page.goto("/dashboard/reports");
    await expect(page.getByRole("heading", { name: /reports/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /export csv/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /export pdf/i })).toBeVisible();
  });

  test("full-screen map page loads with Leaflet", async ({ page }) => {
    await page.goto("/dashboard/map");
    await expect(page.locator(".leaflet-container")).toBeVisible();
  });
});
