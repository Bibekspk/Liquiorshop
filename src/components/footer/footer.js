import React from 'react';
import './footer.css'

export const Footer=()=> {
    return (
        <div className="footer">
            <footer className="row pt-5">
                <div className="col-md-6">
                    <ul>
                        <li className="text-center"><strong>Booze Chitwan</strong></li>
                        <li className="text-center"><a href="#HOME">Home</a></li>
                        <li className="text-center"><a href="#PRODUCTS">Products</a></li>
                        <li className="text-center"><a href="#CONTACT">Contact</a></li>
                    </ul>
                </div> 
                <div className="col-md-6">
                    <ul>
                        <li className="text-center"><strong>Contact Us</strong></li>
                        <li className="text-center">+977 9860673130</li>
                        <li className="text-center">+977 9860673119</li>  
                        <li className="text-center mt-2"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/boozechitwan"><i class="fab fa-facebook-f"></i></a>
                        <a href="/"><i class="fab fa-instagram "></i></a>
                        </li>
                    </ul>
                </div>
                <br/>
                <p className="text-center">Copyright @Booze Chitwan 2021</p>   
                <p className="text-center">All Rights Reserved.</p>   
            </footer>
        </div>
    )
}
