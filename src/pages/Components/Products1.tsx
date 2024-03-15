import React from 'react';
import Image from 'next/image';
import Image1 from '/public/Group 9.png';

const ProductDisplay:React.FC = () => {
    return (
        <section className='bg-[#F7CBAD]  h-screen w-screen pt-24'>
            <div className='flex justify-center'>
            <div className='flex gap-8'>
                <Image
                src={Image1}
                alt="abc"
                />
                <h1 className='bg-[#542C35] text-[#F7CBAD] flex items-center font-Franchise flex-wrap px-4 text-4xl rounded-md'>A Glimpse of the pottery products</h1>
                <Image
                src={Image1}
                alt="abc"
                />
            </div>
            </div>
           
        </section>
    );
}

export default ProductDisplay;