import React, { useState, useEffect } from "react";
import DateInput from "./components/DateInput/DateInput.component";
import Photo from "./components/Photo/Photo.component";
import moment from "moment";
import axios from "axios";
import Spinner from "./components/spinner/spinner.component";

import { AppContainer, Content } from "./App.styles";
import { GlobalStyle } from "./global.styles";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(new Date());
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

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const getPhoto = date => {
    setIsLoading(true);
    let cancel;
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`,
        {
          cancelToken: new axios.CancelToken(c => (cancel = c))
        }
      )
      .then(res => {
        setIsLoading(false);
        setPhoto(res.data);
      });
    return () => cancel();
  };

  const handleClick = () => {
    let randomDateVal = randomDate(new Date(1995, 16, 6), new Date());
    getPhoto(moment(randomDateVal).format("YYYY-MM-DD"));
    setDate(randomDateVal);
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
