import React from 'react';
import SuccessImg from '../../Assets/Icons/RegisterSuccess.png';

const RegisterSuccess = () => {

    return (
        <div>
            <div className='max-w-[500px] w-full h-fit p-10 bg-white'>
            <img src={SuccessImg} alt='Register Success Image' className='h-48 w-48 mx-auto shadow-md rounded-full' />
                <h1 className='text-4xl text-[#0e2954] font-bold mt-10'>Registration Successful</h1>
                <div className='w-full flex justify-between items-center mt-20'>
                    <button className='w-40 bg-black text-white p-3 text-sm'>Go Back</button>
                    <button className='w-40 bg-black text-white p-3 text-sm'>Go To Dashboard</button>
                </div>
                
            </div>
        </div>
    )
}

export default RegisterSuccess;
