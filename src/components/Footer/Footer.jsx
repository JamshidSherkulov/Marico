import React from "react";
import './Footer.css'
import logo from '../../assets/Marico/Sign_Up/Company_logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {

    return(
        <div id="footer__container">
            <div>
                <img src={ logo } alt="" />
                <p className="text-secondary">info@marico.co</p>
            </div>
            <div id="menu__list">
                <Link className="text-secondary" to={ '/use-cases' }><span>Use Cases</span></Link>
                <Link className="text-secondary" to={ '/about' }><span>About</span></Link>
                <Link className="text-secondary" to={ '/pricing' }><span>Pricing</span></Link>
                <Link className="text-secondary" to={ '/blog' }><span>Blog</span></Link>
            </div>
        </div>
    )
}

export default Footer;