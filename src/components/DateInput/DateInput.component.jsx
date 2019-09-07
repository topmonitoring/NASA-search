import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SearchBar, CustomButton } from "./Dateinput.styles";
import { connect } from "react-redux";
import { setCurrentCard, setRandomCard } from "../../redux/card/card.actions";
import { selectCardDate } from "../../redux/card/card.selectors";

const DateInput = ({ date, setRandomCard, setCurrentCard }) => (
  <SearchBar>
    <span>
      Select a Date:
      <DatePicker selected={date} onChange={date => setCurrentCard(date)} />
    </span>{" "}
    <CustomButton onClick={() => setRandomCard()}>
      Generate Random photo
    </CustomButton>
  </SearchBar>
);
const mapStateToProps = state => ({
  date: selectCardDate(state)
});

const mapDispatchToProps = despatch => ({
  setCurrentCard: date => despatch(setCurrentCard(date)),
  setRandomCard: () => despatch(setRandomCard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateInput);
