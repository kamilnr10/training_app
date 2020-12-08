import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, label, maxLength }) => {
  return (
    <div className={styles.form__item}>
      <Tag
        className={styles.form__input}
        name={name}
        type="text"
        id={name}
        required
        maxLength={maxLength}
        placeholder=" "
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  tag: "input",
  maxLength: 200,
};

export default Input;
