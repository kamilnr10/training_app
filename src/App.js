import "./index.css";
import React, { Component } from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper";
import Form from "./components/Form/Form";

const initialStateItems = [
  {
    image:
      "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png",
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
    console.log(e.target[0].name);
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
