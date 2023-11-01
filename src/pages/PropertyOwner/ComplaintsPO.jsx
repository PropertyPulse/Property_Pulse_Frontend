import React, { useState } from 'react'
import InputText from '../../Components/Common/InputText';
import Dropdown from "../../Components/PropertyOwner/Dropdown";

const ComplaintsPO = () => {
    const handleDropdownSelect = (selectedValue) => {
        setValues({ ...values, complaintType: selectedValue });
    }

    const [values, setValues] = useState({
        title: "",
        complaintType: "",
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
            name: 'complaintType',
            type: 'dropdown',
            errorMessage: "",
            label: 'Complaint Type',
        },
        // Properties for Proposed Start Date input field
        {
            id: 3,
            name: 'description',
            type: 'textarea',
            errorMessage: "",
            label: 'Description',
        },
    ]; 

    const types = [
        {
            id: 1,
            name: 'incompletion',
            label: 'Incompletion',
            checked: false,
        },
        {
            id: 2,
            name: 'work-delay',
            label: 'Work Delay',
            checked: false,
        },
        {
            id: 3,
            name: 'maintenance-issue',
            label: 'Maintenance Issue',
            checked: false,
        },
        {
            id: 4,
            name: 'bad-communication',
            label: 'Bad Communication',
            checked: false,
        }
    ];

    // Function for handling value changes of input fields
    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };    

    console.log(values);

    return (
        
        <div className='h-[calc(100vh-4.5rem)] w-full flex justify-between items-center gap-10 p-10'>
            <div className="max-w-[500px] w-full h-fit bg-white p-10 pt-5 rounded-md shadow-md border-3 border-[#E2EAFC]">
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
                                ) : input.type === "dropdown" ? (
                                    <Dropdown options={types} label="Complaint Type" onSelect={handleDropdownSelect} />
                                ) : (
                                    <InputText key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                                )}
                            </div>
                        ))}
                    
                    <button className='w-full h-fit bg-primary-blue-800 text-white py-3 mt-6 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Complain</button>

                </form>            
            </div>
            <div className='h-full w-full bg-white rounded-md shadow-md px-10 py-8'>
                <h1 className='text-xl font-semibold'>Complaint History</h1>
            </div>
        </div>
    )
}

export default ComplaintsPO
