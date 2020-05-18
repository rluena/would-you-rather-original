import React from "react";
import "./text.scss";

const Text = ({ children }) => (
  <p className="text text-paragraph">{children}</p>
);

Text.h1 = ({ children }) => <h1 className="text text-h1">{children}</h1>;
Text.h2 = ({ children }) => <h2 className="text text-h2">{children}</h2>;
Text.h3 = ({ children }) => <h3 className="text text-h3">{children}</h3>;
Text.h4 = ({ children }) => <h4 className="text text-h4">{children}</h4>;
Text.h5 = ({ children }) => <h5 className="text text-h5">{children}</h5>;
Text.h6 = ({ children }) => <h6 className="text text-h6">{children}</h6>;

export default Text;
