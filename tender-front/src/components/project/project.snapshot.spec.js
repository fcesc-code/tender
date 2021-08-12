import React from "react";
import renderer from "react-test-renderer";
import Project from "./Project.jsx";

const tree = renderer.create(<Project />).toJSON();

describe("Project component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
