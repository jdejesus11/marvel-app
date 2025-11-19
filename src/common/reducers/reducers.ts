import { ActionTyoes, Action, State } from "../../domain/Domain";

export const Reducer = (state: State, action: Action): State => {
  if (action.type === ActionTyoes.SORTBY) {
    return {
      ...state,
      sortBy: action.payload,
    };
  }

  return state;
};
