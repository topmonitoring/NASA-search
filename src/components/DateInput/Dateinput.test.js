import React from "react";
import { shallow } from "enzyme";
import { DateInput } from "./DateInput.component";

let wrapper;
beforeEach(() => {
  const mockProps = {
    date: "22-11-2018",
    setRandomCard: jest.fn(),
    setCurrentCard: jest.fn()
  };
  wrapper = shallow(<DateInput store={mockProps} />);
});

it("renders DateInput component", () => {
  expect(wrapper).toMatchSnapshot();
});
