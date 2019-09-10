import React from "react";
import { Photo } from "./Photo.component";
import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  const mockProps = {
    date: "22-11-2018",
    title: "title",
    url: "",
    explanation: ""
  };
  wrapper = shallow(<Photo data={mockProps} />);
});

it("renders Photo component", () => {
  expect(wrapper).toMatchSnapshot();
});
