import React from "react";
import { App } from "./App";
import { shallow } from "enzyme";

//TODO add store mock
let wrapper;
beforeEach(() => {
  const mockProps = {
    date: "22-11-2018",
    fetchCardAsync: jest.fn()
  };
  wrapper = shallow(<App {...mockProps} />);
});

it("renders App component", () => {
  expect(wrapper).toMatchSnapshot();
});
