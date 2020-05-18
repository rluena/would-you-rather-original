import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ imgSrc }) => {
  return (
    <div className="avatar">
      <img className="avatar__img" src={imgSrc} alt="alt text" />
    </div>
  );
};

Avatar.defaultProps = {
  imgSrc: "", // TODO: Add a dummy avatart image
};

Avatar.propTypes = {
  imgSrc: PropTypes.string,
};

export default Avatar;
