import React from 'react';
import './home.css'
import { NavBar } from '../navbar/navbar'
import { CarosuelSilder } from '../carosuel/carosuel';
import { Items } from '../carosuel/item';
import img1 from '../images/image2.png';
import { Contact } from './contact';
import { Footer } from '../footer/footer';
import { TopNavBar } from '../navbar/topnavbar';
export const Home = () => {
    return (
        <div class="main">   
            <TopNavBar></TopNavBar>
            <NavBar></NavBar>
            <div className="info text-center">
                <h1 >Booze Chitwan : " <i>Pop up the Happiness</i> "</h1>
                <h1 >24 HOURS DELIVERY SERIVCE AT YOUR DOORS.</h1>
            </div>
            <CarosuelSilder></CarosuelSilder>
            <div className="about" id="HOME">
                <h1  className="text-center mt-2 pt-3">THE HOME OF LIQUOR</h1>
                <div className="row mt-4">
                    <div className="col-md-5" >

                        <p>Booze chitwan, one of the best online liquor shop is destined to provide service to you guys. Hurry up !!</p>
                        <p>We are online delivery service oriented. Call us for delivery. </p>
                        <p>Delivery Time : <strong>24 Hrs Delivery </strong></p>
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
            <div id="CONTACT">
                <h1 className="text-center">Contact Us</h1>
                <Contact></Contact>
                <Footer></Footer>
            </div>


        </div>
    )
}
