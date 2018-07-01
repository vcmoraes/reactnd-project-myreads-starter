import React from "react";
import ReactDOM from "react-dom";
import ListBook from "../../ListBook";

describe("Components - ListBook", () => {
  it("renders correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListBook />, div);
  });
});
