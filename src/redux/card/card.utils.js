import momentRandom from "moment-random";
import moment from "moment";
import { fetchDataByDateAsync } from "./card.actions";

export const changeDate = dateFromInput => {
  const formatedInput = moment(dateFromInput).format("YYYY-MM-DD");
  formatedInput > moment().format("YYYY-MM-DD")
    ? alert("You can only search for past dates not feauture ones!")
    : fetchDataByDateAsync(formatedInput);
};

export const setRandomPhoto = () => {
  const randomDate = momentRandom(moment(), moment("06-16-1995", "MM-DD-YYYY"));
  fetchDataByDateAsync(moment(randomDate).format("YYYY-MM-DD"));
  //setDate(randomDate);
};
