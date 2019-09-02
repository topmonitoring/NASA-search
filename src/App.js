import React, { Component } from "react";
import DateInput from "./components/DateInput/DateInput.component";
import Photo from "./components/Photo/Photo.component";
import moment from "moment";
import momentRandom from "moment-random";
import { AppContainer, Content } from "./App.styles";
import { GlobalStyle } from "./global.styles";

class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
    )
      .then(response => response.json())
      .then(json => this.setState({ photo: json }));
  }

  changeDate = dateFromInput => {
    const formatedInput = moment(dateFromInput).format("YYYY-MM-DD");
    this.setState({ date: dateFromInput });
    this.getPhoto(formatedInput);
  };
  getPhoto = date => {
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
    )
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };
  handleClick = () => {
    let randomDate = momentRandom(moment(), moment("06-16-1995", "MM-DD-YYYY"));
    this.setState({ randomDate });
    this.getPhoto(moment(randomDate).format("YYYY-MM-DD"));
    console.log(moment(randomDate).format("YYYY-MM-DD"));
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Content>
            <h1>NASA's Astronomy Picture of the Day</h1>
            <DateInput
              changeDate={this.changeDate}
              date={this.state.date}
              handleClick={this.handleClick}
            />
            <Photo photo={this.state.photo} />
          </Content>
        </AppContainer>
      </>
    );
  }
}
export default App;
