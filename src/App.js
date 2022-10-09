//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/SearchBar';
import PostList from './components/PostList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <PostList />
    </div>
  );
}

export default App;
