import React from 'react';

const Statistics = () => {
    return (
        <section   className='py-5 bgSecondary'>
            <div   className="container mb-3">
                <p   className='text-center fs-4 text-white mb-5'>Our Statistics</p>
                <div   className="row">
                    <div 
                    style={{height: '280px', width: '280px',border: '1px dotted #fff'}}
                      className="col-lg-4 mb-3 text-white rounded-circle d-flex flex-column justify-content-center align-items-center mx-auto">
                        <h1   className='display-4 fw-bold
                        '>1BN+</h1>
                        <p   className='fs-3'>Daily Impression</p>
                    </div>
                    <div 
                    style={{height: '280px', width: '280px',border: '1px solid #fff'}}
                      className="col-lg-4 mb-3 text-white rounded-circle d-flex flex-column justify-content-center align-items-center mx-auto bg-white">
                        <h1   className='display-4 fw-bold
                        textSecondary'>$500K+</h1>
                        <p   className='fs-3 textSecondary'>Paid</p>
                    </div>
                    <div 
                    style={{height: '280px', width: '280px',border: '1px solid #FF6F00'}}
                      className="col-lg-4 mb-3 text-white rounded-circle d-flex flex-column justify-content-center align-items-center mx-auto bgPrimary">
                        <h1   className='display-4 fw-bold
                        '>8K+</h1>
                        <p   className='fs-3'>Global Publisher</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Statistics;