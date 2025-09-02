import React from "react";
import { Button } from "./components/button/button.jsx";
import { DropDownList } from "./components/drop-down/drop-down";
import { CloseButton } from "./components/close-button/close-button";

export const App = () => {
  return (
    <>
      <Button text="Acept" onClick={() => {}} />
      <DropDownList options={{ ASC: "Ascendent", DESC: "Descedent" }} />
      <CloseButton
        onClick={() => alert("Click")}
        imageProps={{ alt: "close button" }}
      />
    </>
  );
};
