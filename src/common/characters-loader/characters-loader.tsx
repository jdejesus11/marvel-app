import React, { PropsWithChildren, useEffect, useState } from "react";

const fetchCharacters = () =>
  import("../../data/characters.json").then((data) => data.default);

interface CharactersLoaderProps {
  filterBy?: string;
}

export const CharactersLoader: React.FC<
  PropsWithChildren<CharactersLoaderProps>
> = ({ children }) => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      let data = await fetchCharacters();
      setCharacters(data.results);
    })();
  }, []);

  return (
    <li>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<any>(child, { characters });
        }

        return child;
      })}
    </li>
  );
};
