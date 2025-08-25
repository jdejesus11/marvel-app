import { describe, test, expect } from "vitest";
import { isStringEmpty } from "./utils";

describe("Utils", function () {
  test("should return false if a value has at least one alfabetic character", function () {
    expect(isStringEmpty("lorep")).toBe(false);
  });
  test("should return false if a value has at least one digit", function () {
    expect(isStringEmpty("1")).toBe(false);
  });
  test("should return true if a value has just one space", function () {
    expect(isStringEmpty(" ")).toBe(true);
  });
  test("should return true if a value does not have characters", function () {
    expect(isStringEmpty("")).toBe(true);
  });
});
