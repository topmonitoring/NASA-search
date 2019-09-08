import React, { useEffect } from "react";
import HomePage from "./pages/home/homePage.component";

import { connect } from "react-redux";
import { setInitialCard } from "./redux/card/card.actions";
import { GlobalStyle } from "./global.styles";

const App = ({ setInitialCard }) => {
  useEffect(() => {
    setInitialCard();
  }, [setInitialCard]);

  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setInitialCard: () => dispatch(setInitialCard())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
