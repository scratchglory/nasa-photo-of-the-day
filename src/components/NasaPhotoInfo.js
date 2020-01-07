import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaPhoto() {
  const [photo, setPhoto] = useState([]);

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

  const pic = photo.hdurl;
  return (
    <div className="container">
      <img src={photo.hdurl} height="600px" width="75%" />
    </div>
  );
}
