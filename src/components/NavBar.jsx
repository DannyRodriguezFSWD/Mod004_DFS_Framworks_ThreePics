import ThunderIcon from '../icons/thunder.svg';
import UserCircleIcon from '../icons/user-circle.svg';

function NavBar() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="navbar-brand mb-0 h1"><img className='icon' src={ThunderIcon} alt="" /> Three pics</span>
          </a>
          <a ><img className='icon' src={UserCircleIcon} alt="" /></a>           
        </div>
      </nav>
    );
  }
  
  export default NavBar;