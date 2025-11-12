import React from "react";
import styles from "./search-input.module.css";

export interface SearchInputProps {
  onChange:(text: string) => void,
  placehoder?: string
}

export const SearchInput: React.FC<SearchInputProps> = ({onChange, placehoder = ""}) => {
  return (
    <div className={styles["search-input__container"]}>
      <input placeholder={placehoder} onChange={(e) => onChange(e.target.value)}  className={styles["search-input"]} type="text" />
    </div>
  );
};
