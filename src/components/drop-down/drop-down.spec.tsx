import { render } from '@testing-library/react'
import {DropDownList} from "./drop-down"
import { test, describe } from 'vitest';
import React from 'react'


describe("Drop Down List", function(){
    test("should render it", function(){
        render(<DropDownList />)
    })
})