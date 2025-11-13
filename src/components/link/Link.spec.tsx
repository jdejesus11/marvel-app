import { render } from "@testing-library/react";
import { Link as ExternalLink }  from "./Link";
import { test, describe, } from "vitest";
import React from "react";


describe("Link", function(){
    test("should render the component when mounted", function(){
        render(<ExternalLink text="Lorep Ipsum" />)
    })
})