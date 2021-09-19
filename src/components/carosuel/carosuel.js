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
                    <img src={img2} height="90%" />
                    <h1 className=" col-md-2 text  mt-5 pl-3">POP UP HAPPINESS</h1>
                </div>
                <div>
                    <img src={img1} height="90%" />
                    <h1 className=" col-md-2 text mt-5 pl-3">POP UP HAPPINESS</h1>

                </div>
                <div>
                    <img src={img2} height="90%" />
                    <h1 className=" col-md-2 text mt-5 pl-3">POP UP HAPPINESS</h1>

                </div>
            </Carousel>
        </div>
    )
}
