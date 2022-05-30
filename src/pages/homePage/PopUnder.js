import React from 'react';

import { BiLinkExternal } from "react-icons/bi";

const PopUnder = () => {
    return (
        <section className='row mt-5'>
            <div className="col-lg-6">
                <img className='img-fluid h-100 ObjectfitCover' src="https://source.unsplash.com/600x400/?math,study,physics" alt="" />
            </div>
            <div className="col-lg-6 ps-lg-5 d-flex flex-column justify-content-between">
                <p className='textPrimary fs-3 mb-0'>POP-UNDER

                </p>
                <p className='fs-4'>
                    This is one of the most popular ads. After user’s click, this
                    ad opens landing page in behind. So, the user experience is
                    not hampered much.
                </p>
                <a href="#" className='text-decoration-none fs-4' target="_blank" rel="noopener noreferrer">Learn more <BiLinkExternal /></a>
            </div>
        </section>
    );
};

export default PopUnder;