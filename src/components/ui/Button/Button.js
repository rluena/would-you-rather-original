import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, modifiers, ...settings }) => {
  return (
    <button
      type="button"
      className={`button ${
        modifiers &&
        modifiers.map((modifier) => `button--${modifier}`).join(" ")
      }`}
      {...settings}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  modifiers: [],
};

Button.propTypes = {
  modifiers: PropTypes.array,
};

export default Button;
