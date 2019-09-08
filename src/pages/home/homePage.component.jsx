import React from "react";
import DateInput from "../../components/DateInput/DateInput.component";
import Photo from "../../components/Photo/Photo.component";
import Spinner from "../../components/spinner/spinner.component";

import { AppContainer, Content } from "./homePage.styles";
import { connect } from "react-redux";
import { selectCardIsLoading } from "../../redux/card/card.selectors";
import { createStructuredSelector } from "reselect";

const HomePage = ({ loading }) => (
  <AppContainer>
    <Content>
      <h1>NASA's Astronomy Picture of the Day</h1>
      <DateInput />
      {loading ? <Spinner /> : <Photo />}
    </Content>
  </AppContainer>
);
const mapStateToProps = createStructuredSelector({
  loading: selectCardIsLoading
});
export default connect(mapStateToProps)(HomePage);
