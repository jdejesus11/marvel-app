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
import { Paginator } from "./components/paginator/Paginator";
import { Card } from "./components/card/Card";

export const App = () => {
  return (
    <>
      <Paginator pages={10} />
      <SearchInput
        onChange={function (text: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Card
        character={{
          name: "Sample",
          comics: ["Lorep ipsum Lorep ipsum", "Lorep Ipsum", "Lorep Ipsum Lorep ipsum","Lorep Ipsum ","Lorep Ipsum","Lorep Ipsum"],
          description:
            "Soldado mejorado con el suero del súper soldado, símbolo de valentía y justicia.",
        }}
      />
    </>
  );
};
