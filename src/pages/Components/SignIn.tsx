import React from 'react';
import Image from 'next/image';
import Design from '/public/Group 153.png';
import NavBar from './NavBar';
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SignIn:React.FC = () => {
    return(
        <section>
            <div className='flex'>
                <NavBar color="#B2C8B8" textColor='#214646'/>
            </div>
            <div className='flex relative'>
                <div className='absolute flex px-4 w-[20rem] h-[26rem] inset-x-[13.4rem] inset-y-[9rem] bg-[#B2C8B8] z-10 rounded-md shadow-[12px_15px_0px_-1px_rgb(235,166,62)] shadow-[#EBA63E]'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-[#214638] font-Franchise flex justify-center text-5xl'>Hello Bro!</h1>
                    <p className='text-[#214638] text-xl text-center font-Righteous pt-5 pb-4'> delectus inventore alias eligendi, eos aperiam explicabo dignissimos illum dolorem iusto placeat.</p>
                    <div className='flex justify-center mt-3'>
                    <button type="submit" className='text-[#F3DBAF] bg-[#214638] flex justify-center py-2 rounded-3xl px-3 font-Righteous w-44'> Sign Up</button>
                    </div>
                    </div>
                </div>
                <div className='bg-[#214638] w-[50%] relative'>
                    <Image
                        src={Design}
                        alt="sjdv"
                        style={{objectFit:'cover'}}
                        className='w-full h-[100vh]'
                    />
                </div>

                <div className='bg-[#F3DBAF] w-[50%] z-20'> 
                    <div className='pt-14'>
                        <h1 className='font-Franchise text-[#214638] text-7xl text-center'> Sign up </h1>
                    </div>

                    <ul className='flex gap-10 justify-center mt-9'>
                        <li className='bg-[#214638] px-2 py-2 rounded-full text-gray-200'><FaFacebookF/></li>
                        <li className='bg-[#214638] px-2 py-2 rounded-full text-gray-200'><FaGooglePlusG/></li>
                        <li className='bg-[#214638] px-2 py-2 rounded-full text-gray-200'><FaLinkedinIn/></li>
                    </ul>

                    <p className='font-Righteous text-[#214638] text-xl pt-5 text-center'>or use your email account</p>
                    <form>
                        <div className='flex items-center flex-col gap-6 mt-12'>
                            <input type="text" className='font-Righteous bg-[#214638] px-4 py-4 w-[24rem] rounded-[2rem] text-[#F3DBAF]' placeholder='Name' />
                            <input type="email" className='font-Righteous bg-[#214638] px-4 py-4 w-[24rem] rounded-[2rem]' placeholder='Email' />
                            <input type="password" className='font-Righteous bg-[#214638] px-4 py-4 w-[24rem] rounded-[2rem]' placeholder='Password' />
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className='text-[#F3DBAF] bg-[#214638] flex justify-center py-4 rounded-full px-20 font-Righteous mt-10'> Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
