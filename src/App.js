import React, { useState, useEffect } from "react";
import DateInput from "./components/DateInput/DateInput.component";
import Photo from "./components/Photo/Photo.component";
import moment from "moment";
import momentRandom from "moment-random";
import { AppContainer, Content } from "./App.styles";
import { GlobalStyle } from "./global.styles";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setIsLoading(true);
    console.log(isLoading);
    try {
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
      )
        .then(response => response.json())
        .then(json => setPhoto(json));
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
    console.log(isLoading);
  }, [isLoading]);

  const changeDate = dateFromInput => {
    const formatedInput = moment(dateFromInput).format("YYYY-MM-DD");
    setDate(dateFromInput);
    getPhoto(formatedInput);
  };

  const getPhoto = date => {
    try {
      fetch(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
      )
        .then(response => response.json())
        .then(photoData => setPhoto(photoData));
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    let randomDate = momentRandom(moment(), moment("06-16-1995", "MM-DD-YYYY"));
    //setDate(randomDate);
    getPhoto(moment(randomDate).format("YYYY-MM-DD"));
  };
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Content>
          <h1>NASA's Astronomy Picture of the Day</h1>
          <DateInput
            changeDate={changeDate}
            date={date}
            handleClick={handleClick}
          />
          <Photo photo={photo} />
        </Content>
      </AppContainer>
    </>
  );
};
export default App;
