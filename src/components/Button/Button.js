import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, href }) => {
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.form__submit}
        >
          {children}
        </a>
      ) : (
        <button type="submit" className={styles.form__submit}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
