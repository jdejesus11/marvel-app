import React from "react";
import { test, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Paginator } from "./Paginator";
import userEvent from "@testing-library/user-event";

describe("Paginator", function () {
  test.each([1, 2, 3, 4])(
    "should render paginator with %i pages",
    function (pages) {
      render(<Paginator pages={pages} />);
    },
  );

  test("should trigger an action event to load more data when users click on a page", async function () {
    const onPageEvent = vi.fn(() => {});
    render(<Paginator pages={2} currentPage={1} onEventChange={onPageEvent} />);
    const secondPage = screen.getByRole("button", { name: "2" });
    await userEvent.click(secondPage);
    expect(onPageEvent).toHaveBeenCalled();
  });

  test("should trigger an action event to load more data when users click on the rigth arrow page", async function () {
    const onPageEvent = vi.fn(() => {});
    render(<Paginator pages={2} currentPage={1} onEventChange={onPageEvent} />);
    const buttons = document.querySelectorAll("button");
    await userEvent.click(buttons[buttons.length - 1]);
    expect(onPageEvent).toHaveBeenCalled();
  });

  test("should trigger an action event to load more data when users click on the left arrow page", async function () {
    const onPageEvent = vi.fn(() => {});
    render(<Paginator pages={2} currentPage={1} onEventChange={onPageEvent} />);
    const buttons = document.querySelectorAll("button");
    await userEvent.click(buttons[0]);
    expect(onPageEvent).toHaveBeenCalled();
  });
});
