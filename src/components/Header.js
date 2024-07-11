import React, { useState } from "react";
import logo from '../assets/logo.svg';
import language from '../assets/language.svg';
import user from '../assets/user.svg';
import ver_line from '../assets/ver_line.svg';
import menu_icon from  '../assets/menu_icon.svg';
import '../css/navbar.css';

const Header =()=>{

    const [mobiNav, setMobiNav] = useState('disable');
    const [mobiNavOpen, setMobiNavOpen] = useState('navbarToggler');
    const [mobiNavClose, setMobiNavClose] = useState('disable');

    const navOpen= ()=>{
        setMobiNav('mobiNavbar');
        setMobiNavOpen('disable');
        setMobiNavClose('navbarClose');

    };
    const navClose =()=>{
        setMobiNav('disable');
        setMobiNavOpen('navbarToggler');
        setMobiNavClose('disable');
    };

    return (

        <>
        <div className="navbar">
            <div className="logo">
                <a href="/"><img src={logo}></img></a>
            </div>
            <ul className="nav-links">
                <li><a href="#">PROPERTIES</a></li>
                <li><a href="/">MY DASHBOARD/ACTIVITY</a></li>
                <li><a href="/ListYourProperty">LIST YOUR PROPERTY</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">MORE</a></li>
                <li><img src={ver_line}></img></li>
                <li>
                    <ul>
                    <li><a href="#"><img src={language}></img></a></li>
                    <li><a href="#"><img src={user}></img></a></li>
                    </ul>
                </li>
                
            </ul>
            {/* Mobile Nav */}

            <span className={mobiNavOpen}><button class="navbarToggler" onClick={navOpen}><img src={menu_icon}/></button></span>
            <span className={mobiNavClose}><button class="navbarClose" onClick={navClose}><img src="https://img.icons8.com/ios-glyphs/30/multiply.png"/></button></span>
    
            <div className={mobiNav}>
                <ul>
                    <li><a href="#">PROPERTIES</a></li>
                    <li><a href="/">MY DASHBOARD/ACTIVITY</a></li>
                    <li><a href="/ListYourProperty">LIST YOUR PROPERTY</a></li>
                    <li><a href="#">CONTACT US</a></li>
                    <li><a href="#">MORE</a></li>
                </ul>
            </div>
        </div>
        </>
        
    );
}

export default Header;