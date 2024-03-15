import React from 'react';
import Hero from '/public/hero.png';
import Image from 'next/image';


const Heros: React.FC = () => {
    return(
        <section >
            <Image
            src={Hero}
            alt="hero image"
            className='w-[100vw] h-[100vh]'/>
            <button className='text-[#F7CBAD] translate-x-[69rem] bg-[#542C35] px-16 py-5 rounded-md -translate-y-[56.4rem] font-Franchise text-3xl shadow-xl'>Welcome to mystic hands</button>
        </section>
    );
}

export default Heros;