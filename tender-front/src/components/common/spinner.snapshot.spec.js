import React from "react";
import renderer from "react-test-renderer";
import Spinner from "./Spinner.jsx";

const tree = renderer.create(<Spinner />).toJSON();

describe("Spinner component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
