import React, { useState, useEffect } from "react";
import DateInput from "./components/DateInput/DateInput.component";
import Photo from "./components/Photo/Photo.component";
import moment from "moment";
import momentRandom from "moment-random";
import { AppContainer, Content } from "./App.styles";
import { GlobalStyle } from "./global.styles";
import axios from "axios";
import Spinner from "./components/spinner/spinner.component";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
      )
      .then(res => {
        setIsLoading(false);
        setPhoto(res.data);
      });
  }, []);

  const changeDate = dateFromInput => {
    const formatedInput = moment(dateFromInput).format("YYYY-MM-DD");
    formatedInput > moment().format("YYYY-MM-DD")
      ? alert("You can only search for past dates not feauture ones!")
      : getPhoto(formatedInput);
    setDate(dateFromInput);
  };

  const getPhoto = date => {
    setIsLoading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
      )
      .then(res => {
        setIsLoading(false);
        setPhoto(res.data);
      });
  };

  const handleClick = () => {
    let randomDate = momentRandom(moment(), moment("06-16-1995", "MM-DD-YYYY"));
    getPhoto(moment(randomDate).format("YYYY-MM-DD"));
    //setDate(randomDate);
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
          {isLoading ? <Spinner /> : <Photo photo={photo} />}
        </Content>
      </AppContainer>
    </>
  );
};
export default App;
