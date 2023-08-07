// IMPORT useState
import React from "react";
import { useState } from "react";
import "./App.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData";

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  function handleClick(imgUrl) {
    // console.log(imgUrl);
    // console.log("handleCLick is working");
    setBigImage(imgUrl);
  }
  // function handleClick() {
  //   console.log("clicked");
  // }
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((image, idx) => (
    <img key={idx}
      style={{
        border: image.img === bigImage ? "10px solid green" : null
      }}
      onClick={() => handleClick(image.img)}
      className="thumb"
      src={image.img}
      alt={image.city}
    />
  ));
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
          {/* <img src="" id="bigimage" alt='bigImage'/> */}
          {images}
          <img id="bigimage" src={bigImage} alt="bigimage" />
        </div>
      </div>
    </div>
  );
}
