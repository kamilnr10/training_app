import React, { Component } from "react";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import Form from "../../components/Form/Form";
import TwitterView from "../TwitterView/TwitterView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import "./index.css";

const initialStateItems = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    name: "Kent Codds",
    description: "He is expert in Javascript",
    twitterLink: "https://twitter.com/kent_codds",
  },
];

class Root extends Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();

    console.log(e.target[0].name);
    console.log(e.target[1].name);
    console.log(e.target[2].name);
    console.log(e.target[3].name);
  };

  render() {
    return (
      <div className="App">
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default Root;
