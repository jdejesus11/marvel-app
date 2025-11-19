import React, {useReducer} from "react"
import { Character, Comic, SortByTypes } from "../../domain/Domain";
import {sortBy} from "../utils/uitils"
import {Reducer} from "../reducers/reducers";
const data = await import("../../data/characters.json");


interface UseFetchCharactersType {
  characters: Character[];
  sortBy: string,
  dispatch: React.ActionDispatch<any>,
  favouriteComics?: Comic[]
}

export function useFetchCharacters(): UseFetchCharactersType {
  const [state, dispatch] = useReducer(Reducer, { sortBy: SortByTypes.ASC, characters: data?.default?.results ?? [],favouriteComics: [] })
  
  const characters = state.characters.sort(sortBy(state.sortBy ?? "ASC"))

  return {
    characters,
    sortBy: state.sortBy,
    dispatch,
    favouriteComics: state.favouriteComics
  };
}
