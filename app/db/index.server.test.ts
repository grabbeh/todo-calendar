// @vitest-environment node
import { test, expect, vi } from "vitest";
import { getCalendarData } from "./index.server";

// Mock the table.server.ts module
vi.mock("./table.server", () => {
    return {
        ShopTable: {
            build: () => ({
                query: () => ({
                    entities: () => ({
                        send: async () => ({ Items: [] }) // Return empty items
                    })
                })
            })
        },
        userTransformer: {
            encode: (val: string) => `USER#${val}`,
            decode: (val: string) => val.replace(/^USER#/, '')
        },
        todoTransformer: {
            encode: (val: string) => `TODO#${val}`,
            decode: (val: string) => val.replace(/^TODO#/, '')
        },
        User: {},
        Todo: {}
    };
});

test("getCalendarData handles leap years correctly (Feb 2024)", async () => {
    const data = await getCalendarData("user", 2024, 2);
    expect(data.length).toBe(29);
});

test("getCalendarData handles non-leap years correctly (Feb 2023)", async () => {
    const data = await getCalendarData("user", 2023, 2);
    expect(data.length).toBe(28);
});
