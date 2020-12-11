import React from "react";
import styles from "./ListItem.module.scss";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import Title from "../../Title/Title";
// import danAbramovImage from "../../../assets/images/danabramov.jpg";

const ListItem = ({ name, description, image, twitterLink }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.listItem__wrapper}>
      <ImageTag
        src={image}
        className={image ? styles.listItem__image : styles.imageNone}
        alt="avatar"
      />
      <div>
        <Title>{name}</Title>
        {/* <h2 className={styles.listItem__name}>{name}</h2> */}
        <p className={styles.listItem__description}>{description}</p>
        <Button href={twitterLink}>visit twitter page</Button>
        {/* <a
          href={twitterLink}
          target="_blank"
          rel="noreferrer"
          className={styles.listItem__button}
        >
          visit twitter page
        </a> */}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
  image: null,
  description: "One of the React creators",
};
export default ListItem;
