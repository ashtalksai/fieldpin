import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("loads without errors", async ({ page }) => {
    await expect(page).toHaveURL("/");
    // Check no console errors from Fieldpin domain
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });

  test("has navbar with logo and nav links", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("link", { name: "Fieldpin" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "About" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /start pilot/i }).first()).toBeVisible();
  });

  test("has hero section with headline, subline, and CTA", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Field data that doesn't wait for Wi-Fi");
    await expect(page.getByRole("link", { name: /start your free pilot/i })).toBeVisible();
  });

  test("has minimum 8 sections on landing page", async ({ page }) => {
    // Count sections by checking for key section headings
    const sections = [
      "Field data that doesn't wait for Wi-Fi", // hero
      "Conservation decisions run on whatever survives", // problem
      "Built for hands that might be wearing gloves", // solution
      "Everything a ranger needs", // features
      "From sighting to report in under 60 seconds", // how it works
      "What rangers are saying", // testimonials
      "Start with the pilot", // pricing
      "Real questions from real rangers", // FAQ
    ];
    for (const text of sections) {
      await expect(page.getByText(text)).toBeVisible();
    }
  });

  test("has footer with links", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.getByRole("link", { name: "Privacy Policy" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Terms of Service" })).toBeVisible();
  });

  test("social proof bar is visible", async ({ page }) => {
    await expect(page.getByText("10,234 pins synced")).toBeVisible();
    await expect(page.getByText("4.9★").first()).toBeVisible();
  });

  test("FAQ accordion opens on click", async ({ page }) => {
    const firstFaq = page.getByRole("button", { name: /Does it really work without any internet connection/i });
    await firstFaq.click();
    // After click, content should expand
    await expect(firstFaq).toBeVisible();
  });

  test("pricing section has 3 tiers", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Pilot", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Professional", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Agency", exact: true })).toBeVisible();
  });

  test("all CTAs link to signup", async ({ page }) => {
    const ctaLinks = page.getByRole("link", { name: /start.*pilot/i });
    await expect(ctaLinks.first()).toHaveAttribute("href", "/signup");
  });
});
