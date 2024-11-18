import React from 'react';
import lg2 from '../assets/lg2.png';
import wlcm from '../assets/wlcm.png';
import img from '../assets/img.png';
import clb from '../assets/clb.png';
import crn from '../assets/crn.png';
import logo from '../assets/logo.png';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Home = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 '>
                    <div className='pt-20 lg:pt-40 px-4 lg:pl-20 flex flex-col items-center mt-40 lg:items-start'>
                        <img src={crn} alt="" className='hidden lg:block absolute -mt-[88px] -ml-16' />
                        <img src={wlcm} alt="" className='w-[300px] md:w-[500px] lg:w-[600px] self-start' />
                        <div className='flex flex-col items-center lg:flex-row mt-5'>
                            <div className='group'>
                                <img 
                                    src={lg2} 
                                    alt="" 
                                    className='w-[250px] md:w-[400px] lg:w-[550px] h-auto max-h-[100px] md:max-h-[125px] mb-4 lg:mb-0 transition-transform duration-300 transform group-hover:rotate-6' 
                                />
                            </div>
                            <div className='group'>
                                <img 
                                    src={clb} 
                                    alt="" 
                                    className='w-[150px] md:w-[220px] lg:w-[270px] h-auto max-h-[60px] md:max-h-[90px] mt-2 lg:mt-5 transition-transform duration-300 transform group-hover:rotate-6' 
                                />
                            </div>
                        </div>

                        <p className='text-white text-xl pb-24 md:text-3xl lg:text-4xl font-semibold p-5 ml-2 text-center lg:text-left'>
                            We are the Tech club of SRM
                        </p>
                    </div>

                    <div className='hidden lg:block'>
                        <div className='group'>
                            <img 
                                src={img} 
                                alt="" 
                                className='w-[250px] md:w-[350px] lg:w-[400px] transition-transform duration-300 transform group-hover:rotate-6' 
                            />
                        </div>
                    </div>
                </div>

                {/* Social Media Links Section */}
                <div className='flex justify-center items-center gap-8 pb-16'>
                    <a
                        href='https://www.instagram.com/codenex_srmist'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'
                    >
                        <GrInstagram size={20} className='text-white hover:text-cyan-300' />
                    </a>
                    <a
                        href='https://x.com/CodeNexClub?t=YuNrpDf1yt_E6nFkK7jyUA&s=09'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'
                    >
                        <FaTwitter size={20} className='text-white hover:text-cyan-300' />
                    </a>
                    <a
                        href='https://www.linkedin.com/company/code-nex-club-srmist/posts/?feedView=all'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'
                    >
                        <FaLinkedinIn size={20} className='text-white hover:text-cyan-300' />
                    </a>
                    <a
                        href='https://whatsapp.com/channel/0029VamkMtaEgGfG4qkPDZ3V'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'
                    >
                        <IoLogoWhatsapp size={20} className='text-white hover:text-cyan-300' />
                    </a>
                </div>

                <div className='px-6 sm:px-12 md:px-24'>
                    <div>
                        <p className='text-xl text-white mt-16'>ABOUT US</p>
                    </div>

                    <div className='flex flex-col md:flex-col lg:flex-row pb-10'>
                        <div className='flex-1'>
                            <p className='text-white font-semibold text-2xl md:text-3xl w-full mt-16'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque obcaecati quasi!
                            </p>
                            <p className='text-white font-semibold text-2xl md:text-3xl w-full mt-12'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut perferendis id qui quaerat libero dignissimos beatae iusto illo voluptatem voluptatum, reprehenderit numquam? Sit, inventore doloremque error harum voluptates tempora et ullam.
                            </p>

                            <a href="">
                                <button className='border-2 border-purple-600 rounded-full p-2 sm:p-3 text-purple-600 hover:border-purple-400 hover:text-purple-400 mt-10'>
                                    MEET THE TEAM
                                </button>
                            </a>
                        </div>

                        <div className='flex justify-center md:pt-10 mt-6 lg:mt-0 lg:ml-[200px]'>
                            <img src={logo} alt="Logo" className='w-full max-w-[300px] md:max-w-[400px] h-auto' />
                        </div>
                    </div>
                </div>
                
                <div className='pb-[150px] lg:pb-[420px] md:pb-[250px]'>
                   <img src={t1} alt="" className='absolute w-[100%] mt-[55px] sm:mt-12 md:mt-28 lg:mt-60' />
                   <img src={t2} alt="" className='absolute w-[100%]' />
                </div> 
            </div>
        </>
    );
};

export default Home;
