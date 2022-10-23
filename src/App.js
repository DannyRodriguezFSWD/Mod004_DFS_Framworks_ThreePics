//import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Login from "./components/Login";
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import PostList from './components/PostList';

function App() {
  const [searchI, setSearchI] = useState("")
  const [shwP, setShwP] = useState(false)
  const [shwL, setShwL] = useState(true)
  
  const [token, setToken] = useState(localStorage.getItem("token"));

  function dSearch(text) {
    setSearchI(text)    
  }

  function onLogoClick(e){
    setShwL(e)
    setShwP(false)
  }

  function onProfileClick(e){
    setShwP(e)
    setShwL(false)
  }


  return (
    <div className="App">
      
        {token ? (
          <>
            <NavBar shwP={shwP} shwL={shwL} onProfileClick={onProfileClick}  onLogoClick={onLogoClick}/>
            <SearchBar searchI={searchI} dSearch={dSearch}/>
            <Profile shwP={shwP} shwL={shwL} />
            <PostList searchI={searchI} shwP={shwP} shwL={shwL}/>
          </>
        ) : (
          <Login setToken={setToken} />
        )}
     
    </div>
  );
}

export default App;
