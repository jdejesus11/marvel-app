import React from "react";
import { Button } from "./components/button/button.jsx";
import { DropDownList } from "./components/drop-down/drop-down";
import { CloseButton } from "./components/close-button/close-button";
import { SearchInput } from "./components/search-input/search-input";
import { SplitLayout } from "./layouts/SplitLayout/split-layout";
import { GridLayout } from "./layouts/GridLayout/grid-layout";
import { BaseList } from "./common/base-list/base-list";
import { ListItemCard } from "./containers/lists/list-item-card/list-item-card";
import { CharactersLoader } from "./common/characters-loader/characters-loader";
import { CharactersCardList } from "./containers/characters-card-list/CharactersCardList";

export const LeftSection = () => <p>Left</p>;

export const RigthSection = () => <p>Right</p>;

const data = [
  {
    item: {
      title: "Iron Man",
      description:
        "Tony Stark, un genio multimillonario, crea una armadura avanzada para convertirse en el superhéroe Iron Man y proteger al mundo.",
    },
  },
  {
    item: {
      title: "Captain America",
      description:
        "Steve Rogers, un soldado de la Segunda Guerra Mundial, recibe el suero del súper soldado y se convierte en el símbolo de la justicia: Capitán América.",
    },
  },
  {
    item: {
      title: "Thor",
      description:
        "El dios del trueno de Asgard, empuña el martillo Mjolnir y protege tanto su reino como la Tierra de fuerzas cósmicas.",
    },
  },
  {
    item: {
      title: "Hulk",
      description:
        "Bruce Banner se transforma en Hulk tras exponerse a radiación gamma; posee una fuerza y resistencia sobrehumanas.",
    },
  },
  {
    item: {
      title: "Black Widow",
      description:
        "Natasha Romanoff, una espía rusa entrenada por la KGB, se une a los Vengadores para redimirse de su pasado.",
    },
  },
  {
    item: {
      title: "Hawkeye",
      description:
        "Clint Barton, maestro arquero y exagente de S.H.I.E.L.D., es un miembro clave de los Vengadores.",
    },
  },
  {
    item: {
      title: "Spider-Man",
      description:
        "Peter Parker, un joven neoyorquino picado por una araña radiactiva, obtiene poderes arácnidos y los usa para proteger su ciudad.",
    },
  },
  {
    item: {
      title: "Black Panther",
      description:
        "T'Challa, rey de Wakanda, utiliza la tecnología avanzada de su nación y la fuerza del Pantera Negra para defender su pueblo.",
    },
  },
  {
    item: {
      title: "Doctor Strange",
      description:
        "Stephen Strange, un cirujano brillante que tras un accidente se convierte en el Hechicero Supremo y guardián de la realidad.",
    },
  },
  {
    item: {
      title: "Scarlet Witch",
      description:
        "Wanda Maximoff, capaz de manipular la realidad y la energía del caos, es una de las heroínas más poderosas del universo Marvel.",
    },
  },
  {
    item: {
      title: "Vision",
      description:
        "Un androide creado con inteligencia artificial y la Gema de la Mente, que lucha por comprender la humanidad.",
    },
  },
  {
    item: {
      title: "Ant-Man",
      description:
        "Scott Lang utiliza un traje que le permite reducir su tamaño y aumentar su fuerza, convirtiéndose en el héroe Ant-Man.",
    },
  },
  {
    item: {
      title: "Wasp",
      description:
        "Hope van Dyne, hija de Hank Pym, porta el traje de la Avispa y lucha junto a Ant-Man con habilidades de vuelo y combate.",
    },
  },
  {
    item: {
      title: "Captain Marvel",
      description:
        "Carol Danvers, una ex piloto de la Fuerza Aérea, obtiene poderes cósmicos tras una explosión que la transforma en la poderosa Capitana Marvel.",
    },
  },
  {
    item: {
      title: "Falcon",
      description:
        "Sam Wilson, veterano del ejército y aliado del Capitán América, utiliza un traje con alas mecánicas para volar y luchar contra el crimen.",
    },
  },
  {
    item: {
      title: "Winter Soldier",
      description:
        "Bucky Barnes, antiguo amigo de Steve Rogers, es capturado y convertido en un asesino cibernético antes de redimirse como héroe.",
    },
  },
  {
    item: {
      title: "Loki",
      description:
        "El dios del engaño y hermano adoptivo de Thor, un maestro de la manipulación que a veces ayuda y otras traiciona a los héroes.",
    },
  },
  {
    item: {
      title: "Thanos",
      description:
        "El Titán loco que busca las Gemas del Infinito para equilibrar el universo eliminando a la mitad de toda vida.",
    },
  },
  {
    item: {
      title: "Nick Fury",
      description:
        "El director de S.H.I.E.L.D. que reúne a los Vengadores para proteger la Tierra de amenazas globales.",
    },
  },
  {
    item: {
      title: "Deadpool",
      description:
        "Wade Wilson, un mercenario con un sentido del humor retorcido y un factor de curación acelerado, rompe la cuarta pared constantemente.",
    },
  },
];

const Item = () => {
  return <>Hola</>;
};

export const App = () => {
  return (
    <>
      <Button text="Acept" onClick={() => {}} />
      <DropDownList
        options={{ ASC: "Ascendent", DESC: "Descedent" }}
        placeholder="Sort by"
      />
      <CloseButton
        onClick={() => alert("Click")}
        imageProps={{ alt: "close button" }}
      />
      <SearchInput />
      <SplitLayout LeftSection={LeftSection} RightSection={RigthSection} />
      <GridLayout>
        {[1, 2, 3, 4].map((item) => (
          <p>{item}</p>
        ))}
      </GridLayout>

      <BaseList data={data} Item={ListItemCard} />
      <CharactersLoader>
        <CharactersCardList />
      </CharactersLoader>
    </>
  );
};
