import React, { useState } from 'react';
import InputText from '../../Components/Common/InputText';

const ComplaintsPO = () => {
    const [values, setValues] = useState({
        title: '',
        reason: '',
        description: '',
    });



    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/v1/po/addComplaint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                console.log('Complaint added successfully');
            } else {
                console.error('Failed to add complaint');
            }
        } catch (error) {
            console.error('Error sending request:', error);
        }

       console.log(values)
    };

    return (
        <div className='h-[calc(100vh-4.5rem)] w-full flex justify-between items-center gap-10 p-10'>
            <div className="max-w-[500px] w-full h-fit bg-white p-10 pt-5 rounded-md shadow-md border-3 border-[#E2EAFC]">
                <form className='w-full' onSubmit={handleSubmit}>
                    <h2 className='text-2xl text-center font-semibold mt-5 mb-10'>Make A Complaint</h2>
                    <div className='flex-auto w-full mb-4'>
                        <InputText
                            id="title"
                            name="title"
                            type="text"
                            errorMessage=""
                            label="Title"
                            value={values.title}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='flex-auto w-full mb-4'>
                        <div className='relative w-full'>
                            <textarea
                                id="reason"
                                name="reason"
                                placeholder=''
                                className='peer h-36 items-center w-full min-w-[200px] border-2 border-gray-200 text-gray-800 focus:outline-none focus:ring-0 focus:border-[#2e8a99]/70
                                rounded-md px-3 hover:border-[#2e8a99]/70 placeholder-transparent text-sm'
                                onChange={onChange}
                                required
                            />
                            <label
                                htmlFor="reason"
                                className='absolute left-0 -top-2 px-1 bg-white ml-4 text-gray-400 text-xs peer-placeholder-shown:text-sm
                                peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-2 peer-focus:text-[#2e8a99] peer-focus:text-xs transform duration-300'
                            >
                                Reason for Complaint
                            </label>
                            <span className='error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden'>
                                {/* Error message for reason */}
                            </span>
                        </div>
                    </div>
                    <div className='flex-auto w-full mb-4'>
                        <div className='relative w-full'>
                            <textarea
                                id="description"
                                name="description"
                                placeholder=''
                                className='peer h-36 items-center w-full min-w-[200px] border-2 border-gray-200 text-gray-800 focus:outline-none focus:ring-0 focus:border-[#2e8a99]/70
                                rounded-md px-3 hover:border-[#2e8a99]/70 placeholder-transparent text-sm'
                                onChange={onChange}
                                required
                            />
                            <label
                                htmlFor="description"
                                className='absolute left-0 -top-2 px-1 bg-white ml-4 text-gray-400 text-xs peer-placeholder-shown:text-sm
                                peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 peer-focus:-top-2 peer-focus:text-[#2e8a99] peer-focus:text-xs transform duration-300'
                            >
                                Any Details
                            </label>
                            <span className='error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden'>
                                {/* Error message for description */}
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className='w-full h-fit bg-primary-blue-800 text-white py-3 mt-6 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'
                    >
                        Complain
                    </button>
                </form>
            </div>
            <div className='h-full w-full bg-white rounded-md shadow-md px-10 py-8'>
                <h1 className='text-xl font-semibold'>Complaint History</h1>
            </div>
        </div>
    );
};

export default ComplaintsPO;
