import React, { SyntheticEvent, useRef, useState } from 'react';
import styles from "./drop-down.module.css"
import {isStringEmpty}  from "../../shared/utils"

export const DropDownList:React.FC = () => {

    const [value, setValue] = useState<string>("");
    const domRef = useRef(null)

    const inputOnChange = (event:React.ChangeEvent<HTMLInputElement> | undefined) => {
        setValue(event?.target.value ?? "");
    }

    const isOptionListVisible = value.length > 0 && !isStringEmpty(value);
    
    return (
        <div>
            <input onChange={inputOnChange} value={value} className={styles["drop-down"]} type="text" />
            {
                isOptionListVisible &&
                <ul ref={domRef}>
                    <li>Lorep Ipsum</li>
                    <li>Lorep Ipsum</li>
                    <li>Lorep Ipsum</li>
                    <li>Lorep Ipsum</li>
                </ul>
            }
        </div>
    )
}