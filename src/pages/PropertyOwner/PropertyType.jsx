import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHouse, FaCircleArrowRight } from 'react-icons/fa6';
import {BsArrowRightCircle} from 'react-icons/bs'
import { BiSolidLandscape } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai'

const PropertyType = ({ visible, onClose }) => {

    const [type, setType] = useState("House");

    const handleOnClose = (e) => {
        if(e.target.id === 'container') {
            onClose();
        }
    }

    const handleOnChange = (e) => {
        setType(e.target.value);
        console.log(type)
    }

    const handleNavigate = () => {
        if(type === "House") {

        } else if(type === "Land") {
            
        }
    }

    if(!visible) return null;

    return (
        
        <div id='container' onClick={handleOnClose} className='fixed w-full h-screen z-30 inset-0 bg-black
        bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="max-w-[500px] w-full h-fit bg-white p-10 pt-5 rounded">
                <form className='w-full'>
                    <button onClick={handleOnClose} className='float-right mb-5'>
                        <AiOutlineClose />
                    </button>
                    <h2 className='text-3xl text-center font-bold mt-5 mb-10'>CHOOSE THE PROPERTY TYPE</h2>
                    <ul className='flex justify-between items-center w-full gap-6 mb-10'>
                        
                        <li className='w-full'>
                            <input type='radio' id='type-house' name='prop-type' value='House' className='hidden peer' onChange={handleOnChange} checked />
                            <label 
                                htmlFor='type-house' 
                                className='flex justify-between items-center p-5 bg-[#0e2954] rounded-lg text-gray-400 border-2 cursor-pointer
                                border-[#0e2954] hover:bg-[#0e2954]/90 hover:text-gray-300 peer-checked:bg-[#0e2954]/90 peer-checked:border-[#35b6e9] peer-checked:text-[#35b6e9]'
                            >
                                <div className='flex justify-between items-center'>                                    
                                    <div className="w-full text-xl font-semibold">House</div>                                    
                                </div>
                                <FaHouse className='w-6 h-6' />                                
                            </label>
                        </li>

                        <li className='text-lg text-[#0e2954] font-semibold'>or</li>

                        <li className='w-full'>
                            <input type='radio' id='type-land' name='prop-type' value='Land' className='hidden peer' onChange={handleOnChange} />
                            <label 
                                htmlFor='type-land' 
                                className='flex justify-between items-center p-5 bg-[#0e2954] rounded-lg text-gray-400 border-2 cursor-pointer
                                border-[#0e2954] hover:bg-[#0e2954]/90 hover:text-gray-300 peer-checked:bg-[#0e2954]/90 peer-checked:border-[#35b6e9] peer-checked:text-[#35b6e9]'
                            >
                                <div className='flex justify-between items-center'>
                                    <div className="w-full text-xl font-semibold">Land</div>                                    
                                </div>
                                <BiSolidLandscape className='w-6 h-6' />
                                
                            </label>
                        </li>

                    </ul>

                    <a href={handleNavigate} className='flex justify-between items-center gap-5 bg-gray-200 py-1 pr-1 pl-6 rounded-full border-2 hover:text-gray-800 hover:border-gray-300 hover:bg-gray-100 float-right'>
                        <div className='text-md'>Continue</div>
                        <BsArrowRightCircle className='w-8 h-8 bg-white rounded-full' />
                    </a>

                </form> 
            </div>
            
        </div>
    )
}

export default PropertyType
