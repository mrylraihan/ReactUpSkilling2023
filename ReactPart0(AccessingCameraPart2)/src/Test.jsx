import React, { useEffect, useRef, useState } from 'react';

const CameraComponent = () => {
    const videoRef = useRef(null);
    const [stream, setStream] = useState(null);

    useEffect(() => {
        const enableCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setStream(stream);
                videoRef.current.srcObject = stream;
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        enableCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
                setStream(null);
            }
        };
    }, []);

    const handleToggleCamera = () => {
        if (stream) {
            // stream.getUserMedia({video:false})
            stream.getTracks().forEach((track) => {
                track.enabled = !track.enabled;
            });
        }
    };

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline />
            <button onClick={handleToggleCamera}>Toggle Camera</button>
        </div>
    );
};

export default CameraComponent;
