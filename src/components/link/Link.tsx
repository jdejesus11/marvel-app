import React from "react";
import styles from "./Link.module.css";

interface LinkProps {
  text: string;
}

export const Link: React.FC<LinkProps> = ({ text }) => {
  return (
    <a className={styles["link"]} href="">
      {text}
    </a>
  );
};
