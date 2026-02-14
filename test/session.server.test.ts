// @vitest-environment node
import { test, expect, describe, vi, beforeEach, afterEach } from "vitest";

// Mock dependencies
vi.mock("../app/db/index.server", () => ({
  addUser: vi.fn(),
  fetchUser: vi.fn()
}));

vi.mock("bcryptjs", () => ({
  default: {
    hash: vi.fn(() => Promise.resolve("hashed")),
    compare: vi.fn(() => Promise.resolve(true))
  }
}));

// We need to capture the config passed to createCookieSessionStorage
let capturedConfig: any;

vi.mock("@remix-run/node", () => ({
  createCookieSessionStorage: (config: any) => {
    capturedConfig = config;
    return {
      getSession: () => ({ get: () => null }),
      commitSession: () => "cookie",
      destroySession: () => "cookie",
    };
  },
  redirect: () => {}
}));

describe("Session Security", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.resetModules();
  });

  test("throws error in production when SESSION_SECRET is missing", async () => {
    process.env.NODE_ENV = "production";
    delete process.env.SESSION_SECRET;

    // Import the module under test
    const sessionServer = await import("../app/db/session.server");

    // Check if the secret used is the insecure fallback placeholder
    expect(capturedConfig.cookie.secrets).toContain('production_secret_placeholder_do_not_use');

    // Call getUserEmail which calls getUserSession which calls checkSessionSecret
    // It SHOULD throw now.
    const req = new Request("http://localhost");
    await expect(sessionServer.getUserEmail(req)).rejects.toThrow("SESSION_SECRET environment variable is not set.");
  });

  test("uses fallback in development when SESSION_SECRET is missing", async () => {
    process.env.NODE_ENV = "development";
    delete process.env.SESSION_SECRET;

    // Import the module under test
    const sessionServer = await import("../app/db/session.server");

    // Check if the secret used is the development fallback
    expect(capturedConfig.cookie.secrets).toContain('temporary_secret_for_boot');

    // Call getUserEmail which calls getUserSession which calls checkSessionSecret
    // It should NOT throw, but log a warning (which we won't assert on here).
    const req = new Request("http://localhost");
    await expect(sessionServer.getUserEmail(req)).resolves.not.toThrow();
  });
});
