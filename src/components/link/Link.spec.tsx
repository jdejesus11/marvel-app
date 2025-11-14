import { render, screen } from "@testing-library/react";
import { Link  } from "./Link";
import { test, describe, expect } from "vitest";
import React from "react";
import '@testing-library/jest-dom/vitest';


describe("Link", function () {
  test("should render the component when mounted", function () {
    render(<Link text="Lorep Ipsum" />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument()
  });
});
