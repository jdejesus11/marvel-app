import { render } from "@testing-library/react";
import { Button } from "./button";
import { test, describe } from "vitest";
import React from "react";

describe("Button", function () {
  test("should render it", function () {
    render(<Button text="aa" onClick={() => {}} />);
  });
});
