import React from "react";
import PropTypes from "prop-types";
import "./avart.scss";

const Avatar = ({ src }) => {
  return (
    <div className="avatar">
      <img className="avatar__img" src={src} alt="alt text" />
    </div>
  );
};

Avatar.defaultProps = {
  src: "", // TODO: Add a dummy avatart image
};

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
