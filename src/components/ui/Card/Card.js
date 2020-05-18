import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import Avatar from "../Avatar";
import Button from "../Button";
import "./card.scss";

const Card = ({ heading, children }) => {
  return (
    <div className="card">
      <div className="card__header">
        <Text type="h2" className="card__heading">
          {heading}
        </Text>
      </div>

      <div className="main">{children}</div>
    </div>
  );
};

Card.defaultProps = {
  heading: "",
};

Card.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.Poll = ({ onClick, heading }) => {
  return (
    <Card heading={heading}>
      <div className="card__left-content">
        <Avatar src="" alt="" />
      </div>
      <div className="card__right-content">
        <Text type="title">Would you rather</Text>
        <div className="card__section">
          <Text type="paragraph">...be...</Text>
          <div className="card__buttons">
            <Button primary wide onClick={onClick}>
              Button
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

Card.Poll.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Card.Score = ({ imgSrc, heading }) => {
  return (
    <Card heading={heading}>
      <div className="card__left-content">
        <Avatar src={imgSrc} alt={heading} />
      </div>
      <div className="card__right-content">
        <div className="card__question-box">
          <h3 className="heading-3">
            Created questions <span className="card__title-number">10</span>{" "}
          </h3>
          <hr className="devider devider__horizontal" />
          <h3 className="heading-3">
            Created answers <span className="card__title-number">10</span>{" "}
          </h3>
        </div>
        <div className="score-box" value={5} text="Some text" />
      </div>
    </Card>
  );
};

Card.Score.defaultProps = {
  imgSrc: "",
};

Card.Score.propTypes = {
  heading: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};

export default Card;
