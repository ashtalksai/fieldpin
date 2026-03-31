import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("signup page loads with form and Google OAuth button", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.getByRole("heading", { name: /create your account/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /sign up with google/i })).toBeVisible();
    await expect(page.getByPlaceholder(/Ranger Martinez/i)).toBeVisible();
    await expect(page.getByPlaceholder(/sarah@parkservice.gov/i)).toBeVisible();
    await expect(page.getByPlaceholder(/Min. 8 characters/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /create account/i })).toBeVisible();
  });

  test("login page loads with form and Google OAuth button", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in with google/i })).toBeVisible();
    await expect(page.getByPlaceholder(/sarah@parkservice.gov/i)).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign in", exact: true })).toBeVisible();
  });

  test("signup creates user and redirects to dashboard", async ({ page }) => {
    await page.goto("/signup");
    const email = `tester+${Date.now()}@sharklasers.com`;
    await page.getByPlaceholder(/Ranger Martinez/i).fill("Test Ranger");
    await page.getByPlaceholder(/sarah@parkservice.gov/i).fill(email);
    await page.getByPlaceholder(/Min. 8 characters/i).fill("TestPass123!");
    await page.getByRole("button", { name: /create account/i }).click();
    await page.waitForURL("**/dashboard", { timeout: 10000 });
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test("login with created credentials redirects to dashboard", async ({ page }) => {
    const email = `logintest+${Date.now()}@sharklasers.com`;
    await page.goto("/signup");
    await page.getByPlaceholder(/Ranger Martinez/i).fill("Login Test");
    await page.getByPlaceholder(/sarah@parkservice.gov/i).fill(email);
    await page.getByPlaceholder(/Min. 8 characters/i).fill("TestPass123!");
    await page.getByRole("button", { name: /create account/i }).click();
    await page.waitForURL("**/dashboard", { timeout: 10000 });

    await page.goto("/login");
    await page.getByPlaceholder(/sarah@parkservice.gov/i).fill(email);
    await page.getByPlaceholder(/Your password/i).fill("TestPass123!");
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
    await page.waitForURL("**/dashboard", { timeout: 10000 });
    await expect(page).toHaveURL(/\/dashboard/);
  });

  test("signup page has link to login", async ({ page }) => {
    await page.goto("/signup");
    // "Log in" link should point to /login
    const logInLink = page.getByRole("link", { name: "Log in" });
    await expect(logInLink.first()).toHaveAttribute("href", "/login");
  });

  test("login page has link to signup", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("link", { name: /sign up/i })).toHaveAttribute("href", "/signup");
  });
});
