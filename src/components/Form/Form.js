import React from "react";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => {
  return (
    <>
      <div className={styles.form__wrapper}>
        <h2>Add new twitter account</h2>
        <form className={styles.form__form} onSubmit={submitFn}>
          <div className={styles.form__item}>
            <input name="text" placeholder="name" id="name" />
            <label htmlFor="name"></label>
          </div>
          <div className={styles.form__item}>
            <input name="link" placeholder="link" id="link" />
            <label htmlFor="link"></label>
          </div>
          <div className={styles.form__item}>
            <input name="image" placeholder="image" id="image" />
            <label htmlFor="image"></label>
          </div>
          <div className={styles.form__item}>
            <textarea placeholder="description" id="description" />
          </div>
          <button type="submit" className={styles.form__submit}>
            add new item
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
