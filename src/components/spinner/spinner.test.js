import React from "react";
import Spinner from "./spinner.component";
import { shallow } from "enzyme";

it("renders Spinner component", () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
});
