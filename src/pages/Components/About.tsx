import React from 'react';
import Image from 'next/image';
import about from '/public/about.png';


const About: React.FC = () =>{
    return(
        <section className=' bg-[#F7CBAD] min-w-full h-screen'>
            <div className='flex justify-center gap-[14rem]'>
                <div className=' mx-10 text-center'>
                <button className=' font-Franchise text-[#F7CBAD] bg-[#542C35] px-4 py-2 text-5xl rounded text-center'>About Us</button>
                <div className='h-[32rem] w-[30rem] bg-[#542C35] mt-9 ml-2 rounded-xl shadow-[35px_35px_0px_-15px_rgb(235,166,62)] shadow-[#EBA63E] '>
                    <div className='flex flex-col text-black font-Righteous'>
                        <div className='flex gap-[1.4rem] mt-11 ml-11'>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        <div className='bg-[#F7CBAD] w-[1.4rem] h-[1.4rem] rounded-full'></div>
                        </div>
                        
                        <div className='bg-white m-11 p-2 rounded-md'>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum illum ea consectetur, accusamus officiis repudiandae iste. Sunt debitis aspernatur culpa consequuntur quasi nesciunt cupiditate eligendi voluptate officia excepturi, soluta hic blanditiis corrupti voluptates tempora, explicabo minima quaerat quae fugit accusantium ex praesentium est. Nesciunt esse vel saepe quis sunt hic!
                            </div>
                        <div> Deleniti eligendi ipsum quidem enim illum distinctio consectetur impedit provident cumque quia similique expedita consequuntur eveniet quis ipsam est fuga minima vel, perspiciatis ea dicta! Nisi tempora dolore voluptatibus quidem of</div>
                        </div>
                    </div>
                </div>
                </div>
    
            <div>
                <Image
                src={about}
                alt="about section"
                className='h-[39rem] w-[37rem]'
                />
            </div>
            </div>
            
        </section>
    );
}

export default About;