import React, { useRef, useState } from 'react';
import styles from "./drop-down.module.css"
import {isStringEmpty}  from "../../shared/utils"

export type DropDownListProps = Partial<HTMLInputElement>

export const DropDownList:React.FC<DropDownListProps> = ({name}) => {

    const [value, setValue] = useState<string>("");
    const [option, setOption] = useState<string | null>("");
    const domRef = useRef(null)

    const inputOnChange = (event:React.ChangeEvent<HTMLInputElement> | undefined) => {
        setValue(event?.target.value ?? "");
    }

    const isOptionListVisible = value.length > 0 && !isStringEmpty(value);
    
    return (
        <div className={styles["drop-down-container"]}>
            <input name={name} onChange={inputOnChange} value={value} className={styles["drop-down"]} type="text" />
            {
                isOptionListVisible &&
                <ul ref={domRef} className={styles["drop-down__options"]}>
                    <li className={styles["drop-down__option"]}>Lorep Ipsum</li>
                    <li className={styles["drop-down__option"]}>Lorep Ipsum</li>
                    <li className={styles["drop-down__option"]}>Lorep Ipsum</li>
                    <li className={styles["drop-down__option"]}>Lorep Ipsum</li>
                </ul>
            }
        </div>
    )
}