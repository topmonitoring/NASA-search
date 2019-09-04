import React from "react";
import { Title, Details, Image, PictureContainer } from "./Photo.styles";

const Photo = props => (
  <PictureContainer>
    <Title>{props.photo.title}</Title>
    <Image src={props.photo.url} alt={props.photo.title} />
    <Details>{props.photo.explanation}</Details>
  </PictureContainer>
);
export default Photo;
