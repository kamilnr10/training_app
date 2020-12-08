import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, label, maxLength }) => {
  return (
    <div className={styles.form__item}>
      <Tag name={name} type="text" id={name} required maxLength="30" />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
};

Input.defaultProps = {
  tag: "input",
};

export default Input;
