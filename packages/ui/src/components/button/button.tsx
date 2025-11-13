import React, { HTMLAttributes } from "react";
import styles from "./button.module.css";

export type ButtonProps = {
  text: string;
  onClick: () => void;
} & Omit<HTMLAttributes<HTMLButtonElement>, "className">;

export const Button: React.FC<ButtonProps> = ({ text, onClick, ...props }) => {
  return (
    <button onClick={onClick} className={styles.button} {...props}>
      {text}
    </button>
  );
};
