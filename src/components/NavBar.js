import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <div className="Navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default NavBar;