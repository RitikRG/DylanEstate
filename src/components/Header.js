import React from "react";
import logo from '../assets/logo.svg';
import language from '../assets/language.svg';
import user from '../assets/user.svg';
import ver_line from '../assets/ver_line.svg';
import '../css/navbar.css';

const Header =()=>{
    return (
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
        </div>
    );
}

export default Header;