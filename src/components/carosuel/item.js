import React from 'react';
import { Card, Carousel, CardColumns } from 'react-bootstrap';
import './item.css'

export const Items = () => {
    return (
        <div>
            <h1 className="text-center">Our Products</h1>
            <Carousel >
                <Carousel.Item  >
                    <CardColumns className="row mt-5" >
                            <div className="col-md-1"></div>
                            <Card className="col-md-2 mb-1 ">
                                <Card.Img className="mt-2" variant="top" height="210px" src="https://i2.wp.com/liquorhaus-sg.com/wp-content/uploads/2020/06/chivas-regal-18-year-gold-signature-whisky-70cl-1.png?fit=1000%2C1000&ssl=1" width="20px" />
                                <Card.Body>
                                    <Card.Title className="text-center">Chivas Regal</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2 mb-1">
                                <Card.Img className="mt-2" variant="top" height="210px" src="http://liquornepal.com/wp-content/uploads/2021/07/RUSLAN-VODKA-750-ML-5f9e1977b0a70.jpg" width="20px" />
                                <Card.Body>
                                    <Card.Title className="text-center">Ruslan Vodka</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2  mb-1">
                                <Card.Img className="mt-2" variant="top" height="210px" src="https://www.himalmart.com/public/upload/product/extra/tuborg-beer-bottle-330ml-60e57c7e918fd.jpg" width="20px" />
                                <Card.Body>
                                    <Card.Title className="text-center">Tuborg Gold Beer</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2  mb-1">
                                <Card.Img className="mt-2" variant="top" height="210px" src="https://www.heinemann-shop.com/medias/518249-527Wx527H?context=bWFzdGVyfGltYWdlc3wxMzMyNTR8aW1hZ2UvanBlZ3xoZDAvaDVhLzk1OTE5MDc0NTA5MTAvNTE4MjQ5XzUyN1d4NTI3SHwzZWQ5ZGQ0NDEwMDRkMmU1ZThiMTQxYTlhYTU2ZDU2ZTRmYTUzMzU2YTgwMTQwOWVjZGZiNmEwMmU3NDdiMzYw&v=1620338156035" width="20px" />
                                <Card.Body>
                                    <Card.Title className="text-center">Jhonnie Walker's Blue Label Whiskey 700 ML</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://www.gyapu.com/public/780-1024/files/E9E19FF330D5AB1-BC%20750ml%203D%20Bottles%201080px%20by%201080px.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Old Durbar (Black Chimney)</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                            <div className="col-md-1"></div>
                    </CardColumns>
                </Carousel.Item>
                <Carousel.Item>
                    <CardColumns className="row mr-1 mt-5">
                        <div className="col-md-1"></div>
                        <Card className="col-md-2 mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://cheers.com.np/uploads/products/92603388988145564434348004004924407976952.png" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Gurkha Premium Beer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2 mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://www.himalmart.com/public/upload/product/extra/carlsberg-bottle-beer-650ml-60e57cbfcb059.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Carlsberg Beer</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://www.okdam.com/public/upload/product/extra/Khukri-XXX-Rum---750ML-5fc074ecbbd99.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Khukuri Rum</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px"  src="https://myliquorhub.com/wp-content/uploads/2019/11/Glenfiddich-18years-2.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Glenfiddich Whiskey</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://liquorhaus-sg.com/wp-content/uploads/2020/06/jack-daniels.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Jack Daniel's Tennessee Whiskey 700 ML</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className="col-md-1"></div>
                    </CardColumns>
                </Carousel.Item>
                <Carousel.Item>
                    <CardColumns className="row mr-1 mt-5">
                        <div className="col-md-1"></div>
                        <Card className="col-md-2 mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://i1.wp.com/www.eeatit.com/wp-content/uploads/2021/01/royal-stag-e1610003762609.png?fit=500%2C500&ssl=1" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Seagram's Royal Stag 750 ML</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2 mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://cheers.com.np/uploads/products/8425044166398667915410528102736737863605.png" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">San Miguel Beer 650 ML</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://m.media-amazon.com/images/I/41g7GjPoHmL.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Budweiser Beer </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px"  src="https://www.himalmart.com/public/upload/product/extra/JOHNNINE-WALKER-DOUBLE-BLACK-1-LTR-5fc3312751dfa.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Jhonnie Walker Double Black 750 ML </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" height="210px" src="https://cheers.com.np/uploads/products/1598697173446345494286468571485531160528.png" width="20px" />
                            <Card.Body>
                                <Card.Title className="text-center">Corona Extra Beer Bottle</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className="col-md-1"></div>
                    </CardColumns>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
