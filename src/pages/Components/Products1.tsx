import React from 'react';
import Image from 'next/image';
import Image1 from '/public/Group 9.png';
import pot1 from '/public/pot1.png';
import pot2 from '/public/pot2.png';
import pot3 from '/public/pot3.png';
import pot4 from '/public/pot4.png';

const Product1:React.FC = () => {
    return (
        <section className='bg-[#F7CBAD]  h-screen w-screen pt-24 px-11'>
            <div className='flex gap-8 justify-center'>
                <Image
                src={Image1}
                alt="abc"
                />
                <h1 className='bg-[#542C35] text-[#F7CBAD] flex items-center font-Franchise flex-wrap px-4 text-3xl rounded-md'>A Glimpse of the pottery products.</h1>
                <Image
                src={Image1}
                alt="abc"
                />
            </div>
            <div className='pt-12'>
            <div className='flex justify-center gap-64'>
                <div className='flex gap-72'> 
                    <div className='flex items-center gap-7'>
                    <Image
                src={pot1}
                alt="shv"
                className=' h-44 w-44 border-8 rounded-lg border-[#214638]'
                />
                <h1 className='bg-[#214638] text-[#F7CBAD] font-bold flex items-center h-20 w-20 justify-center rounded-md shadow-[12px_15px_0px_-1px_rgb(235,166,62)] shadow-[#EBA63E]'>$4</h1>
                    </div>
                    <div className='flex items-center gap-7'>
                    <Image
                src={pot2}
                alt="shv"
                className=' h-44 w-44 border-8 rounded-lg border-[#214638] '
                />
                 <h1 className='bg-[#214638] text-[#F7CBAD] font-bold  flex items-center h-20 w-20 justify-center rounded-md shadow-[12px_15px_0px_-1px_rgb(235,166,62)] shadow-[#EBA63E]'>$4</h1>
                    </div>
                </div>
                
                
            </div>
            <div className='pt-6'>
            <div className='flex justify-center ml-72 gap-64'>
            <div className='flex items-center gap-7'>
            <h1 className='bg-[#214638] text-[#F7CBAD] flex items-center font-bold  h-20 w-20 justify-center rounded-md shadow-[12px_15px_0px_-1px_rgb(235,166,62)] shadow-[#EBA63E]'>$4</h1>
                    <Image
                src={pot3}
                alt="shv"
                className=' h-44 w-44 border-8 rounded-lg border-[#214638]'
                />
                
                    </div>
                    <div className='flex items-center gap-7'>
                    <h1 className='bg-[#214638] text-[#F7CBAD] flex font-bold items-center h-20 w-20 justify-center rounded-md shadow-[12px_15px_0px_-1px_rgb(235,166,62)] shadow-[#EBA63E]'>$4</h1>
                    <Image
                src={pot4}
                alt="shv"
                className=' h-44 w-44 border-8 rounded-lg border-[#214638]'
                />
                
                    </div>
            </div>
            </div>
            </div>
            
           
        </section>
    );
}

export default Product1;