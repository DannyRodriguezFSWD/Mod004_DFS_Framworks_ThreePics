//import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Login from "./components/Login";
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import { Routes, Route } from "react-router";
import Home from "./screens/Home";

function App() {
  const [searchI, setSearchI] = useState("")   
  const [token, setToken] = useState(localStorage.getItem("token"));
  //const [isLoggedin, setIsLogggedin] =useState(false);

  function dSearch(text) {
    setSearchI(text)    
  }

  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={token ? (
            <>            
              <Home 
                searchI={searchI} 
                dSearch={dSearch}                
              />
         </>
          ) : (
            <Login setToken={setToken} />
          )} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/profile" element={token ? (
            <>            
              <Profile />            
            </>
          ) : (
            <Login setToken={setToken} />
          )} />
        </Routes>
      </div>       
     
    </div>
  );
}

export default App;
