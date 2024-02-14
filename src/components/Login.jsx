import React,{useState} from 'react';
import './Login.css';
import image from '../images/sicu-auro.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();
  const [input,setInput] = useState({
    Hname:"",
    email:"",
    password:"",
  })

  const handleLogin = (e) =>{
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(
      input.email === loggeduser.email && 
      input.password === loggeduser.password
      ){
        navigate("/camera")
    }
    else{
      alert("wrong email or password")
    }
  
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
    <div className="loginform-container">
      <form className="signup" onSubmit={handleLogin}>
        <h2>Welcome to Sicu-aura</h2>
        <p>Your one-stop safety solution using innovative technology</p>
        <div className="form-row">
          <div className="input-data">
            <input name="Hname" value={input.Hname} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
            <div className="underline"></div>
            <label>Hospital Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
            <div className="underline"></div>
            <label>Email ID</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]: e.target.value})} type="text" required />
            <div className="underline"></div>
            <label>Password</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" required />
            <div className="underline"></div>
            <label>Special Access Code</label>
          </div>
        </div>
        <button type="submit">Login</button> 
      </form>
    </div>
  </div>
</div>

  );
}

export default Login;
