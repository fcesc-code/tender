import React from "react";
import renderer from "react-test-renderer";
import UserInfo from "./Userinfo.jsx";

const tree = renderer.create(<UserInfo />).toJSON();

describe("UserInfo component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
