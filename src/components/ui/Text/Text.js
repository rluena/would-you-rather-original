import React from "react";
import "./text.scss";

const Text = (text) => <p className="paragraph">{text}</p>;

Text.h1 = (text) => <h1 className="heading1">{text}</h1>;
Text.h2 = (text) => <h2 className="heading2">{text}</h2>;
Text.h3 = (text) => <h3 className="heading3">{text}</h3>;
Text.h4 = (text) => <h4 className="heading4">{text}</h4>;
Text.h5 = (text) => <h5 className="heading5">{text}</h5>;
Text.h6 = (text) => <h6 className="heading6">{text}</h6>;

export default Text;
