/// <reference types="vite/client" />
import React from "react";
import icon from "../../../src/assets/images/btn-close.png";
import styles from "./close-button.module.css";

export interface CloseButtonProps {
  onClick?: () => void;
  imageProps?: Partial<HTMLImageElement>;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  imageProps,
}) => {
  return (
    <button className={styles["close-button"]} onClick={onClick}>
      <img
        className={styles["close-button__image"]}
        src={icon}
        alt={imageProps?.alt}
      />
    </button>
  );
};
