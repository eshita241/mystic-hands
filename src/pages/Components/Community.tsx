import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import contri from '/public/contri.png';

const Community: React.FC = () => {
    return (
        <section className='bg-[rgb(243,219,175)] w-[100vw] h-[100vh]'>
            <NavBar color="#214646" textColor="#F3DBAF"/>
            <div className='flex flex-col gap-20'>
            <div className='flex justify-center gap-12'>
                <Image
                src={contri}
                alt="gv"
                className='h-24 w-24 mt-12'
                />
                
                <div className='flex justify-center bg-[#214646] rounded-md px-4 py-4 mt-12 w-[30rem]'>
                    <h1 className='text-[#F3DBAF] font-Franchise text-5xl'>Let's build a community</h1>
                </div>
                <Image
                src={contri}
                alt="gv"
                className='h-24 w-24 mt-12'
                />
            </div>
            <div className="flex justify-center gap-32">
                <div className="w-[21rem] h-[27rem] bg-[#214646] rounded-2xl flex justify-center">
                    <h1 className=' text-[#F3DBAF] font-Franchise text-5xl flex justify-center items-center px-12 text-center leading-relaxed hover:bg-[#EBA63E] hover:text-black'>Want to contribute to the website ?</h1>
                </div>
                <div className="w-[21rem] h-[27rem] bg-[#214646] rounded-2xl flex justify-center">
                <h1 className=' text-[#F3DBAF] font-Franchise text-5xl flex justify-center items-center px-12 text-center leading-snug hover:bg-[#EBA63E] hover:text-black'>Would you like to collaborate with fellow artisans ?</h1>
                </div>
            </div>
            </div>
            
        </section>
    );
}

export default Community;
