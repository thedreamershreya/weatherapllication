import React from "react";
import { NavLink } from "react-router-dom";


import headerStyle from './Header.module.css';
import '../../App.css'


const Header = ()=>{

    return (
    <header>
        <NavLink  to='/subscribe' className={headerStyle.subscribe}>Subscribe to receive our newsletter</NavLink>
        <NavLink  to='/' className={headerStyle.subscribe}>HOME</NavLink>
        <div className={headerStyle.banner}>
            <img className={headerStyle.img} src="https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg" alt="weather"/>
            <h1 className={headerStyle.title}>Weather Website</h1>
        </div>
    </header>)
}

export default Header;