import React, { Component } from 'react';
import './contact.css'

export class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ""
        }
    }

    render() {
        return (
            <div className="contact mx-1">
                <div className="row">
                    <div className="col-md-5 text-center">
                        <p>We are open for delivery.</p>
                        <p>Contact us for home delivery.</p>
                        <i style={{ fontSize: "25px", backgroundColor: "white" }} class="far fa-phone-alt"></i><span> Call Us </span>
                        <span><p>+977 986-0673-130</p></span>
                        <span><p>+977 986-0673-119</p></span>
                        <i style={{ fontSize: "25px", backgroundColor: "white" }} class="far fa-map-marker-alt"></i><span> Delivery Area</span>
                        <span><p>Chitwan | Gaindakot</p></span>
                        <i style={{ fontSize: "25px", backgroundColor: "white" }} class="far fa-clock"></i><span> Delivery Time</span>
                        <span><p>24 Hours Delivery</p></span>
                    </div>
                    <form className="form col-md-6 mt-3 ">
                        <input type="text" placeholder="Name" required></input><br /><br />
                        <input className="email" name="email" type="email" placeholder="Email Address" required></input><br /><br />
                        <input type="text" placeholder="Write Review of our service" required></input>
                        <br />
                        <br />
                            <button type="submit" className="btn btn-success text-center">Send a Review</button>
                    </form>
                    <div className="col-md-1"></div>

                </div>
            </div>
        )
    }
}
