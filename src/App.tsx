import React, {useReducer} from "react";
import { Card } from "./components/card/Card";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
import { Header } from "./containers/header/Header";
import { Footer } from "./containers/footer/Footer";
import styles from "./App.module.css";
import charactersIcon from "./assets/images/characters.png";
import favouritesIcon from "./assets/images/favourites.png";
import { DropDownList } from "./components/drop-down/drop-down";
import {BookCard} from "./components/book-card/BookCard"
import { Character } from "./domain/Domain";
import {Paginator} from "./components/paginator/Paginator"
import {sortBy} from "./common/utils/uitils"
import {Reducer} from "./common/reducers/reducers"
import {useFetchCharacters} from "./common/hooks/useFetchCharacters"


export const App = () => {

  const { characters, sortBy, dispatch } = useFetchCharacters();

  return (
    <AppLayout Header={Header} Footer={Footer}>
      <div className={styles["body"]}>
        <div className={styles["body__content"]}>
          <div className={styles["characters"]}>
            <div className={styles["characters__body"]}>
              <img className={styles["characters__icon"]} src={charactersIcon} />
               <h2>Characters</h2>
            </div>
            <DropDownList
              options={{ ASC: "Ascendent", DESC: "Descedent" }}
              placeholder="Sort by"
              onChange={(option?: string) => {
                dispatch({ type:"SORTBY" , payload: option })
              }}
              currentValue={sortBy}
            />
          </div>
          <section className={styles["content"]}>
            {
              characters.map((item) => (
<Card
              character={item}
            />
              ))
            }
          </section>
          <div>
            <Paginator pages={characters.length % 5} />
          </div>
        </div>
        <section className={styles["books"]}>
          <div className={styles["favourites__container"]} >
            <img src={favouritesIcon}  />
            <span>My Favourites</span>
          </div>
          <ul className={styles["favourites__books-list"]}>
            <li>
              <BookCard book_image_url="https://picsum.photos/id/237/200/300" description="lorep ipsum" />
            </li>
             <li>
              <BookCard book_image_url="https://picsum.photos/id/237/200/300" description="lorep ipsum" />
            </li>
            <li>
              <BookCard book_image_url="https://picsum.photos/id/237/200/300" description="lorep ipsum" />
            </li>
          </ul>
        </section>
      </div>
    </AppLayout>
  );
};
