import React from "react";
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

Card.Poll = ({ onClick }) => {
  return (
    <Card>
      <div className="card__left-content">
        <Avatar src="" alt="" />
      </div>
      <div className="card__right-content">
        <Text type="title">Would you rather</Text>
      </div>
      <div className="card__section">
        <Text type="paragraph">...be...</Text>
        <div className="card__buttons">
          <Button primary wide onClick={onClick}>
            Button
          </Button>
        </div>
      </div>
    </Card>
  );
};

Card.Score = () => {
  return <h2>Something else</h2>;
};

export default Card;
