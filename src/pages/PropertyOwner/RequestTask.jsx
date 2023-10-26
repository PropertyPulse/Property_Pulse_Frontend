import React from 'react';
import { useState } from 'react';
import InputText from '../../Components/Common/InputText';
import { AiOutlineClose } from 'react-icons/ai';
import Dropdown from '../../Components/PropertyOwner/Dropdown';
import { axiosPrivate } from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const RequestTask = ({ visible, onClose }) => {
    const navigate = useNavigate();

    const handleOnClose = (e) => {
        if(e.target.id === 'container') {
            onClose();
        }
    }

    const [frequency, setFrequency] = useState();

    const handleDropdownSelect = (selectedValue) => {
        setFrequency(selectedValue);
    }

    const [values, setValues] = useState({
        propertyId: "",
        task: "",
        frequency: "",
        proposedDate: "",
    });

    const frequencies = [
        {
            id: 1,
            name: 'only -once',
            label: 'Only once',
            checked: false,
        },
        {
            id: 2,
            name: 'once-a-week',
            label: 'Once a week',
            checked: false,
        },
        {
            id: 3,
            name: 'twice-a-week',
            label: 'Twice a week',
            checked: false,
        },
        {
            id: 4,
            name: 'once-in-2-weeks',
            label: 'Once in 2 weeks',
            checked: false,
        },
        {
            id: 5,
            name: 'once-a-month',
            label: 'Once a month',
            checked: false,
        },
        {
            id: 6,
            name: 'once-in-2-months',
            label: 'Once in 2 months',
            checked: false,
        },
        {
            id: 7,
            name: 'once-in-3-months',
            label: 'Once in 3 months',
            checked: false,
        }
    ];

    const inputs = [
        // Properties for property ID
        {
            id: 1,
            name: 'property_id',
            type: 'text',
            pattern: "[0-9]*",
            errorMessage: "Property ID should be an integer value",
            label: 'Property ID',
            require: true,
            styles: 'w-full max-h-[300px]',
        },
        // Properties for Task Description input field
        {
            id: 2,
            name: 'task',
            type: 'textarea',
            errorMessage: "",
            label: 'Task Description',
            require: true,
            styles: 'w-full max-h-[300px]',
        },
        // Properties for Frequency input field
        {
            id: 3,
            name: 'frequency',
            type: 'dropdown',
            errorMessage: "",
            label: 'Frequency',
        },
        // Properties for Proposed Start Date input field
        {
            id: 4,
            name: 'proposedDate',
            type: 'date',
            errorMessage: "",
            label: 'Proposed Start Date',
            require: true,
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
                    <button onClick={onClose} className='float-right mb-5'>
                        <AiOutlineClose />
                    </button>
                    {/* <button onClick={handleOnClose} className='float-right mb-5'>
                        <AiOutlineClose />
                    </button> */}
                    <h2 className='text-2xl text-center font-semibold mt-5 mb-10'>Request A New Task</h2>
                    
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
                                            rounded-md hover:border-[#2e8a99]/70 placeholder-transparent text-sm'
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
                                ) : input.type === "text" || input.type === "date" ? (
                                    <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                                ) : input.type === "dropdown" ? (
                                    <Dropdown options={frequencies} label="Select Frequency" onSelect={handleDropdownSelect} />
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        ))}
                    

                    {/* <a href={path} className='flex justify-between items-center gap-5 bg-gray-200 py-1 pr-1 pl-6 rounded-full border-2 hover:text-gray-800 hover:border-gray-300 hover:bg-gray-100 float-right cursor-pointer'>
                        <div className='text-md'>Continue</div>
                        <BsArrowRightCircle className='w-8 h-8 bg-white rounded-full' />
                    </a> */}
                    <button 
                        className='w-full h-fit bg-primary-blue-800 text-white py-3 mt-10 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'
                    >
                        Request
                    </button>

                </form> 
            </div>
            
        </div>

    )
}

export default RequestTask
