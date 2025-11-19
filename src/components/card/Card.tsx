import React from "react";
import { Button } from "../button/button";
import styles from "./Card.module.css";
import { Link } from "../link/Link";
import characterLogo from "../../assets/images/spiderman.jpg";
import { Character } from "../../domain/Domain";

export interface CardProps {
  character: Character;
  onViewMoreEvent?: () => void;
  noDescriptionPlaceholder?: string;
}

export const Card: React.FC<CardProps> = ({
  character,
  onViewMoreEvent,
  noDescriptionPlaceholder = "",
}) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__header"]}>
        <div className={styles[""]}>
          <img className={styles["card__image"]} src={characterLogo} />
        </div>
        <div className={styles["card__detail"]}>
          <h3 className={styles["card__title"]}>{character.name}</h3>
          <p className={styles["card__description"]}>
            {character.description ?? noDescriptionPlaceholder}
          </p>
          <div className={styles["card__button"]}>
            <Button text="VIEW MORE" onClick={() => onViewMoreEvent?.()} />
          </div>
        </div>
      </div>
      <h4 className={styles["card__comig-title"]}>Related Comic</h4>
      {
        <ul className={styles["card__comics"]}>
          {character?.comics?.map((comic) => (
            <li className={styles["card__comic"]}>
              <Link text={comic} />
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
