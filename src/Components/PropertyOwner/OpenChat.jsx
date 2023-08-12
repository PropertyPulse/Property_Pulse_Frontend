import React from 'react';
import { IoLogoWechat } from 'react-icons/io5';

const OpenChat = () => {
  return (
    <div className='w-full fixed z-[1111] py-10 px-14 bottom-0 float-right'>
        <button 
            onclick="buttonHandler()" 
            title="Contact Sale"
            className="bg-[#2588d4] float-right w-fit h-fit  rounded drop-shadow-2xl
            flex justify-center items-center text-white hover:bg-[#2588d4]/80 hover:drop-shadow-2xl 
            hover:animate-bounce transition duration-300"
        >
            <IoLogoWechat className='m-3 w-8 h-8 fill-[#A9D6E5]'/>
            <div className='text-md text-md text-[#A9D6E5] pr-5'>Open Chat</div>
        </button>
    </div>
    
  )
}

export default OpenChat
