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
import { Character } from "./domain/Character";
import {Paginator} from "./components/paginator/Paginator"


const data =  await import("./data/characters.json");

type SortBy = "ASC" | "DESC";

enum ActionTyoes {
  SORTBY = "SORTBY"
}

interface State {
  sortBy?: SortBy,
  characters: Character[]
}

interface Action {
  type: string,
  payload: any
}

const Reducer = (state:State, action:Action):State => {
  if (action.type === ActionTyoes.SORTBY){
      return {
        ...state,
        sortBy: action.payload
      }
  }

  return state;
}

export const App = () => {

  const [state, dispatch] = useReducer(Reducer, { sortBy: "ASC", characters: [] })

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
              currentValue={state.sortBy}
            />
          </div>
          <section className={styles["content"]}>
            {
              data?.default?.results?.sort((a,b) => {
                if (state.sortBy === "ASC"){
                   if (a.name > b.name){
                    return 1
                   }
                }

                return -1;
              }).map((item) => (
<Card
              character={item}
            />
              ))
            }
          </section>
          <div>
            <Paginator pages={data.default.results.length % 5} />
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
