import {describe, vi, test, expect} from "vitest"
import {SearchInput, SearchInputProps} from "./search-input";
import { render, screen } from "@testing-library/react"; 
import React from 'react';
import userEvent from '@testing-library/user-event'


describe("SearchInput", function(){
    const props: SearchInputProps = {
        onChange: vi.fn(() => {}),
        placehoder: "lorep ipsum"
    }

    const doRender = (props:SearchInputProps) => render(<SearchInput {...props} />)

    test("should be mounted", function(){
        doRender(props);
    })  

    test("should trigger an action whe users type in characters", async function(){
        doRender(props);
        const input = screen.getByPlaceholderText(props.placehoder ?? "");
        await userEvent.type(input, "lorep ipsum")
        expect(props.onChange).toHaveBeenCalled()
    })
})