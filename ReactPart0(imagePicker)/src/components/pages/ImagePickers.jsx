import React from 'react'
import imagesArr from '../Images/imageData'
function ImagePickers({ handleImage, bigImage }) {
    const images = imagesArr.map((image, idx) => (
        <img key={idx}
            style={{
                border: image.img === bigImage ? "10px solid green" : null
            }}
            onClick={() => handleImage(image.img)}
            className="thumb"
            src={image.img}
            alt={image.city}
        />
    ))
  return (
      <div className="wrapper">
          <div id="thumbnails">
              {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
              {/* <img src="" id="bigimage" alt='bigImage'/> */}
              {images}
    </div>
    </div>
  )
}

export default ImagePickers