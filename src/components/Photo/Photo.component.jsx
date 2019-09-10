import React from "react";
import { Title, Details, Image, PictureContainer } from "./Photo.styles";
import { connect } from "react-redux";
import { selectcardData } from "../../redux/card/card.selectors";

export const Photo = ({ data }) => (
  <PictureContainer>
    <Title>{data.title}</Title>
    <Image src={data.url} alt={data.title} />
    <Details>{data.explanation}</Details>
  </PictureContainer>
);

const mapStateToProps = state => ({
  data: selectcardData(state)
});

export default connect(mapStateToProps)(Photo);
