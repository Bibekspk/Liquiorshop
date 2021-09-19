import React from 'react';
import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/wallaper1.jpg';
import img2 from '../images/chivas.jpg';

export const CarosuelSilder = () => {
    return (
        <div className="carosuel">
            <Carousel showThumbs={false} autoPlay={true} stopOnHover={true} showArrows={true} showStatus={false}>
                <div >
                    <img src={img2} height="550px" />
                    <div className="text row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <h1 className="mt-5">POP UP HAPPINESS</h1>
                            <button  style={{ fontSize: "22px",width:"auto" }} className="btn btn-primary"><a href="#CONTACT">CONTACT US</a> </button>

                        </div>
                    </div>
                </div>
                <div>
                    <img src={img1} height="550px" />
                    <div className="text row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <h1 className="mt-5">POP UP HAPPINESS</h1>
                            <button  style={{ fontSize: "22px",width:"auto" }} className="btn btn-primary"><a href="#CONTACT">CONTACT US</a> </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img2} height="550px" />
                    <div className="text row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <h1 className="mt-5">POP UP HAPPINESS</h1>
                            <button  style={{ fontSize: "22px",width:"auto" }} className="btn btn-primary"><a href="#CONTACT">CONTACT US</a> </button>

                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
