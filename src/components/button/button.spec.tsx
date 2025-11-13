import { render, screen } from "@testing-library/react";
import { Button, ButtonProps } from "./button";
import { test, describe, vi, expect } from "vitest";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Button", function () {
  const onClickMock = vi.fn(() => {});
  const buttonProps: ButtonProps = {
    text: "lorep ipsum",
    onClick: onClickMock,
  };

  const doRender = (props: ButtonProps) => {
    return render(<Button {...props} />);
  };

  test("should render it", function () {
    doRender(buttonProps);
  });

  test("should trigger an action  when users click on the button", async () => {
    doRender(buttonProps);
    const button = screen.getByRole("button", { name: buttonProps.text });
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
