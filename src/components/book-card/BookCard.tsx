import React from "react";
import btnClose from "../../assets/images/btn-delete.png";
import styles from "./BookCard.module.css";

interface BookCard {
  book_image_url: string;
  description: string;
  onDelete?: (book_id: string) => void;
}

export const BookCard: React.FC<BookCard> = ({
  book_image_url,
  description,
  onDelete,
}) => {
  return (
    <div className={styles["bookcard__container"]}>
      <img src={book_image_url} />
      <span>{description}</span>
      <button
        className={styles["delete-button"]}
        onClick={() => onDelete?.("1")}
      >
        <img src={btnClose} alt="" />
      </button>
    </div>
  );
};
