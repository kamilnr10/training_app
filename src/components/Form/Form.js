import React from "react";
import Input from "../Input/Input";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => {
  return (
    <>
      <div className={styles.form__wrapper}>
        <h2>Add new twitter account</h2>
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
          <button type="submit" className={styles.form__submit}>
            add new item
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
