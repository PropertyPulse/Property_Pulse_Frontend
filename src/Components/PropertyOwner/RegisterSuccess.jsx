import React from 'react';
import SuccessImg from '../../Assets/Icons/RegisterSuccess.png';
import {NavLink} from "react-router-dom";

const RegisterSuccess = () => {

    return (
        <div>
            <div className='max-w-[500px] w-full h-fit p-10 bg-white'>
            <img src={SuccessImg} alt='Register Success Image' className='h-48 w-48 mx-auto shadow-md rounded-full' />
                <h1 className='text-4xl text-[#0e2954] font-bold mt-10 text-center'>Registration Successful</h1>
                <div className='w-full flex justify-center items-center mt-20'>
                    <NavLink to='/login' className='w-40 text-center bg-black text-white p-3 text-sm'>Login</NavLink>
                </div>
                
            </div>
        </div>
    )
}

export default RegisterSuccess;
