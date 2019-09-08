import React from "react";
import { shallow } from "enzyme";
import DateInput from "./DateInput.component";

it("renders DateInput component", () => {
  expect(shallow(<DateInput />)).toMatchSnapshot();
});
