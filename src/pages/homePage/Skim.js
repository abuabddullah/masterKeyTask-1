import React from 'react';
import { BiLinkExternal } from "react-icons/bi";

const Skim = () => {
    return (
        <section className='row mt-5'>
            <div className="col-lg-6">
                <img className='img-fluid h-100 ObjectfitCover' src="https://source.unsplash.com/600x400/?math,study" alt="" />
            </div>
            <div className="col-lg-6 ps-lg-5 d-flex flex-column justify-content-between">
                <p className='textPrimary fs-3 mb-0'>SKIM</p>
                <p className='fs-4'>
                    SKIM" is a link that a publisher inserts on a specific site
                    element, and after clicking on it, an advertisement appears
                    to the user.
                    SKIM gives 100% control of your sold traffic amount, higher
                    CR to advertisers and CPM rates to publishers.
                </p>
                <a href="#" className='text-decoration-none fs-4' target="_blank" rel="noopener noreferrer">Learn more <BiLinkExternal/></a>
            </div>
        </section>
    );
};

export default Skim;