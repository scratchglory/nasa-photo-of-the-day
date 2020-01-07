import React, { useState, useEffect } from "react";
import axios from "axios";

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
  console.log(photo);

  return (
    <div className="img-of-day">
      <h2>{photo.title}</h2>
      <h4>{photo.date}</h4>

      <img src={photo.url} height="600px" width="75%" />
      <p>Credit: {photo.copyright}</p>
      <div className="explanation">{photo.explanation}</div>
    </div>
  );
}
