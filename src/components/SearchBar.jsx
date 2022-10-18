function Search({searchI,dSearch}) {
   
    return (

        <div className="container-fluid">
            <form className="d-flex flex-wrap justify-content-center" role="search">
                <input 
                value={searchI} 
                onChange={(e) => {
                    dSearch(e.target.value);
                }} 
                className="form-control" 
                type="search" 
                placeholder="Search"
                />                
            </form>
        </div>
        );
  }
  
  export default Search;