import React, { useState } from 'react';
import Camera from './Camera'; // Assuming Camera.jsx is in the same directory
import image from '../images/sicu-auro.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [photo, setPhoto] = useState(null);
  const [input, setInput] = useState({
    Hname: "",
    email: "",
    password: "",
  });

  const handleCapture = (imageSrc) => {
    setPhoto(imageSrc);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container">
      <div className="left">
        <img className="image" src={image} alt="Sicu Auro" />
      </div>
      <div className="right">
        <img className='logo' src="https://thumbs.dreamstime.com/b/caduceus-medical-symbol-vector-icon-isolated-white-104579239.jpg" alt="" style={{ width: '90px', height: '90px' }} />
        <Link to="/" className="sign-link">
          <h2 className="title">Sign Up/Login</h2>
        </Link>
        {photo ? (
          <img src={photo} alt="Captured" />
        ) : (
          <div>
            <p style={{alignItems:'center'}}>Please capture your face to continue</p>
            <Camera onCapture={handleCapture} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
