import { CardActionTypes } from "./card.actionTypes";
import cardReducer from "./card.reducer";
import {
  fetchCardStart,
  fetchCardSuccess,
  fetchCardFailure
} from "./card.actions";

const INITIAL_STATE = {
  cardData: null,
  date: null, //dont know how to get date xD
  loading: true,
  error: null
};

describe("cardReducer", () => {
  it("should return initial state", () => {
    expect(cardReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
});
