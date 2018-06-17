import React from "react";
import ReactDOM from "react-dom";
import Book from "../../Book";

describe("Components - Book", () => {
  it("renders correctly", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Book />, div);
  });
});
