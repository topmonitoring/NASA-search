import { CardActionTypes } from "./card.actionTypes";

const INITIAL_STATE = {
  cardData: null,
  date: new Date(),
  loading: true, //if initial loading is false code breaks, because it is before initial set
  error: null
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionTypes.FETCH_CARD_START:
      return {
        ...state,
        loading: true
      };
    case CardActionTypes.FETCH_CARD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case CardActionTypes.FETCH_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cardData: action.payload
      };
    case CardActionTypes.SET_CURRENT_CARD_DATE:
      return {
        ...state,
        date: action.payload
      };

    case CardActionTypes.SET_CURRENT_CARD:
      return {
        ...state,
        loading: true,
        cardData: action.paylod
      };

    default:
      return state;
  }
};

export default cardReducer;
