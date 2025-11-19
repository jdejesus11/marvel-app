import { Character } from "../../domain/Domain";

export function sortBy(sortBy: string) {
  return function (firstValue: Character, secondValue: Character) {
    if (sortBy === "ASC") {
      if (firstValue.name < secondValue.name) {
        return 1;
      } else {
        return -1;
      }
    } else if (sortBy === "DESC") {
      if (firstValue.name < secondValue.name) {
        return -1;
      } else {
        return 1;
      }
    }

    return 0;
  };
}
