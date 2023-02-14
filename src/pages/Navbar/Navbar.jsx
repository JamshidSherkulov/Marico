import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Marico/Sign_Up/Company_logo.png'

const Navbar = () => {

    return(
        <div className="nav">
            <div>
                <Link to={ '/' }><img src={ logo } alt="" /></Link>
            </div>
            <div id="menu__list">
                <Link className="text-secondary" to={ '/use-cases' }><span>Use Cases</span></Link>
                <Link className="text-secondary" to={ '/about' }><span>About</span></Link>
                <Link className="text-secondary" to={ '/pricing' }><span>Pricing</span></Link>
                <Link className="text-secondary" to={ '/blog' }><span>Blog</span></Link>
            </div>
            <div>
                <Link to={ '/login' }><button className="btn text-secondary mx-2">Log In</button></Link>
                <Link to={ '/signup' }><button className="btn btn-primary mx-2">Sign up</button></Link>
            </div>
        </div>
    ) 
}

export default Navbar;