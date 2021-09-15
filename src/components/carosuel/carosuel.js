import React from 'react';
import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/background1.jpg';
import img2 from '../images/chivas.jpg';

export const CarosuelSilder = () => {
    return (
        <div className="carosuel">
            <Carousel showThumbs={false} autoPlay={true} stopOnHover={true} showArrows={true} showStatus={false}>
                <div>
                    <img src={img2} height="550px" />
                </div>
                <div>
                    <img src={img1} height="550px" />
                </div>
                <div>
                    <img src={img2} height="550px" />
                </div>
            </Carousel>
        </div>
    )
}
