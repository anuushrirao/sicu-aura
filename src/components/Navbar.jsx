import React from 'react'
import './Navbar.css';
import logo from '../images/nav-logo1.png';
import title from '../images/nav-logo.png';
import avatar from '../images/avatar.jpg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }
  
    const userName = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
        <nav className='nav'>
            <img className="logo" src={logo} alt=""></img>
            <img className="title" src={title} alt=""></img>
        
            <img className='avatar' src={avatar} alt=""></img>
            <p className='name'>{userName.email}</p>

            <button onClick={handleLogout} className="logout-btn" >Logout</button>
        </nav>
    </div>
  )
}

export default Navbar
