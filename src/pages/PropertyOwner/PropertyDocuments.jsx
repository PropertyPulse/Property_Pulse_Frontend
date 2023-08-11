import React from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import { IoLogoWechat } from 'react-icons/io5';

const PropertyDocuments = () => {
    return (
        <div className='w-full h-[100vh] bg-background-blue'>
            <button 
                onclick="buttonHandler()" 
                title="Contact Sale"
                className="fixed z-90 bottom-10 right-8 bg-[#012A4A] w-fit h-fit  rounded drop-shadow-lg 
                flex justify-center items-center text-white hover:bg-[#012A4A]/80 hover:drop-shadow-2xl 
                hover:animate-bounce transition duration-300"
            >
                <IoLogoWechat className='m-3 w-8 h-8 fill-[#A9D6E5]'/>
                <div className='text-md text-md text-[#A9D6E5] pr-5'>Open Chat</div>
            </button>
            <div className='w-full z-40'>
                <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
            </div> 
            <div className='w-full h-[calc(100vh-4.5rem)] flex justify-between items-center'>
            </div>
        </div>
    )
}

export default PropertyDocuments
