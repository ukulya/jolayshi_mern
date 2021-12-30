import React from "react";
import {NavLink} from "react-router-dom";
const Navbar=(props)=>{

    return(
        <nav className="navbar pb-30 text-center">
            <div className="container">
                <NavLink to='/'><img src={props.img} className="logo mb-20 " alt="logo" /></NavLink>
                <p className="text_sm text_reg mb-40">Междугороднее такси</p>
                <p className="text_xxl">Быстро! Выгодно! Безопасно!</p>
            </div>
        </nav>
    )
}

export default Navbar;