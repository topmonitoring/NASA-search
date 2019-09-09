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
    let cancel;
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${formatDateForQuery(
          date
        )}&api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`,
        {
          cancelToken: new axios.CancelToken(c => (cancel = c))
        }
      )
      .then(res => {
        setIsLoading(false);
        setPhoto(res.data);
      });
    return () => cancel();
  }, [date]);

  const formatDateForQuery = date => {
    const formatedDate = moment(date).format("YYYY-MM-DD");
    return formatedDate;
  };

  const checkIfDateIsValid = date => {
    date > new Date()
      ? alert("You can only search for past dates not feauture ones!")
      : setDate(date);
  };

  function randomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  const genarateRandomDate = () => {
    let randomDateVal = randomDate(new Date(1995, 16, 6), new Date());
    setDate(randomDateVal);
  };
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Content>
          <h1>NASA's Astronomy Picture of the Day</h1>
          <DateInput
            checkIfDateIsValid={checkIfDateIsValid}
            date={date}
            genarateRandomDate={genarateRandomDate}
          />
          {isLoading ? <Spinner /> : <Photo photo={photo} />}
        </Content>
      </AppContainer>
    </>
  );
};
export default App;
