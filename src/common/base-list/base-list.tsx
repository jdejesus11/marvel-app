import React from "react";
import { ListItemCard } from "../../containers/lists/list-item-card/list-item-card";

type ListItemType<K extends typeof ListItemCard> = K;

interface BaseListProp<Q extends any[], ListItemType> {
  data: Q;
  Item: ListItemType;
}

export const BaseList: React.FC<BaseListProp<any[], typeof ListItemCard>> = ({
  data,
  Item,
}) => {
  return (
    <>
      {data?.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </>
  );
};
