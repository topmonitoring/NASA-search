import React from "react";
import { shallow } from "enzyme";
import { it } from "date-fns/locale";
import DateInput from "./DateInput.component";

it("renders DateInput component", done => {
  const props = {
    date: 22,
    changeDate: "",
    handleCheck: ""
  };
  shallow(expect(<DateInput props={props} />));
  done();
});
