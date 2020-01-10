import React, { useState, useEffect } from "react";
import NasaPhotoInfo from "./components/NasaPhotoInfo";
import styled, { css } from "styled-components";
import axios from "axios";
import "./App.css";
import Calendar from "./components/Calendar";
import moment from "moment";

const Header = styled.h1`
  margin-top: 2%;
  font-family: "Cute Font", cursive;
  font-size: 4.3rem;
`;

function App() {
  const [photo, setPhoto] = useState({});
  const [date, setDate] = useState(moment(Date.now()).format("YYYY-MM-DD"));

  const ApiKey = "Ha6eDiYXL3et4IsPieJpbAGMSPf8fxS8RkynwVRW";
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${ApiKey}&date=${date}`)
      .then(res => setPhoto(res.data))
      .catch(err => {
        console.log("NO DATA", err);
      });
  }, [date]);

  return (
    <div className="App">
      <Header>🚀NASA's Astronomy Polaroid of the Day!✨</Header>
      <NasaPhotoInfo photo={photo} />
      <Calendar setDate={setDate} />
    </div>
  );
}

export default App;
