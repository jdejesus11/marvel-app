import styles from "./Footer.module.css";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className={styles["footer-container"]}>
      <strong>Juan Carlos De Jesus - 2026</strong>
    </div>
  );
};
