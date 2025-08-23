import React, { SyntheticEvent, useRef, useState } from 'react';
import styles from "./drop-down.module.css"

export const DropDownList:React.FC = () => {

    const [value, setValue] = useState<string>("");
    const domRef = useRef(null)

    const inputOnChange = (event:React.ChangeEvent<HTMLInputElement> | undefined) => {
        setValue(event?.target.value ?? "");
    }
    

    return (
        <div>
            <input onChange={inputOnChange} value={value} className={styles["drop-down"]} type="text" />
            {
                value.length > 0 && value.match(/\S/)?.length &&
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