import React, { useState } from 'react';
import BannerAd from './BannerAd';
import Native from './Native';
import PopUnder from './PopUnder';
import Skim from './Skim';

const Adds = () => {
    // creating states for the tabs
    const [popUnder, setPopUnder] = useState(false);
    const [bannerAd, setBannerAd] = useState(false);
    const [native, setNative] = useState(false);
    const [skim, setSkim] = useState(true);

    // handling toggle of awards, education and experience
    const handleLoading = (e) => {
        const clickedOn = e.target.innerHTML;
        if (clickedOn === 'BANNER AD') {
            setBannerAd(true);
            setPopUnder(false);
            setNative(false);
            setSkim(false);
        } else if (clickedOn === 'POP-UNDER') {
            setBannerAd(false);
            setPopUnder(true);
            setNative(false);
            setSkim(false);
        } else if (clickedOn === 'NATIVE') {
            setBannerAd(false);
            setPopUnder(false);
            setNative(true);
            setSkim(false);
        } else if (clickedOn === 'SKIM') {
            setBannerAd(false);
            setPopUnder(false);
            setNative(false);
            setSkim(true);
        }
    }

    return (
        <section className='py-5'>
            <div className="container mb-3">
                <div className="row align-items-center">
                    <div className="col-4"><hr /></div>
                    <div className="col-4 textSecondary">
                        <p className='text-center fs-4'>ADDS</p>
                    </div>
                    <div className="col-4"><hr /></div>
                </div>
                <div
                    className='row my-5'>
                    <div
                        class={`col-lg-3 mb-3 p-2 text-center cursor-pointer rounded-pill shadow ${popUnder && "bgPrimary text-white rounded-pill shadow"}`}
                    >
                        <p
                            onClick={handleLoading}
                            className='text-center fs-4 mb-0'>POP-UNDER</p>
                    </div>

                    <div
                        class={`col-lg-3 mb-3 p-2 text-center cursor-pointer rounded-pill shadow ${bannerAd && "bgPrimary text-white "}`}
                    >
                        <p
                            onClick={handleLoading}
                            className='text-center fs-4 mb-0'>BANNER AD</p>
                    </div>
                    <div
                        class={`col-lg-3 mb-3 p-2 text-center cursor-pointer rounded-pill shadow ${native && "bgPrimary text-white "}`}
                    >
                        <p
                            onClick={handleLoading}
                            className='text-center fs-4 mb-0'>NATIVE</p>
                    </div>
                    <div
                        class={`col-lg-3 mb-3 p-2 text-center cursor-pointer rounded-pill shadow ${skim && "bgPrimary text-white "}`}
                    >
                        <p
                            onClick={handleLoading}
                            className='text-center fs-4 mb-0'>SKIM</p>
                    </div>



                    <div className="row">
                        {
                            popUnder && <PopUnder />
                        }
                        {
                            bannerAd && <BannerAd />
                        }
                        {
                            native && <Native />
                        }
                        {
                            skim && <Skim />
                        }
                    </div>




                </div>

            </div>

        </section>
    );
};

export default Adds;