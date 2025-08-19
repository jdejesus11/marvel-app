import { pokedex } from "./pokedex.js";

{
  const container = document.querySelector("#container");
  const ul = document.createElement("ul");
  for (let pokemon of pokedex) {
     const li = document.createElement("li");
     li.innerText = `Id:${pokemon.id.substring(0, 4)} - Name: ${pokemon.name}`
     ul.appendChild(li)
  }
  container?.appendChild(ul)
}

{
  for (let pokemon of pokedex) {
    console.log(`Id:${pokemon.id.substring(0, 4)} - Name: ${pokemon.name}`);
  }
}

{
   import('./pokemon-cards.js').then(({cards}) => {
      console.log(cards)
   })
}
