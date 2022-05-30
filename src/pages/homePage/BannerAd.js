import React from 'react';

import { BiLinkExternal } from "react-icons/bi";

const BannerAd = () => {
    return (
        <section className='row mt-5'>
            <div className="col-lg-6">
                <img className='img-fluid h-100 ObjectfitCover' src="https://source.unsplash.com/600x400/?math,study,lesson" alt="" />
            </div>
            <div className="col-lg-6 ps-lg-5 d-flex flex-column justify-content-between">
                <p className='textPrimary fs-3 mb-0'>BANNER AD
                </p>
                <p className='fs-4'>
                    Choose between the available banner formats. Highly
                    effective ad for visibility.
                </p>
                <a href="#" className='text-decoration-none fs-4' target="_blank" rel="noopener noreferrer">Learn more <BiLinkExternal /></a>
            </div>
        </section>
    );
};

export default BannerAd;