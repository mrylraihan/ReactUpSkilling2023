import React, { useState } from 'react';
import imagesArr from './components/Images/imageData';
import './App.css';
import ImagePickers from './components/pages/ImagePickers';
import BigImage from './components/pages/BigImage';


function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleImage = (imgUrl) =>{
    setBigImage(imgUrl)
  }

  return (
    <>
    <div className="app">
      <h1>Image Picker</h1>
    </div>
      <ImagePickers handleImage={handleImage} bigImage={bigImage}/>
      <BigImage bigImage={bigImage}/>
    </>
  );
}

export default App;
