import React from "react";
import Input from "../Input/Input";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const Form = ({ submitFn }) => {
  return (
    <>
      <div className={styles.form__wrapper}>
        <Title>Add new twitter account</Title>
        <form
          autoComplete="off"
          className={styles.form__form}
          onSubmit={submitFn}
        >
          <Input name="name" label="name" maxLength={30} />
          <Input name="link" label="Twitter Link" />
          <Input name="image" label="Image" />
          <Input tag="textarea" name="description" label="Description" />
          <Button>add new item</Button>
        </form>
      </div>
    </>
  );
};

export default Form;
