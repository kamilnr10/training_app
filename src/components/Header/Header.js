import React from "react";
import Button from "../Button/Button";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/logo.svg";

const Header = ({ openModalFn }) => {
  return (
    <header className={styles.wrapper}>
      <img src={logoImage} alt="logo" />
      <HeaderNavigation />
      <Button onClick={openModalFn} secondary>
        new item
      </Button>
    </header>
  );
};

export default Header;
