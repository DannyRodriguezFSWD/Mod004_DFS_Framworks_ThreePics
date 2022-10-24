import SearchBar from '../components/SearchBar';
import PostList from '../components/PostList';

function Home({searchI, dSearch, shwP, shwL}) {
    return (
        <div className="Home">        
            <SearchBar searchI={searchI} dSearch={dSearch}/>
            <PostList searchI={searchI} shwP={shwP} shwL={shwL}/>
        </div>
 );
}

export default Home