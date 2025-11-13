import React from "react";
import { Button } from "../button/button";
import styles from "./Card.module.css";
import { Link } from "../link/Link";

interface Character {
  name: string;
  description?: string;
  imageURL?: string;
  comics?: string[];
}

export interface CardProps {
  character: Character;
}

export const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <div className={styles["card"]}>
      <h3 className={styles["card__title"]}>{character.name}</h3>
      <p className={styles["card__description"]}>
        {character.description ?? "No disponible"}
      </p>
      <div className={styles["card__button"]}>
        <Button text="VIEW MORE" onClick={() => {}} />
      </div>
      <h4>Related Comic</h4>
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
