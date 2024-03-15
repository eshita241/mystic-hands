import React from 'react';
import Image from 'next/image';
import Vector from '/public/Vector 16.png';
import NavBar from './NavBar';
import Market from '/public/MarketPlace.png';

const MarketPlace: React.FC = () => {
    return (
        <section className='bg-[#214646]'>
            <NavBar color="#89B092" textColor='#214646'/>
            <div className=''>
                <div className='flex justify-center'>
                <div className='relative left-[10%] transform -translate-x-1/2 bg-[#F3DBAF] rounded-md px-6 py-4'>
                        <h1 className='text-[#214646] font-Franchise text-6xl'>Market Place</h1>
                        
                    </div>
                    <div className='absolute'>
                    
                    <Image
                        src={Market}
                        alt="hhsddh"
                        className='w-[55rem] h-[70vh] mt-44 mb-60'
                        />
                    </div>
                    
                    
                </div>
                
                <div>
                    <Image
                        src={Vector}
                        alt="Vector Image"
                        className='w-[100vw] h-[100vh]  '
                    />
                </div>
            </div>
        </section>
    );
}

export default MarketPlace;
