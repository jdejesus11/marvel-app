import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CloseButton, CloseButtonProps } from "./close-button";

const doRender = (props: CloseButtonProps) => {
  return render(<CloseButton {...props} />);
};

describe("Close button", function () {
  const props = { imageProps: { alt: "Lorep Ipsum" } };
  const user = userEvent.setup();

  test("should render it", function () {
    doRender(props);
  });

  test("should trigger onclick event when users click on the button", async function () {
    const onClickMock = vi.fn();
    doRender({ ...props, onClick: onClickMock });
    const button = screen.getByRole("button");
    await user.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
