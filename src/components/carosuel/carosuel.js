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
                <div className="row">
                    <img src={img2} height="550px" />
                    <div className="text col-md-2">
                        <h1 className="mt-5">POP UP HAPPINESS</h1>
                        <button style={{fontSize:"22px",margin:"0px 10px"}} className="btn btn-primary">CONTACT US</button>
                    </div>
                </div>
                <div>
                    <img src={img1} height="550px" />
                    <div className="text col-md-2">
                        <h1 className="mt-5">POP UP HAPPINESS</h1>
                        <button style={{fontSize:"22px",margin:"0px 10px"}} className="btn btn-primary">CONTACT US</button>
                    </div>
                </div>
                <div>
                    <img src={img2} height="550px" />
                    <div className="text col-md-2">
                        <h1 className="mt-5">POP UP HAPPINESS</h1>
                        <button style={{fontSize:"22px",margin:"0px 10px"}} className="btn btn-primary">CONTACT US</button>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
