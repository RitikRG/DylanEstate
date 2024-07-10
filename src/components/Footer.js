import React from 'react';
import '../css/footer.css';
import Logo from '../assets/logo.svg';

const Footer=()=>{
    return(
        <>
        <footer class="footer">
            <div class="logo">
                <img src={Logo} alt="Logo" width="40"/>
            </div>
            <div class="column">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PROPERTIES</a></li>
                    <li><a href="#">LIST YOUR PROPERTY</a></li>
                    <li><a href="#">SAVED SEARCHES</a></li>
                </ul>
            </div>
            <div class="column">
                <ul>
                    <li><a href="#">ABOUT MIRA ROAD</a></li>
                    <li><a href="#">EMI CALCULATOR</a></li>
                    <li><a href="#">TESTIMONIALS</a></li>
                    <li><a href="#">EXPLORE NEIGHBORHOOD</a></li>
                </ul>
            </div>
            <div class="column">
                <ul>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT US</a></li>
                    <li><a href="#">FAQ'S</a></li>
                </ul>
            </div>
            <div class="column">
                <ul>
                    <li>
                        <div>
                            <h3>CONTACT US</h3>
                            <p>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>OFFICE HOURS</h3>
                            <p>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
                        </div>
                    </li>
                </ul>
                
            
                
            </div>
            <div class="bottom">
                <div>
                    <p>&copy; 2024 Dylan Estates. All rights reserved. Dylan Estates - Your Neighborhood Experts</p>
                    <a href="#">Privacy Policy</a> | 
                    <a href="#">Terms & Conditions</a>
                </div>
                <div class="language-currency">
                    <div>
                        <img src="https://img.icons8.com/ios/50/FFFFFF/globe--v1.png" alt="Language Icon" width="20"/>
                        <span>English (IN)</span>
                    </div>
                    <div>
                        <img src="https://img.icons8.com/material-sharp/24/FFFFFF/rupee.png" alt="Currency Icon" width="20"/>
                        <span> INR</span>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;