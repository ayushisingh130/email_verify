import React from "react";
import {AiFillDashboard} from "react-icons/ai";
import {FaUserCheck} from "react-icons/fa";
import {FaEnvelopeOpenText} from "react-icons/fa";
import {FaFileDownload} from "react-icons/fa";
import {FaPlug} from "react-icons/fa";
import {FaListAlt} from "react-icons/fa";
import {IoDocumentTextSharp} from "react-icons/io5";
import {GoCreditCard} from "react-icons/go";

const Container = ( )=> {
    return(
        <>
        <div className = "container" >
            <div className = "left_container" >
            <h3><AiFillDashboard color="white" size="20px"style={{marginBottom:"-2px",order : "2px red solid"}}/> Dashboard </h3>
            <hr/>
                <div className = "lists" >
                <h2 className="list_heading"> @ EMAIL VERIFICATON </h2>
                    <ul>
                        <li> <FaUserCheck/> Single email verification</li>
                        <li> <FaEnvelopeOpenText/> Bulk email verification </li>
                        <li> <FaFileDownload/> Download verified result </li>
                        <li> <FaPlug/> Email verification API </li>
                    </ul>
                </div>
                <hr/>

                <div className = "lists" >
                    <h2 className="list_heading" > INTEGRATION </h2>
                    <ul>
                        <li> <FaListAlt style = {{marginBottom:"-3px" }}/> My Apps </li>
                        <li> <IoDocumentTextSharp style = {{marginBottom:"-3px" }} /> Email Tools </li>
                    </ul>
                </div>
                <hr/>
                <div className = "lists" >
                    <h2 className="list_heading" > BILLING </h2>
                    <ul>
                        <li> <FaListAlt style={{marginBottom:"-3px" }}/> Manage plan </li>
                        <li> <IoDocumentTextSharp style={{marginBottom:"-3px" }}/> Invoices </li>
                        <li> <GoCreditCard style={{marginBottom:"-3px" }} /> Buy credits  </li>
                    </ul>
                </div>
            </div>
            <div className = "right_container" >
                <h1 className = "email_heading" > Single email verification </h1>
                <div className = "email_div" >
                    <label> Enter your email id below and check the results! </label>
                    <div className = "input_box" >
                        <input id="email_input" type = "text" placeholder = "Enter Email..." />
                        <button id= "verify_btn" > Verify </button>
                    </div>    
                </div>
            </div>
        </div>
        </>
    );
}

export default Container;