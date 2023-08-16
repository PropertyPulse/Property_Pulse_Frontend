import React from 'react';
import { useState } from 'react';
import InputText from '../../Components/Common/InputText';

const MakeComplaints = ({ visible, onClose }) => {

    const handleOnClose = (e) => {
        if(e.target.id === 'container') {
            onClose();
        }
    }

    const [values, setValues] = useState({
        title: "",
        reason: "",
        description: "",
    });

    const inputs = [
        // Properties for Task Description input field
        {
            id: 1,
            name: 'title',
            type: 'text',
            errorMessage: '',
            label: 'Title',
            required: false,
            styles: 'w-full max-h-[300px]',
        },
        // Properties for Frequency input field
        {
            id: 2,
            name: 'reason',
            type: 'textarea',
            errorMessage: "",
            label: 'Reason for Complaint',
        },
        // Properties for Proposed Start Date input field
        {
            id: 3,
            name: 'description',
            type: 'textarea',
            errorMessage: "",
            label: 'Any Details',
        },
    ]; 

    // Function for handling value changes of input fields
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    console.log(values);

    if(!visible) return null;

    return (
        
        <div id='container' onClick={handleOnClose} className='fixed w-full h-screen z-50 inset-0 bg-[#ADB5BD]
        bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="max-w-[500px] w-full h-fit bg-white p-10 pt-5 rounded border-3 border-[#E2EAFC]">
                <form className='w-full'>
                    {/* <button onClick={handleOnClose} className='float-right mb-5'>
                        <AiOutlineClose />
                    </button> */}
                    <h2 className='text-2xl text-center font-semibold mt-5 mb-10'>Make A Complaint</h2>
                    
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
                                            className='peer h-36 items-center w-full min-w-[200px] border-2 border-gray-200 text-gray-800 focus:outline-none focus:ring-0 focus:border-[#2e8a99]/70
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
                    
                    <button className='w-full h-fit bg-primary-blue-800 text-white py-3 mt-6 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Complain</button>

                </form> 
            </div>
            
        </div>

    )
}

export default MakeComplaints
