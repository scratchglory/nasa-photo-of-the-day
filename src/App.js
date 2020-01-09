import React from "react";
import NasaPhotoInfo from "./components/NasaPhotoInfo";
import styled, { css } from "styled-components";

import "./App.css";

const Header = styled.h1`
  margin-top: 2%;
  font-family: "Cute Font", cursive;
  font-size: 4.3rem;
`;

function App() {
  return (
    <div className="App">
      <Header>🚀NASA's Astronomy Polaroid of the Day!✨</Header>
      <NasaPhotoInfo />
    </div>
  );
}

export default App;
