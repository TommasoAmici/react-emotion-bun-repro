import styled from "@emotion/styled";
import React from "react";
import ReactDOM from "react-dom";

const StyledTitle = styled.h1`
  color: red;
`;

ReactDOM.render(
  <React.StrictMode>
    <StyledTitle>Hello world</StyledTitle>
  </React.StrictMode>,
  document.getElementById("root")
);
