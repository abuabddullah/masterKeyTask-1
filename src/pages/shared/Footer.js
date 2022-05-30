import './Footer.css'
import React from 'react';
import logo from '../../assets/img/logo.png'
import fb from '../../assets/img/fb-removebg-preview.png'
import yt from '../../assets/img/yt-removebg-preview.png'
import insta from '../../assets/img/insta-removebg-preview.png'

const socialIcons = [
    { ico: fb },
    { ico: yt },
    { ico: insta }
]

const Footer = () => {
    return (
        <footer className='bg-orange textSecondary py-5 p-md-5 pb-4'>
            <hr className='ms-md-auto text-white p-1' />
            <div className="container">


                <div className="row align-items-center mt-5">
                    <div className="col-12 col-md-3">
                        <p className='h6 textSecondary'>
                            We are social
                        </p>
                        <p className='fw-bold textSecondary'>
                            FOLLOW US
                        </p>
                        <ul class="list-inline">
                            {
                                socialIcons.map((icon, index) =>
                                    <li class="list-inline-item">
                                        <a href="3" target="_blank" rel="noopener noreferrer">
                                            <img src={icon.ico} alt=""
                                                width="30"
                                                className='img-fluid rounded-circle bg-transparent' />
                                        </a>
                                    </li>
                                )
                            }

                        </ul>
                        <div>
                            <img
                                src={logo}
                                width=""
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <p className='h6 textSecondary'>
                            Links
                        </p>
                        <ul className='list-unstyled'>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>ADVERTISERS</small></strong>
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>PUBLISHERS</small></strong>
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>INFLUENCERS</small></strong>
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>AD FORMATS</small></strong>
                            </a></li>
                        </ul>

                    </div>

                    <div className="col-12 col-md-3">
                        <p className='h6 textSecondary'>
                            Documentation
                        </p>
                        <ul className='list-unstyled'>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>TERMS & CONDITIONS
                                </small></strong>
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>PRIVACY POLICY
                                </small></strong>
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>CANCELLATION POLICY
                                </small></strong>
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary text-decoration-none'>
                                <strong><small>BLOG</small></strong>
                            </a></li>
                        </ul>

                    </div>

                    <div className="col-12 col-md-3">
                        <p className='h6 textSecondary'>
                        Support
                        </p>
                        <ul className='list-unstyled'>
                            <li><a href="#" target='_blank' className='textSecondary fw-bold text-decoration-none'>
                                FAQ
                                
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary fw-bold text-decoration-none'>
                                MEDIA KIT

                                
                            </a></li>
                            <li><a href="#" target='_blank' className='textSecondary fw-bold text-decoration-none'>
                                CONTACT US
                                
                            </a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;