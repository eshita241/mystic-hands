import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import final from '/public/final.png';

const Final: React.FC = () => {
    return (
        <section className='w-full h-full flex items-center bg-[#7DB2AF]'>
            <NavBar color="#214646" textColor='#F3DBAF'/>
            <div className="container mx-auto mt-24">
                <div className="flex justify-center gap-10">
                    <div className="w-1/3 bg-[#214646] p-4 rounded-3xl flex justify-center">
                        <p className="text-[#F3DBAF] font-Righteous">Text with white background and black colored text</p>
                    </div>
                    <div className="w-1/6 bg-[#F3DBAF] p-4 rounded-3xl flex justify-center">
                        <p className=" font-Righteous text-[#214646]">Back to shopping</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Final;
