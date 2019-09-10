import { CardActionTypes } from "./card.actionTypes";
import axios from "axios";
import moment from "moment";

export const fetchCardStart = () => ({
  type: CardActionTypes.FETCH_CARD_START
});

export const fetchCardSuccess = cardData => ({
  type: CardActionTypes.FETCH_CARD_SUCCESS,
  payload: cardData
});

export const fetchCardFailure = errorMessage => ({
  type: CardActionTypes.FETCH_CARD_FAILURE,
  payload: errorMessage
});

export const setCardDate = date => ({
  type: CardActionTypes.SET_CURRENT_CARD_DATE,
  payload: date
});

export const setCurrentCard = date => {
  return dispatch => {
    dispatch(setCardDate(date));
    const formatedInput = moment(date).format("YYYY-MM-DD");
    formatedInput > moment().format("YYYY-MM-DD")
      ? alert("You can only search for past dates not feauture ones!")
      : dispatch(fetchCardAsync(formatedInput));
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
    dispatch(setCardDate(randomDateVal));
    dispatch(fetchCardAsync(moment(randomDateVal).format("YYYY-MM-DD")));
  };
};
export const formatDateForQuery = date => {
  const formatedDate = moment(date).format("YYYY-MM-DD");
  return formatedDate;
};

export const fetchCardAsync = date => {
  return dispatch => {
    dispatch(fetchCardStart());
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${formatDateForQuery(
          date
        )}&api_key=kDfKhf1jOYIDcujWel6ycIP5Cy9obKH5imv0F3CW`
      )
      .then(res => {
        dispatch(fetchCardSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchCardFailure(err.message));
      });
  };
};
