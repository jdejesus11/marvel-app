import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropDownList, DropDownListProps } from "./drop-down";
import { test, describe, expect } from "vitest";
import React from "react";

const noFoundMessage = "No se encontrarón coincidencias";

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

  describe("when users type in an existing option", function () {
    test("then should render list of matched options", async function () {
      render(<DropDownList {...props} />);
      const input = screen.getByPlaceholderText(props.placeholder ?? "");
      await user.type(input, "asc");
      const list = screen.getByRole("listbox");
      expect(list).not.toBeNull();
    });
  });

  describe("when users type in non-existing options", function () {
    test("then should render a messages that says 'No se encontraron coincidencias'", async function () {
      render(<DropDownList {...props} />);
      const input = screen.getByPlaceholderText(props.placeholder ?? "");
      await user.type(input, "lorep ipsum");
      const banner = screen.queryByText(noFoundMessage);
      expect(banner).not.toBeNull();
    });
  });
});
