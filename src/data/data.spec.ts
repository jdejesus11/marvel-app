/// <reference types="vite/client" />
import { describe, expect, test } from "vitest";

const data = import.meta.glob("./**/*.json", { eager: true });

console.log(data["./users.json"]);

describe("User data", function () {
  test("", function () {
    expect(true).toBe(true);
  });
});
