import React from 'react';

const DualCarousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide position-relative py-5" data-bs-ride="carousel">
            <div className="carousel-indicators position-absolute top-0 startIndicatorPos translate-middle-x">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 mb-3 mb-lg-0 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <h5 className='textSecondary'>Evening Batch 1</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-1"></div>
                        <div className="col-lg-5 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                                <div className="col-6">
                                    <h5 className='textSecondary'>Evening Batch 2</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 mb-3 mb-lg-0 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <h5 className='textSecondary'>Evening Batch 3</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-1"></div>
                        <div className="col-lg-5 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                                <div className="col-6">
                                    <h5 className='textSecondary'>Evening Batch 4</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="carousel-item">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 mb-3 mb-lg-0 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <h5 className='textSecondary'>Morning Batch 1</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-1"></div>
                        <div className="col-lg-5 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                                <div className="col-6">
                                    <h5 className='textSecondary'>Morning Batch 2</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="carousel-item">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 mb-3 mb-lg-0 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <h5 className='textSecondary'>Morning Batch 3</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-md-block col-1"></div>
                        <div className="col-lg-5 bg-white rounded-3">
                            <div className="row m-2  py-2 borderCarousel rounded-3">
                                <div className="col-6">
                                    <img src="https://source.unsplash.com/200x200/?math,study" alt="" className='img-fluid' />
                                </div>
                                <div className="col-6">
                                    <h5 className='textSecondary'>Morning Batch 4</h5>
                                    <p className='h4 textSecondary'>
                                        Math,Physics
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className=''>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default DualCarousel;