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
                                <Card.Img className="mt-2" variant="top" src="./millimage.jpg" width="20px" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2 mb-1">
                                <Card.Img className="mt-2" variant="top" src="./millimage.jpg" width="20px" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2  mb-1">
                                <Card.Img className="mt-2" variant="top" src="./millimage.jpg" width="20px" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2  mb-1">
                                <Card.Img className="mt-2" variant="top" src="./millimage.jpg" width="20px" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" src="./millimage.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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
                            <Card.Img className="mt-2" variant="top" src="./background.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2 mb-1">
                            <Card.Img className="mt-2" variant="top" src="./background.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" src="./background.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" src="./background.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-2  mb-1">
                            <Card.Img className="mt-2" variant="top" src="./background.jpg" width="20px" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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
