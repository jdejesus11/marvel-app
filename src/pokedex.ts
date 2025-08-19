import { Pokemon, PokemonType } from "@jdejesus11/types";
import { v4 as uuidv4 } from "uuid";

export let pokedex: Pokemon[] = [
  {
    id: uuidv4(),
    name: "Bulbasur",
    descripcion:
      "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.",
    high: {
      value: 0.5,
      measurement: "Meters",
    },
    type: PokemonType.Hierva,
    weight: {
      value: 9,
      measurement: "Kg",
    },
  },
  {
    id: uuidv4(),
    name: "Squartle",
    descripcion:
      "Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca.",
    type: PokemonType.Hielo,
    high: {
      value: 0.5,
      measurement: "Meters",
    },
    weight: {
      value: 9,
      measurement: "Kg",
    },
  },
  {
    id: uuidv4(),
    name: "Charmander",
    descripcion:
      "La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue.",
    type: PokemonType.Hielo,
    high: {
      value: 0.6,
      measurement: "Meters",
    },
    weight: {
      value: 8.5,
      measurement: "Kg",
    },
  },
  {
    id: uuidv4(),
    name: "Weedle",
    descripcion:
      "El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques y praderas.",
    type: PokemonType.Hierva,
    high: {
      value: 0.3,
      measurement: "Meters",
    },
    weight: {
      value: 4.5,
      measurement: "Kg",
    },
  },
];
