import { render, screen } from "@testing-library/react";
import { test, describe, expect , vi} from "vitest";
import userEvent from "@testing-library/user-event";
import {BookCard} from "./BookCard"
import React from "react"

describe("BookCard", function(){
    test("should render a card when mounted", function(){
        render(<BookCard book_image_url="" description="lorep" />)
    })

    test("should delete the card when users click on the basket button", async function() {
        const mockOnClick = vi.fn(() => {})
        render(<BookCard book_image_url="" description="lorep" onDelete={mockOnClick} />)
        const deleteButton = screen.getByRole("button");
        await userEvent.click(deleteButton);
        expect(mockOnClick).toHaveBeenCalled()
    })
})