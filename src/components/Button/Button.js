import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, href, secondary, ...props }) => {
  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    <>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className={buttonClass}>
          {children}
        </a>
      ) : (
        <button type="submit" className={buttonClass} {...props}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
