import React from "react";
import {BiSearch} from "react-icons/bi";
import {IoMdNotifications} from "react-icons/io";
import {FaEnvelope} from "react-icons/fa";

const Header = () => {
    return(
        <>
          <div className = "top">
          <div id = "logo" >
            <div className = "main_heading" > <h1 className = "logo1" >X-</h1><h2 className = "logo2" >Email Verify</h2> </div>
            <h5 className = "tagline" > Enhance your Reach </h5>
          </div>
           
            <div className = "searchbar" >
                <input className= "search_input" type = "text" placeholder = "Search for..." />
                <span className = "search_btn" > <BiSearch size="20px"/> </span>
            </div>
            <div className = "icons" >
                <a href ="#logo"  className = "notification" >
                  <IoMdNotifications size="22px" />
                  <span className = "badge" >3+</span>
                </a>
                <a href ="#logo" className = "notification" >
                  <FaEnvelope size= "22px" />
                  <span className = "badge" >7</span>
                </a>
            </div>
            <div className = "right_header" >
                <h4> Valerie Luna </h4>
                <img src="luna.jfif" alt="luna_img" />
            </div>
          </div>
        </>
    );
}

export default Header;