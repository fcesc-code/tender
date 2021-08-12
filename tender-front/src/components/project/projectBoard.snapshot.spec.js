import React from "react";
import renderer from "react-test-renderer";
import ProjectBoard from "./ProjectBoard.jsx";

const tree = renderer.create(<ProjectBoard />).toJSON();

describe("ProjectBoard component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
