import React from 'react';
import { BiLinkExternal } from "react-icons/bi";

const Native = () => {
    return (
        <section className='row mt-5'>
            <div className="col-lg-6">
                <img className='img-fluid h-100 ObjectfitCover' src="https://source.unsplash.com/600x400/?math,study,chemistry" alt="" />
            </div>
            <div className="col-lg-6 ps-lg-5 d-flex flex-column justify-content-between">
                <p className='textPrimary fs-3 mb-0'>NATIVE</p>
                <p className='fs-4'>
                    Ad format with the image and the title, that perfectly fits into
                    the content of the site.
                    Native ads are placed in the most visible areas of the page
                    and, thus, this format shows good results and the level of
                    interaction
                </p>
                <a href="#" className='text-decoration-none fs-4' target="_blank" rel="noopener noreferrer">Learn more <BiLinkExternal /></a>
            </div>
        </section>
    );
};

export default Native;