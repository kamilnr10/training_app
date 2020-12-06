import React from "react";
import "./Form.css";

const Form = ({ submitFn }) => {
  return (
    <>
      <div className="form__wrapper">
        <h2>Add new twitter account</h2>
        <form className="form__form" onSubmit={submitFn}>
          <div className="form__item">
            <input name="text" placeholder="name" id="name" />
            <label htmlFor="name"></label>
          </div>
          <div className="form__item">
            <input name="link" placeholder="link" id="link" />
            <label htmlFor="link"></label>
          </div>
          <div className="form__item">
            <input name="image" placeholder="image" id="image" />
            <label htmlFor="image"></label>
          </div>
          <div className="form__item">
            <textarea placeholder="description" id="description" />
          </div>
          <button type="submit" className="form__submit">
            add new item
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
