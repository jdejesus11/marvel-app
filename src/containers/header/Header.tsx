import styles from "./Header.module.css";
import React from "react";
import { SearchInput } from "../../components/search-input/search-input";
import marvelLogo from "../../assets/images/marvel-logo.png";

export const Header: React.FC = () => {
  return (
    <div className={styles["header-container"]}>
      <img className={styles["header-logo"]} src={marvelLogo} />
      <SearchInput
        placehoder="Search characters..."
        onChange={function (text: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};
