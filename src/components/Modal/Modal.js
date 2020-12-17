import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";

const Modal = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
    </div>
  );
};

export default Modal;
