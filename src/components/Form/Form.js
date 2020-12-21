import React, { Component } from "react";
import Input from "../Input/Input";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const descriptions = {
  twitter: "favourite Twitter account",
  article: "Article",
  note: "Note",
};

class Form extends Component {
  state = {
    activeOption: types.twitter,
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    return (
      <div className={styles.form__wrapper}>
        <Title>Add new {descriptions[this.state.activeOption]}</Title>
        <form
          autoComplete="off"
          className={styles.form__form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.form__radio__btn__wrapper}>
            <input
              id={types.twitter}
              type="radio"
              checked={this.state.activeOption === types.twitter}
              onChange={() => this.handleRadioButtonChange(types.twitter)}
            />
            <label for={types.twitter}>Twitter</label>
            <input
              id={types.article}
              type="radio"
              checked={this.state.activeOption === types.article}
              onChange={() => this.handleRadioButtonChange(types.article)}
            />
            <label for={types.article}>Article</label>
            <input
              id={types.note}
              type="radio"
              checked={this.state.activeOption === types.note}
              onChange={() => this.handleRadioButtonChange(types.note)}
            />
            <label for={types.note}>Note</label>
          </div>
          <Input name="name" label="name" maxLength={30} />
          <Input name="link" label="Twitter Link" />
          <Input name="image" label="Image" />
          <Input tag="textarea" name="description" label="Description" />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
