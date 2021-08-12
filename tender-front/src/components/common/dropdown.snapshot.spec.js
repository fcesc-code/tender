import React from "react";
import renderer from "react-test-renderer";
import Dropdown from "./Dropdown.jsx";

const tree = renderer.create(<Dropdown />).toJSON();

describe("Dropdown component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
