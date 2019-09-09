import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchBar, CustomButton } from "./Dateinput.styles";
const DateInput = props => (
  <SearchBar>
    <span>
      Select a Date:
      <DatePicker selected={props.date} onChange={props.checkIfDateIsValid} />
    </span>{" "}
    <CustomButton onClick={props.genarateRandomDate}>
      Generate Random photo
    </CustomButton>
  </SearchBar>
);
export default DateInput;
