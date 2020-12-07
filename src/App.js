import "./index.css";
import React, { Component } from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import Form from "./components/Form/Form";

const initialStateItems = [
  {
    image: "https://miro.medium.com/max/3150/1*xxVEfOOAmIKHWOUloRKLhw.jpeg",
    name: "Dan Abramov",
    twitterLink: "https://twitter.com/dan_abramov",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    name: "Ryan Florence",
    description: "He is a guru in fronent world",
    twitterLink: "https://twitter.com/ryan_florence",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    name: "Michael Jackson",
    description: "Very helpfull guy. He is a React library teacher",
    twitterLink: "https://twitter.com/michael_jackson",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
    name: "Kent Codds",
    description: "He is expert in Javascript",
    twitterLink: "https://twitter.com/kent_codds",
  },
];

class App extends Component {
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

export default App;
