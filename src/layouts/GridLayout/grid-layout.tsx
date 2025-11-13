import React from "react";
import styles from "./grid-layout.module.css";

interface GridLayoutProps {}

export const GridLayout: React.FC<React.PropsWithChildren<GridLayoutProps>> = ({
  children,
}) => {
  return <div className={styles["grid"]}>{children}</div>;
};
