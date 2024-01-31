import React from 'react';
import img from '../../assets/images/web.svg';
import img2 from '../../assets/images/app.svg';
import img3 from '../../assets/images/hosting.svg';
import img4 from '../../assets/images/consultation.svg';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Services = () => {

    return (
        <div id="services">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="uppercase text-[1.5rem] text-center font-semibold lg:text-[3rem] w-full lg:w-[30%] leading-[3rem]">services</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Card for Web Development */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-lg p-3 group">
                            <div className="m-2 text-center text-sm">
                                <img alt="Web Development" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Web Development</h2>
                                
                            </div>
                        </div>

                        {/* Card for Mobile App Development */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-lg p-3 group">
                            <div className="m-2 text-center text-sm">
                                <img alt="Mobile App Development" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Mobile App Development</h2>
                               
                            </div>
                        </div>

                        {/* Card for Domain and Hosting Services */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-lg p-3 group">
                            <div className="m-2 text-center text-sm">
                                <img alt="Domain and Hosting Services" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Domain and Hosting Services</h2>
                               
                            </div>
                        </div>

                        {/* Card for General IT Consultations */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-lg p-3 group">
                            <div className="m-2 text-center text-sm">
                                <img alt="General IT Consultations" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                <h2 className="font-semibold my-4 text-2xl text-center">General IT Consultations</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration Section */}
            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col lg:flex-row py-8 justify-between items-center" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-[#e5e5e5] mb-2 flex items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" className='fill-current'>
                                    <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                                </svg>
                                <h3 className="text-3xl text-[#e5e5e5] font-bold">We <span className='font-black'>
                                    <TypeAnimation 
                                        sequence={['Collaborate', 3000, 'Build', 3000]}
                                        speed={50}
                                        className="text-3xl text-[#e5e5e5] font-bold"
                                        repeat={Infinity}
                                        wrapper="span"
                                    />
                                </span></h3>
                            </div>
                            <div>
                                <p className=' mx-2 text-gray-600 text-sm font-semibold'>We collaborate with your existing tech team to scale existing software applications or design customized software applications that suits your everyday need.</p>
                    
                            
                            </div>
                             <Link
                                to="contact" 
                                smooth={true} 
                                duration={500} 
                                className="bg-sky-700 my-5 mr-4 text-white font-semibold py-2 px-4 rounded-3xl hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-lg flex items-center justify-center"
                            >
                                <span className="mr-2">Let's Talk</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
