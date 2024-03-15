import React from 'react';
import Image from 'next/image';
import MH from '/public/MH2.png';
import Login from './Login';

interface NavBarProps {
    color: string;
    textColor: string;
}


const NavBar: React.FC<NavBarProps> = ({ color, textColor }) => {

    return(
    <section style={{backgroundColor: color, color: textColor}} className='font-Righteous py-[0.5rem] fixed min-w-full'>
        <nav className='flex justify-between ml-9'>
        <Image 
        src={MH}
        alt="Logo"
        style={{ objectFit: 'cover' }}
        className=' h-9 w-10 cursor-pointer'
        />
        <ul className='flex gap-10 items-center mr-10'>
            <li className='cursor-pointer'><a>Home</a></li>
            <li className='cursor-pointer'><a>About Us</a></li>
            <li className='cursor-pointer'><a>Market Place</a></li>
            <li className='cursor-pointer'><a>Community</a></li>
            <li style={{backgroundColor: textColor,color:color}}><button className=' px-4 cursor-pointer' ><a></a>Login</button></li>
        </ul>
        </nav>
        

    </section>
    );
} 

export default NavBar;