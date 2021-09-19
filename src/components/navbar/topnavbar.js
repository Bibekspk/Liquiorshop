import React, { useEffect } from 'react'
import { Navbar } from 'react-bootstrap';
import './topnavbar.css'

export const TopNavBar=()=> {

    return (
            <div className="topnavbar">
                <ul className="navlist">
                    <li className="navitem"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/boozechitwan"><i class="fab fa-facebook"></i></a></li>
                    <li className="navitem"><a href="/"><i class="fab fa-instagram "></i></a></li>
                    <li className="navitem" style={{color:"red", fontSize:"22px"}}>Delivery Hours : <strong><i style={{color:"red"}} class="fas fa-history"></i>  24 Hours Instant Delivery</strong> </li>
                    <li className="navitem num"><i style={{ fontSize: "20px", backgroundColor: "white" }} class="far fa-phone-alt"></i><p >&nbsp;986-0673-119, 986-0673-130</p> </li>
                </ul>
            </div>
    
    )
}
