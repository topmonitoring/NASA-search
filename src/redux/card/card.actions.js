import { CardActionTypes } from "./card.actionTypes";
import axios from "axios";
import moment from "moment";

export const setInitialCardStart = () => ({
  type: CardActionTypes.SET_INITIAL_CARD_START
});

export const setInitialCardSuccess = cardData => ({
  type: CardActionTypes.SET_INITIAL_CARD_SUCCESS,
  payload: cardData
});

export const setInitialCardFailure = errorMessage => ({
  type: CardActionTypes.SET_INITIAL_CARD_FAILURE,
  payload: errorMessage
});

export const setInitialCard = () => {
  return dispatch => {
    dispatch(setInitialCardStart());
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
      )
      .then(res => {
        dispatch(setInitialCardSuccess(res.data));
      })
      .catch(err => {
        dispatch(setInitialCardFailure(err.message));
      });
  };
};

export const setCurrentCardDate = date => ({
  type: CardActionTypes.SET_CURRENT_CARD_DATE,
  payload: date
});

export const setCurrentCard = date => {
  return dispatch => {
    dispatch(setCurrentCardDate(date));
    const formatedInput = moment(date).format("YYYY-MM-DD");
    formatedInput > moment().format("YYYY-MM-DD")
      ? alert("You can only search for past dates not feauture ones!")
      : dispatch(fetchDataByDateAsync(formatedInput));
  };
};

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const setRandomCard = () => {
  return dispatch => {
    let randomDateVal = randomDate(new Date(1995, 16, 6), new Date());
    dispatch(setCurrentCardDate(randomDateVal));
    dispatch(fetchDataByDateAsync(moment(randomDateVal).format("YYYY-MM-DD")));
  };
};

export const fetchDataByDayStart = () => ({
  type: CardActionTypes.FETCH_DATABYDATE_START
});

export const fetchDataByDaySuccess = state => ({
  type: CardActionTypes.FETCH_DATABYDATE_SUCCESS,
  payload: state
});

export const fetchDataByDayFailure = errorMessage => ({
  type: CardActionTypes.FETCH_DATABYDATE_FAILURE,
  payload: errorMessage
});

export const fetchDataByDateAsync = date => {
  return dispatch => {
    dispatch(fetchDataByDayStart());
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
      )
      .then(res => {
        dispatch(fetchDataByDaySuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchDataByDayFailure(err.message));
      });
  };
};
