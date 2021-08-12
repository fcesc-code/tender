import React from "react";
import renderer from "react-test-renderer";
import LogoutButton from "./LogoutButton.jsx";

const tree = renderer.create(<LogoutButton />).toJSON();

describe("LogoutButton component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
