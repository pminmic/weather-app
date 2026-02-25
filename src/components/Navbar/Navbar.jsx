import { Link } from 'react-router-dom';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className='navbar-section'>
            <Link className="navbar-home" to="/">
                <span className="navbar-icon-container"><TiWeatherPartlySunny className="navbar-logo" /></span>
                <h1 className="navbar-title">Weather App</h1>
            </Link>
            <div className='navbar-entries-container'>
                <Link className="navbar-link" to="/about">Acerca de</Link>
                <Link className="navbar-link" to="/contact">Contacto</Link>
            </div>
        </nav>
    );
}

export default Navbar;