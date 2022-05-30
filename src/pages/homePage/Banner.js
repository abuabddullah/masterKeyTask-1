import React from 'react';

const Banner = () => {
    return (
        <section  className='py-5'>
            <div   className="container">
                <div   className="row align-items-center">
                    <div   className="col-lg-6">
                        <h3   className='textSecondary mb-3'>Continue With MathonGo</h3>
                        <p>Learn how to attack Math questions with Bd's one of the Best Teachers</p>
                    </div>
                    <div   className="col-lg-6">
                        <img   className='img-fluid' src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZHksIG1hdGh8fHx8fHwxNjUzODY2NjQ1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;