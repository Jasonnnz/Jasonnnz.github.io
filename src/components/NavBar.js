import {NavLink} from 'react-router-dom';
import resume from '../images/resume.pdf';

function NavBar(){
    return(
        <div className="Navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* <NavLink to="/resume">Resume</NavLink> */}
            <a href={resume} target="_blank">Resume</a>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

export default NavBar;