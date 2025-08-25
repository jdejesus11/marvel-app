import { queryByPlaceholderText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropDownList, DropDownListProps } from "./drop-down";
import { test, describe, expect } from "vitest";
import React from "react";

describe("Drop Down List", function () {
  const user = userEvent.setup();
  const props: DropDownListProps = {
    options: {
      asc: "asc",
      desc: "desc",
    },
    name: "sorting",
    placeholder: "Ordenar por",
  };

  test("should render it", function () {
    render(<DropDownList {...props} />);
  });

  describe("when users focus on the input", function () {
    test("then should open the list of options", async function () {
      render(<DropDownList {...props} />);
      const input = screen.getByPlaceholderText(props.placeholder ?? "");
      await user.click(input);
      const list = screen.getByRole("listbox");
      expect(list).not.toBeNull();
    });
  });
});
