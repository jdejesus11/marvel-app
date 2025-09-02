import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CloseButton, CloseButtonProps } from "./close-button";

const doRender = (props: CloseButtonProps) => {
  return render(<CloseButton {...props} />);
};

describe("Close button", function () {
  const user = userEvent.setup();

  test("should render it", function () {
    doRender({ imageProps: { alt: "Lorep Ipsum" } });
    const button = screen.getByRole("button");
    expect(button).not.toBeNull();
  });

  test.skip("should trigger onclick event when users click on the button", async function () {
    const onClickMock = vi.fn();
    doRender({ imageProps: { alt: "Lorep Ipsum" } });
    const button = screen.getByRole("button");
    await user.click(button);
    expect(onClickMock).toBeCalled();
  });
});
