import ThunderIcon from '../assets/icons/thunder.svg';
import UserCircleIcon from '../assets/icons/user-circle.svg';

function NavBar({onLogoClick, onProfileClick}) {
  
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => onLogoClick(true) && onProfileClick(false)}>
            <span className="navbar-brand mb-0 h1"><img className="icon" src={ThunderIcon} alt="" /> Three pics</span>
          </a>
          <a onClick={(e) => onProfileClick(true) && onLogoClick(false)}><img className="icon" src={UserCircleIcon} alt="" /></a>           
        </div>
      </nav>
    );
  }
  
  export default NavBar;