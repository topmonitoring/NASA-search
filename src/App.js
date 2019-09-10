import React, { useEffect } from "react";
import HomePage from "./pages/home/homePage.component";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { fetchCardAsync } from "./redux/card/card.actions";
import { selectCardDate } from "./redux/card/card.selectors";
import { GlobalStyle } from "./global.styles";

export const App = ({ date, fetchCardAsync }) => {
  useEffect(() => {
    fetchCardAsync(date);
  }, []);

  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  date: selectCardDate
});

const mapDispatchToProps = dispatch => ({
  fetchCardAsync: date => dispatch(fetchCardAsync(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
