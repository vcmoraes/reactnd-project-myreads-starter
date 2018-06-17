import React from "react";
import ReactDOM from "react-dom";
import Home from "../../Home";

describe("Container - Home", () => {
  it("renders correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
  });
});
