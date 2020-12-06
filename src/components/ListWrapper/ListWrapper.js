import React from "react";
import ListItem from "./ListItem/ListItem";
import "./ListWrapper.css";
// import { twitterAccounts } from "../../data/twitterAccounts";

const ListWrapper = (props) => {
  return (
    <ul className="listWrapper__wrapper">
      {props.items.map((item) => (
        <ListItem {...item} key={item.name} />
      ))}
    </ul>
  );
};

export default ListWrapper;
