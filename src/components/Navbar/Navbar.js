// import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button } from '../Home/Button'
import '../Navbar/Navbar.css'


function Navbar() {
    // update the state from what it was to what i want it to be
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    // reversing the state below for burger
    const handleClick = () => setClick(!click);
    const closeBurger = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Genis Bardales <i class="fas fa-code-branch"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick="closeBurger">Home</ Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-links" onClick="closeBurger">Projects</ Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-links" onClick="closeBurger">Skills</ Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactme" className="nav-links" onClick="closeBurger">Contact</ Link>
                        </li>
                    </ul>
                    {button && <Button Redirect to="https://www.linkedin.com/in/genis-bardales/" buttonStyle='btn--outline'>LinkedIn</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;