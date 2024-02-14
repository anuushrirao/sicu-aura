import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/camera" element={<LoginPage/>}/>
          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
  
}

export default App;
