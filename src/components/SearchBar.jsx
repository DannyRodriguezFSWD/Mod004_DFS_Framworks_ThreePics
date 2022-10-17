function Search({searchI,dSearch}) {
   
    return (

        <div className="container-fluid">
            <form className="d-flex" role="search">
                <input 
                value={searchI} 
                onChange={(e) => {
                    dSearch(e.target.value);
                }} 
                className="form-control me-2" 
                type="search" 
                placeholder="Search"
                />                
            </form>
        </div>
        );
  }
  
  export default Search;