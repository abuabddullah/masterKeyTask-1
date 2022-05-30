import React from 'react';
import { HiSpeakerphone } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const availables = [
    { icon: HiSpeakerphone, text: 'Speak with our experts', link: '#' },
    { icon: FaPaperPlane, text: 'Send us your questions', link: '#' },
    { icon: RiContactsFill, text: 'Contact us', link: '#' }
]

const Connects = () => {
    return (
        <section   className='py-5'>
            <div   className="container mb-3">
                <div   className="row align-items-center">
                    <div   className="col-4"><hr /></div>
                    <div   className="col-4 textSecondary">
                        <p   className='text-center fs-4'>AVAILABLE FOR EVERYONE</p>
                    </div>
                    <div   className="col-4"><hr /></div>
                </div>
                <p   className='text-center mb-5'>Be connected with us</p>
                <div   className="row">
                    {
                        availables.map((item, index) => <div   className="col-lg-4 text-center mb-3">
                            <div
                                style={{ height: '150px', width: "150px" }}
                                  className='bg-white d-flex align-items-center justify-content-center  rounded-circle shadow-sm mx-auto'>
                                <item.icon   className='icon-big display-1 textSecondary' />
                            </div>
                            <p   className='textSecondary fw-bold mt-3 fs-4'>{item.text}</p>
                            <button   className='btn bgSecondary text-white rounded-pill px-5'>Hello {index + 1}</button>


                        </div>)
                    }

                </div>

            </div>

        </section>
    );
};

export default Connects;