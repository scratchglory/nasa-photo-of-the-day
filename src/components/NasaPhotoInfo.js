import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled, { css } from "styled-components";

const CardInfo = styled.div`
  width: 1200px;
  border: 2px dashed black;
  box-shadow: 20px 20px 8px #888888;
  margin: 2% auto;
`;

const Title = styled.h2`
  margin: 1% 0;
  color: #4169e1;
  text-decoration: underline;
  font-family: "Indie Flower", cursive;
`;

export default function NasaPhoto() {
  const [photo, setPhoto] = useState([]);
  //   const ApiKey = Ha6eDiYXL3et4IsPieJpbAGMSPf8fxS8RkynwVRW;
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Ha6eDiYXL3et4IsPieJpbAGMSPf8fxS8RkynwVRW"
      )
      .then(res => setPhoto(res.data))
      .catch(err => {
        console.log("NO DATA", err);
      });
  }, []);

  console.log(photo);

  return (
    <CardInfo className="img-of-day">
      <CardBody>
        <CardImg height="600px" top width="400px" src={photo.url} />
        <Title>{photo.title}</Title>
        <CardSubtitle>{photo.date}</CardSubtitle>
        <CardSubtitle>Credit: {photo.copyright}</CardSubtitle>
        <CardText className="explanation">{photo.explanation}</CardText>
      </CardBody>
    </CardInfo>
  );
}
