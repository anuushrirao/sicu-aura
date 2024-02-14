import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

const Camera = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem('capturedImage', imageSrc);
    navigate('/home');
  };

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture</button>
    </>
  );
};

export default Camera;
