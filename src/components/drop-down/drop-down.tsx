import React, { useEffect, useRef, useState } from "react";
import styles from "./drop-down.module.css";
import {
  filterByOptionsCondition,
  isStringEmpty,
  isValueContained,
} from "../../shared/utils";
import { v4 as uuidv4 } from "uuid";

export type DropDownListProps = {
  options: Record<string, string>;
} & Partial<HTMLInputElement>;

export const DropDownList: React.FC<DropDownListProps> = ({
  name,
  options,
  placeholder,
}) => {
  const [value, setValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onFocusListener() {
      setIsVisible(true);
    }
    const input = domRef.current?.querySelector("input");
    input?.addEventListener("focus", onFocusListener);

    return () => input?.removeEventListener("focus", onFocusListener);
  }, []);

  const inputOnChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined,
  ) => {
    setValue(event?.target.value ?? "");
  };

  const inputSelect = (value: string) => {
    setValue(options[value]);
    setIsVisible(false);
  };

  const optionsEntries = Object.entries(options);

  const optionsItems = isStringEmpty(value)
    ? optionsEntries
    : isValueContained(optionsEntries, filterByOptionsCondition(value));

  return (
    <div ref={domRef} className={styles["drop-down-container"]}>
      <input
        name={name}
        placeholder={placeholder}
        onChange={inputOnChange}
        value={value}
        className={styles["drop-down"] + " " + styles["drop-down--text"]}
        type="text"
      />
      {isVisible && optionsItems.length > 0 && (
        <ul role="listbox" className={styles["drop-down__options"]}>
          {optionsItems.map(([key, value]) => (
            <li
              tabIndex={0}
              onClick={() => {
                inputSelect(key);
              }}
              onFocus={() => {
                debugger;
              }}
              id={uuidv4()}
              className={styles["drop-down__option"]}
            >
              <span className={styles["drop-down--text"]}>{value}</span>
            </li>
          ))}
        </ul>
      )}

      {isVisible && optionsItems.length <= 0 && (
        <ul className={styles["drop-down__options--no-match"]}>
          <li id={uuidv4()} className={styles["drop-down__option--no-match"]}>
            <span className={styles["drop-down--text"]}>
              No se encontrarón coincidencias
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};
