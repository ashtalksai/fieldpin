import { test, expect } from "@playwright/test";

test.describe("Responsive — Mobile (375px)", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("landing page renders at 375px — hamburger menu visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: /open menu/i })).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("signup page renders at 375px — form usable", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.getByRole("heading", { name: /create your account/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /create account/i })).toBeVisible();
  });

  test("login page renders at 375px — form usable", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign in", exact: true })).toBeVisible();
  });

  test("pricing page renders at 375px", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByRole("heading", { name: /find the right plan/i })).toBeVisible();
  });

  test("about page renders at 375px", async ({ page }) => {
    await page.goto("/about");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});

test.describe("Responsive — Tablet (768px)", () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test("landing page renders at 768px", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});

test.describe("Responsive — Desktop (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test("landing page renders at 1280px — full nav visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Features" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "About" }).first()).toBeVisible();
  });
});
