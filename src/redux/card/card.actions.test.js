import { CardActionTypes } from "./card.actionTypes";
import {
  fetchCardStart,
  fetchCardSuccess,
  fetchCardFailure,
  setCardDate,
  setCurrentCard,
  setRandomCard,
  formatDateForQuery
} from "./card.actions";

describe("FETCH_CARD_START action", () => {
  it("shoud create FETCH_CARD_START action ", () => {
    const action = fetchCardStart();
    expect(action.type).toEqual(CardActionTypes.FETCH_CARD_START);
  });
});

describe("FETCH_CARD_FAILURE action", () => {
  it("should create FETCH_CARD_FAILURE action", () => {
    const error = "errMsg";
    const action = fetchCardFailure(error);

    expect(action.type).toEqual(CardActionTypes.FETCH_CARD_FAILURE);
    expect(action.payload).toEqual(error);
  });
});

describe("FETCH_CARD_SUCCESS action", () => {
  it("should create FETCH_CARD_SUCCESS action", () => {
    const item = {
      title: "SimpleTitle",
      disctiption: "blabla",
      url: "www.blabla.com"
    };
    const action = fetchCardSuccess(item);

    expect(action.type).toEqual(CardActionTypes.FETCH_CARD_SUCCESS);
    expect(action.payload).toEqual(item);
  });
});

describe("formatDateForQuery action", () => {
  it("should create format date to YYYY-MM-DD format", () => {
    const date = "2019-09-10T19:35:55.616Z";
    const action = formatDateForQuery(date);

    expect(action).toEqual("2019-09-10");
  });
});
