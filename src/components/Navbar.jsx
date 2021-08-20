import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'
import { FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
        let menu = ''
    if(window.innerWidth <= 960){
        if(click){
            menu = 
            <div className="mobile-div">
                <ul className="mobile-item">
                        <li className="link-list"><Link to="/">Home</Link></li>
                        <li className="link-list"><Link to="/#contacts">Contacts</Link></li>
                        <li className="link-list"><Link to="/cv">CV</Link></li>
                        <li className="link-list"><Link to="/certificates">Certificates</Link></li>
                    </ul>
            </div>
        }
    }
    return (
        <div className="navbar-links">
            <div className="mobile-nav" onClick={handleClick}>
                <span className="toggle-button">{click ? <FaTimes /> : <FaBars />}</span>
            {/* <ul className="list-items">
                <li className="link-list"><Link to="/">Home</Link></li>
                <li className="link-list"><Link to="/#contacts">Contacts</Link></li>
                <li className="link-list"><Link to="/cv">CV</Link></li>
                <li className="link-list"><Link to="/certificates">Certificates</Link></li>
            </ul> */}
            { menu }
            </div>
            
        </div>
        
    );
}
 
export default Navbar;