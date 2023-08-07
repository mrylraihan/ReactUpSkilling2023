import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

function Test() {
    const videoRef = useRef(null);
    const [stream , setStream] = useState(null)

    const openCamera = async ()=>{
        try{
            const mediaStream = await navigator.mediaDevices.getUserMedia({video:true})
            if(videoRef.current){
                videoRef.current.srcObject = mediaStream
            }
            setStream(mediaStream)
        }catch(error){
            console.error('Error accessing camera', error)
        }
    }

    const closeCamera = ()=>{
        if(stream){
            stream.getTracks().forEach(track => track.stop())
            setStream(null)
        }
        videoRef.current.srcObject = ''
    }
  return (
    <div>
        <h1>Camera</h1>
        <button onClick={openCamera}>Open Camera</button>
        <button onClick={closeCamera}>Close Camera</button>
        <video ref={videoRef} autoPlay />
    </div>
  )
}

export default Test