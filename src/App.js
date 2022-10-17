//import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import PostList from './components/PostList';

function App() {
  const [searchI, setSearchI] = useState("")

  function dSearch(text) {
    setSearchI(text)    
  }

  const [shwP, setShwP] = useState(false)
  const [shwL, setShwL] = useState(true)
  


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
      <NavBar shwP={shwP} shwL={shwL} onProfileClick={onProfileClick}  onLogoClick={onLogoClick}/>
      <SearchBar searchI={searchI} dSearch={dSearch}/>
      <Profile shwP={shwP} shwL={shwL} />
      <PostList searchI={searchI} shwP={shwP} shwL={shwL}/>
    </div>
  );
}

export default App;
