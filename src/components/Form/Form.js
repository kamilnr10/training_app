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
          {/* <div className={styles.form__item}>
            <input name="text" placeholder="name" id="name" required />
            <label htmlFor="name"></label>
          </div>
          <div className={styles.form__item}>
            <input name="link" placeholder="link" id="link" required />
            <label htmlFor="link"></label>
          </div>
          <div className={styles.form__item}>
            <input name="image" placeholder="image" id="image" />
            <label htmlFor="image"></label>
          </div>
          <div className={styles.form__item}>
            <textarea placeholder="description" id="description" required />
          </div> */}
          <Button>add new item</Button>
          {/* <button type="submit" className={styles.form__submit}>
            add new item
          </button> */}
        </form>
      </div>
    </>
  );
};

export default Form;
