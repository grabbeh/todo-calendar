import { expect, test, describe } from "vitest";
import { calendarRating, rating } from "./index.tsx";

describe("calendarRating", () => {
  test("returns ✔️😃 for 100% completion", () => {
    const result = calendarRating(10, 0);
    expect(result.props.children).toBe("✔️😃");
  });

  test("returns 🙂 for > 80% completion", () => {
    const result = calendarRating(81, 19); // 81%
    expect(result.props.children).toBe("🙂");
  });

  test("returns ☹️ for > 60% completion", () => {
    const result = calendarRating(80, 20); // 80%
    expect(result.props.children).toBe("☹️");
    const result2 = calendarRating(61, 39); // 61%
    expect(result2.props.children).toBe("☹️");
  });

  test("returns 😔 for > 40% completion", () => {
    const result = calendarRating(60, 40); // 60%
    expect(result.props.children).toBe("😔");
    const result2 = calendarRating(41, 59); // 41%
    expect(result2.props.children).toBe("😔");
  });

  test("returns 😢 for > 20% completion", () => {
    const result = calendarRating(40, 60); // 40%
    expect(result.props.children).toBe("😢");
    const result2 = calendarRating(21, 79); // 21%
    expect(result2.props.children).toBe("😢");
  });

  test("returns 😢 for > 0% completion", () => {
    const result = calendarRating(20, 80); // 20%
    expect(result.props.children).toBe("😢");
    const result2 = calendarRating(1, 99); // 1%
    expect(result2.props.children).toBe("😢");
  });

  test("returns 😭 for 0% completion", () => {
    const result = calendarRating(0, 10); // 0%
    expect(result.props.children).toBe("😭");
  });

  test("handles 0 total todos", () => {
    const result = calendarRating(0, 0);
    expect(result).toBeNull();
  });
});

describe("rating", () => {
  test("returns 😃 for 100% completion", () => {
    const result = rating(100);
    expect(result.props.children).toBe("😃");
  });

  test("returns 🙂 for > 80% completion", () => {
    const result = rating(81);
    expect(result.props.children).toBe("🙂");
  });

  test("returns ☹️ for > 60% completion", () => {
    const result = rating(80);
    expect(result.props.children).toBe("☹️");
    const result2 = rating(61);
    expect(result2.props.children).toBe("☹️");
  });

  test("returns 😔 for > 40% completion", () => {
    const result = rating(60);
    expect(result.props.children).toBe("😔");
    const result2 = rating(41);
    expect(result2.props.children).toBe("😔");
  });

  test("returns 😢 for > 20% completion", () => {
    const result = rating(40);
    expect(result.props.children).toBe("😢");
    const result2 = rating(21);
    expect(result2.props.children).toBe("😢");
  });

  test("returns 😢 for > 0% completion", () => {
    const result = rating(20);
    expect(result.props.children).toBe("😢");
    const result2 = rating(1);
    expect(result2.props.children).toBe("😢");
  });

  test("returns 😭 for 0% completion", () => {
    const result = rating(0);
    expect(result.props.children).toBe("😭");
  });
});
