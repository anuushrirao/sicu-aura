import React, { useState,useEffect } from "react";
import "./Signup.css";
import image from '../images/sicu-auro.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from "./Popup";
function Signup() {

  const navigate = useNavigate();
  const [input,setInput] = useState({
    Hname:"",
    email:"",
    password:"",
    phoneNumber: "",
    address: "",
    city:"",
    state:"",
    pincode:"",
    date:"",
  })

  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    setButtonPopup(true);
  } 

  useEffect(() => {
    if (buttonPopup) {
      const timeout = setTimeout(() => {
        setButtonPopup(false); 
        navigate("/login"); 
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [buttonPopup, navigate]);

  return (
    <div className="container">
      <div className="left">
        <img className="image" src={image} alt="example" />
      </div>
      <div className="middle">
      <img className='logo' src="https://thumbs.dreamstime.com/b/caduceus-medical-symbol-vector-icon-isolated-white-104579239.jpg" alt="" style={{ width: '90px', height: '90px' }} />

      <Link to="/login" className="login-link">
              <h2 className='title'>Sign Up/Login</h2>
        </Link>
        <form onSubmit={handleSubmit} className="signup">
          <div className="form-row">
            <div className="input-data">
            <input name="Hname" value={input.Hname} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
              <div className="underline"></div>
              <label>Hospital Name</label>
            </div>
          </div>

          <div className="form-row">
                <div className="input-data">
                <input name="address" value={input.address} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
                <div className='underline'></div>
                  <label>Address</label> 
                </div>
              </div>

              <div className="form-row">
                <div className="input-data">
                  <input name="city" value={input.city} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
                  <div className='underline'></div>
                  <label>City</label> 
                </div>
              </div>

              <div className="form-row">
                <div className="input-data">
                  <input name="state" value={input.state} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
                  <div className='underline'></div>
                  <label>State</label> 
                </div>
              </div>

              <div className="form-row">
                <div className="input-data">
                <input name="pincode" value={input.pincode} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
                  <div className='underline'></div>
                  <label>Pincode</label> 
                </div>
              </div>

              <div className="form-row">
                <div className="input-data">
                <input name="date" value={input.date} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="date" required />
                  <div className='underline'></div>
                  <label>Hospital Registration Date</label> 
                </div>
              </div>

              <div className="form-row">
                <div className="input-data">
                  <input type="text" />
                  <div className='underline'></div>
                  <label>Number Of Ambulance available</label> 
                </div>
                </div>
                </form>
                </div>
        
      
        <div className="right">
        
         <form onSubmit={handleSubmit} className="signup">
         <div className="form-row">
  <div className="input-data">
    <input name="email" value={input.email} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type="text" required />
    <div className='underline'></div>
    <label>Email ID</label> 
  </div>
</div>


            <div className="form-row">
                <div className="input-data">
                <input name="phoneNumber" value={input.phoneNumber} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" />
                  <div className='underline'></div>
                  <label>Phone Number</label> 
                </div>
            </div>

            <div className="form-row">
                <div className="input-data">
                  <input type="text"/>
                  <div className='underline'></div>
                  <label>Hospital Registration Number</label> 
                </div>
            </div>

            <div className="form-row">
                <div className="input-data">
                  <input type="text" />
                  <div className='underline'></div>
                  <label>Emergency-Ward Number</label> 
                </div>
            </div>


            <div className="form-row">
                <div className="input-data" style={{marginBottom:'20px'}}>
                  <input type="file" />
                  <div className='underline'></div>
                  <label>Registration form upload</label>
                </div>
            </div>


            <div className="form-row">
  <div className="input-data">
    <input name="password" value={input.password} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type="text" required />
    <div className='underline'></div>
    <label>Password</label> 
  </div>
</div>


            <div className="form-row">
                <div className="input-data">
                  <input type="text" required />
                  <div className='underline'></div>
                  <label>Confirm Password</label> 
                </div>
            </div>

            <button type="submit" className="signup-button">Sign up</button>
        </form>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <img className="popup-tick" src="https://st4.depositphotos.com/2851757/20210/v/450/depositphotos_202107532-stock-illustration-green-check-mark-icon-in.jpg"></img>
        <h1 className="popup-para">Your registration is successful.</h1>
        <button className='close-btn' onClick={() => setButtonPopup(false)}>Close</button>
      </Popup>

    </div>
  );
}

export default Signup;
