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
  max-width: 40%;
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

export default function NasaPhoto(props) {
  return (
    <CardInfo className="img-of-day">
      <CardBody>
        <CardImg height="600px" top width="400px" src={props.photo.url} />
        <Title>{props.photo.title}</Title>
        <CardSubtitle>{props.photo.date}</CardSubtitle>
        <CardSubtitle>Credit: {props.photo.copyright}</CardSubtitle>
        <CardText className="explanation">{props.photo.explanation}</CardText>
      </CardBody>
    </CardInfo>
  );
}
