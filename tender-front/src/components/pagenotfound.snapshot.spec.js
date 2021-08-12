import React from "react";
import renderer from "react-test-renderer";
import PageNotFound from "./PageNotFound.jsx";

const tree = renderer.create(<PageNotFound />).toJSON();

describe("PageNotFound component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
