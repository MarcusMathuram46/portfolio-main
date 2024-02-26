import React, { useState } from 'react'
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.css';
function Navbar() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };


  return (
    <div>
        <nav>
            <h1 id='portfolio'>Portfolio</h1>
           <ul className={menu ? 'show' : 'hide'}>
            <li><a href='/' onClick={closeMenu}>Intro</a></li>
            <li><a href='#about' onClick={closeMenu}>About</a></li>
            <li><a href='#projects' onClick={closeMenu}>Projects</a></li>
            <li><a href='#skills' onClick={closeMenu}>Skills</a></li>
            <li><a href='#certifications' onClick={closeMenu}>Certifications</a></li>
            <li><a href='#education' onClick={closeMenu}>Education</a></li>
            <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
            </ul> 
            <div id='drop-down'>
                <input id='checkbox' type='checkbox' checked={menu} onChange={toggleMenu}/>
                <label className='toggle' htmlFor='checkbox'>
                    <div id='drop1' className='drops'></div>
                    <div id='drop2' className='drops'></div>
                    <div id='drop3' className='drops'></div>
                </label>
            </div>
        </nav> 
    </div>
  )
}

export default Navbar
