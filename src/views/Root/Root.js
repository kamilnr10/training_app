import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
import Form from "../../components/Form/Form";
import TwitterView from "../TwitterView/TwitterView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import "../../index.css";

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

    // console.log(e.target[0].name);
    // console.log(e.target[1].name);
    // console.log(e.target[2].name);
    // console.log(e.target[3].name);
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <h1>hello world</h1>
          <Switch>
            {/* <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} /> */}
            <Route exact path="/" component={TwitterView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          <Modal />
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
