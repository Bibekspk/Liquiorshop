import React from 'react';
import './home.css'
import { NavBar } from '../navbar/navbar'
import { CarosuelSilder } from '../carosuel/carosuel';
import { Items } from '../carosuel/item';
import img1 from '../images/image2.png';
import { Contact } from './contact';
import { Footer } from '../footer/footer';
export const Home = () => {
    return (
        <div class="main">
            <NavBar></NavBar>
            <CarosuelSilder></CarosuelSilder>
            <div className="about">
                <h1 id="HOME" className="text-center mt-2 pt-3">THE HOME OF LIQUOR</h1>
                <div className="row mt-4">
                    <div className="col-md-5" >

                        <p>Booze chitwan, one of the best online liquor shop is destined to provide service to you guys. Hurry up !!</p>
                        <p>We are online delivery service oriented. Call us for delivery. </p>
                        <p>Delivery Time : 10 AM to 8 PM </p>
                        <br />

                    </div>
                    <img className="col-md-6" src={img1} ></img>
                </div>
            </div>
            <div className="quote">
                <p className="text-center "><span class="material-icons">
                    format_quote
                </span> I USED TO THINK DRINKING WAS BAD FOR ME, SO I GAVE UP THINKING. <span class="material-icons">
                        format_quote
                    </span></p>
                
            </div>
            <div id="PRODUCTS">
                <Items></Items>
                <hr className="bottom"></hr>
            </div>
            <div>
                <h1 className="text-center">Contact Us</h1>
                <Contact></Contact>
                <Footer></Footer>
            </div>


        </div>
    )
}
