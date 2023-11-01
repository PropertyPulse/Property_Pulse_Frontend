import React, { useState } from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ConfirmationModal = ({ message, onConfirm, visible, onClose, addPath }) => {
    
        // <div>
        //     <div className="modal">
        //         <div className="modal-content">
        //             <p>{message}</p>
        //             <button onClick={onConfirm}>OK</button>
        //         </div>
        //     </div>
        // </div>

    const [path, setPath] = useState("");

    const handleOnClose = (e) => {
        if(e.target.id === 'container') {
            onClose();
        }
    }

    if(!visible) return null;

    return (        
        <div id='container' onClick={handleOnClose} className='fixed w-full h-full z-50 inset-0 bg-black
        bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="max-w-[500px] w-full h-fit bg-white p-10 pt-5 rounded">
                <form className='w-full'>
                    <button onClick={onClose} className='float-right mb-5'>
                        <AiOutlineClose />
                    </button>
                    <h2 className='text-3xl text-center font-bold mt-5 mb-10'>CHOOSE THE PROPERTY TYPE</h2>
                    

                    <Link
                        to={{
                            pathname: path
                        }}
                    >
                        <button className='flex justify-between items-center gap-5 bg-gray-200 py-1 pr-1 pl-6 rounded-full border-2 hover:text-gray-800 hover:border-gray-300 hover:bg-gray-100 float-right cursor-pointer'>
                            Ok
                        </button>
                    </Link> 
                </form> 
            </div>
            
        </div>
    )
}

export default ConfirmationModal
