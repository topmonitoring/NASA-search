import { CardActionTypes } from "./card.actionTypes";

const INITIAL_STATE = {
  cardData: null,
  date: new Date(),
  loading: true, //if initial loading is false code breaks, because it is before initial set
  error: null
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionTypes.SET_INITIAL_CARD_START:
    case CardActionTypes.FETCH_DATABYDATE_START:
      return {
        ...state,
        loading: true
      };
    case CardActionTypes.SET_INITIAL_CARD_FAILURE:
    case CardActionTypes.FETCH_DATABYDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case CardActionTypes.SET_INITIAL_CARD_SUCCESS:
    case CardActionTypes.FETCH_DATABYDATE_SUCCESS:
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
