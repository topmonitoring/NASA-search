import { createSelector } from "reselect";

const selectCard = state => state.card;

export const selectCardDate = createSelector(
  [selectCard],
  card => card.date
);

export const selectCardIsLoading = createSelector(
  [selectCard],
  card => card.loading
);

export const selectcardData = createSelector(
  [selectCard],
  card => card.cardData
);
