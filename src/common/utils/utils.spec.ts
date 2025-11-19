import { render, screen } from "@testing-library/react";
import { test, describe, expect, vi } from "vitest";
import { sortBy } from "./uitils";

describe("Utils", async function () {
  const data = await import("../../data/characters.json");

  test("should sort a character list by its name ascendent", function () {
    const sortedCharacters = data.default.results.sort(sortBy("ASC"));
    expect(sortedCharacters.length).toEqual(data?.default?.results.length);
  });
  test("should sort a character list by its name descendent", function () {
    const sortedCharacters = data.default.results.sort(sortBy("ASC"));
    expect(sortedCharacters.length).toEqual(data?.default?.results.length);
  });
});
