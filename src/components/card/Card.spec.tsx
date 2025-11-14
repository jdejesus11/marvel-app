import { render, screen } from "@testing-library/react";
import { Card, CardProps } from "./Card";
import { test, describe, vi, expect } from "vitest";
import React from "react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/vitest';

describe("Card", function () {
  const props: CardProps = {
    character: {
      name: "Captain America",
      description: "Lorep Ipsum",
      comics: ["lorep ipsu,"],
    },
    noDescriptionPlaceholder: "No Disponible"
  };
  const doRender = (props: CardProps) => {
    render(<Card {...props} />);
  };
  test("shoud render the component when mounted", function () {
    doRender(props);
  });

  test("should view detail of a character when users clicks on the view button", async function () {
    props.onViewMoreEvent = vi.fn(() => {});
    doRender(props);
    const viewMoreButton = screen.getByRole("button", { name: "VIEW MORE" });
    await userEvent.click(viewMoreButton);
    expect(props.onViewMoreEvent).toHaveBeenCalled()
  });

  test("should view the detail of a character", function(){
    const customProps: CardProps = {
      ...props,
      onViewMoreEvent : vi.fn(() => {}),
      noDescriptionPlaceholder: "No Dispobible"
    }
    doRender(customProps);
    const name = screen.getByText(props.character.name)
    expect(name).toBeInTheDocument()
    const description = screen.queryByText(props.character.description ?? "")
    expect(description).toBeInTheDocument();
    const comics = screen.getAllByRole("listitem")
    expect(comics.length).toBe(props.character.comics?.length)
  })
});
