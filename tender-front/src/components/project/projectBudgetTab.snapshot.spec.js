import React from "react";
import renderer from "react-test-renderer";
import ProjectBudgetTab from "./ProjectBudgetsTab.jsx";

const tree = renderer.create(<ProjectBudgetTab />).toJSON();

describe("ProjectBudgetTab component snapshot", () => {
  test("should match", () => {
    expect(tree).toMatchSnapshot();
  });
});
