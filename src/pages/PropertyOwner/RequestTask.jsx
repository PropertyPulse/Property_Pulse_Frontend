import React from 'react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSolidLandscape } from 'react-icons/bi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaHouse } from 'react-icons/fa6';
import InputText from '../../Components/Common/InputText';

const RequestTask = ({ visible, onClose }) => {

    const handleOnClose = (e) => {
        if(e.target.id === 'container') {
            onClose();
        }
    }

    const [values, setValues] = useState({
        task: "",
        frequency: "",
        proposedDate: "",
    });

    const inputs = [
        // Properties for Task Description input field
        {
            id: 1,
            name: 'task',
            type: 'textarea',
            errorMessage: "",
            label: 'Task Description',
            required: true,
            styles: 'w-full max-h-[300px]',
        },
        // Properties for Frequency input field
        {
            id: 2,
            name: 'dropdown',
            type: 'text',
            errorMessage: "",
            label: 'Frequency',
        },
        // Properties for Proposed Start Date input field
        {
            id: 3,
            name: 'proposedDate',
            type: 'date',
            errorMessage: "",
            label: 'Proposed Start Date',
        },
    ]; 

    // Function for handling value changes of input fields
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    console.log(values);

    if(!visible) return null;

    return (
        
        <div id='container' onClick={handleOnClose} className='fixed w-full h-screen z-30 inset-0 bg-[#ADB5BD]
        bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="max-w-[500px] w-full h-fit bg-white p-10 pt-5 rounded border-3 border-[#E2EAFC]">
                <form className='w-full'>
                    {/* <button onClick={handleOnClose} className='float-right mb-5'>
                        <AiOutlineClose />
                    </button> */}
                    <h2 className='text-2xl text-center font-semibold mt-5 mb-10'>Request a New Task</h2>
                    
                        {inputs.map((input) => (
                            <div className='flex-auto w-full mb-4'>
                                {(input.type === "textarea") ? (
                                    // <textarea className='w-full items-center min-w-[200px] border-2 border-gray-200 text-gray-800 focus:outline-none focus:ring-0 focus:border-[#2e8a99]/70
                                    // rounded-md px-3 hover:border-[#2e8a99]/70 placeholder-transparent text-sm' />
                                    <div className='relative w-full'>
                                        <textarea
                                            id={input.name}
                                            name={input.name}
                                            placeholder=''
                                            className='peer h-44 items-center w-full min-w-[200px] border-2 border-gray-200 text-gray-800 focus:outline-none focus:ring-0 focus:border-[#2e8a99]/70
                                            rounded-md px-3 hover:border-[#2e8a99]/70 placeholder-transparent text-sm'
                                            onChange={onChange}
                                            required
                                        />
                                        <label htmlFor={input.name} className='absolute left-0 -top-2 px-1 bg-white ml-4 text-gray-400 text-xs peer-placeholder-shown:text-sm
                                        peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-2 peer-focus:text-[#2e8a99] peer-focus:text-xs transform duration-300'>
                                            {input.label}
                                        </label>
                                        <span className='error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden'>
                                            {input.errorMessage}
                                        </span>
                                    </div>
                                ) : (
                                    <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                                )}
                            </div>
                        ))}
                    

                    {/* <a href={path} className='flex justify-between items-center gap-5 bg-gray-200 py-1 pr-1 pl-6 rounded-full border-2 hover:text-gray-800 hover:border-gray-300 hover:bg-gray-100 float-right cursor-pointer'>
                        <div className='text-md'>Continue</div>
                        <BsArrowRightCircle className='w-8 h-8 bg-white rounded-full' />
                    </a> */}
                    <button className='w-full h-fit bg-primary-blue-800 text-white py-3 mt-10 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Request</button>

                </form> 
            </div>
            
        </div>

    )
}

export default RequestTask
