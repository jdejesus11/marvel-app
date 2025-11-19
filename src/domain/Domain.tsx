export enum SortByTypes {
   ASC = "ASC",
   DESC = "DESC"
}

export interface State {
  sortBy: SortByTypes;
  characters: Character[];
  favouriteComics: Comic[]
}

export enum ActionTyoes {
  SORTBY = "SORTBY",
  ADD_CHARACTERS = ""
}

export interface Action {
  type: string;
  payload: any;
}

export interface Character {
  name: string;
  description?: string;
  imageURL?: string;
  comics?: string[];
}

export interface Comic {
  image_url?: string,
  description: string
}
