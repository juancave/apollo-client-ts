import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function NavBar() {
  return (
    <div className='NavBar-Container'>
      <div className='NavBar-OptionsContainer'>
        <img className='NavBar-Logo' src={logo} alt="logo" />
        <Link
          className='NavBar-Link'
          to="/"
        >
          Apollo Client App
        </Link>
      </div>
      <div className='NavBar-OptionsContainer'>
        <Link
          className='NavBar-Link'
          to="/users"
        >
          Users
        </Link>
        <Link
          className='NavBar-Link'
          to="/posts"
        >
          Posts
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
