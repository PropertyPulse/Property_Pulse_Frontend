import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import BgSignup from '../../Assets/signup_back.jpg';
import Logo from '../../Assets/logo.png';
import InputText from '../../Components/Common/InputText';
import {useState} from "react";

const Signup = () => {

    const[isSuccess,setSuccess]= useState(false);

    const[errMsg,setErrMsg]= useState('');

    const [firstname,setFirstname]= useState('');
    const[lastname,setLastname]= useState('');
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[confirmpassword,setConfirmpassword]= useState('');
    const[address,setAddress]= useState('');
    const[nic,setNic]= useState('');
    const[telephone,setTelephone]= useState('');
    const[dateOfBirth,setDateOfBirth]= useState('');
    const[district,setDistrict]= useState('');







    //
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // if button enabled with JS hack
    //
    //     if (!v1 || !v2) {
    //         setErrMsg("Invalid Entry");
    //         return;
    //     }
    //     try {
    //         const response = await axios.post(REGISTER_URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(response?.data);
    //         console.log(response?.accessToken);
    //         console.log(JSON.stringify(response));
    //         setSuccess(true);
    //         //clear state and controlled inputs
    //         //need value attrib on inputs for this
    //         setUser('');
    //         setPwd('');
    //         setMatchPwd('');
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 409) {
    //             setErrMsg('Username Taken');
    //         } else {
    //             setErrMsg('Registration Failed')
    //         }
    //         errRef.current.focus();
    //     }
    // }


    return (
        <div>  
            <div className='w-full h-screen bg-[#1f6e8c] overflow-auto'>
                <div className='fixed w-full bg-[#2e8a99] p-5 z-20'>
                    <FaArrowCircleLeft className='w-8 h-8 fill-white cursor-pointer hover:fill-slate-300' />
                </div>
                <img src={BgSignup} alt='' className='absolute w-full h-screen object-cover mix-blend-screen' />
                <div className='relative w-full min-h-full h-fit flex justify-center items-center pt-10'>
                    <form method='post' action='' className='p-10 bg-white border-8 w-full max-w-[800px] z-10 m-20'>
                        <img src={Logo} alt='Logo' className='w-20 h-20 mx-auto mb-10'/>
                        <h1 className='w-fit text-4xl text-center font-bold text-[#1f6e8c] mx-auto'>PROPERTY OWNER REGISTRATION</h1>
                           <div className="mx-auto w-72 bg-red-200 h-20 rounded-lg">
                               <p className="text-center py-6 text-2xl font-semi text-red-900 mx-auto">Registration Failed</p>
                           </div>
                        <div className='w-full flex justify-between items-center gap-5 mt-10'>
                            <InputText labelName='First Name' id='fname' />
                            <InputText labelName='Last Name' id='lname' />
                        </div>

                        <div className='w-full flex justify-between items-center gap-5'>
                            <InputText labelName='Address' id='address' />
                            <InputText labelName='District' id='district' />
                        </div>

                        <div className='w-full flex justify-between items-center gap-5'>
                            <InputText labelName='Email' id='email' />
                            <InputText labelName='Phone Number' id='phone' />
                        </div>

                        <div className='w-full flex justify-between items-center gap-5'>
                            <InputText labelName='NIC' id='nic' />
                            <div className='w-full min-w-[200px]'>
                                <label className='text-sm'>Gender</label>
                                <div className='flex justify-around items-center gap-3 text-[#8c8c8c]'>
                                    <span className='flex items-center text-sm'>
                                        <input type='radio' className='mr-1' name='gender' id='gender' />
                                        Female
                                    </span>
                                    <span className='flex items-center text-sm'>
                                        <input type='radio' className='mr-1' name='gender' id='gender' />
                                        Male
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-between items-center gap-5'>
                            <InputText labelName='Password' id='pass' />
                            <InputText labelName='Confirm Password' id='pass_confirm' />
                        </div>

                        {/* <div className='w-full mt-3 mb-20'>
                            <label className='pb-4'>Upload Profile Picture</label>
                            <ImageUploader />
                        </div> */}

                        <div className='flex justify-center items-center my-5 p-2'>
                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 accent-[#1f6e8c]/50 bg-gray-100 border-gray-300 rounded focus:ring-[#1f6e8c]/50 dark:focus:ring-[#1f6e8c]/60 dark:ring-offset-[#1f6e8c]/80 focus:ring-2 dark:bg-[#1f6e8c]/70 dark:border-[#1f6e8c]/60 cursor-pointer" />
                            <label for="link-checkbox" className="ml-2">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 underline">terms and conditions</a>.</label>
                        </div>

                        <div className='w-full flex justify-center mt-10 mb-8'>
                            <button type='submit' className='border p-4 w-full text-lg text-white bg-[#1f6e8c] rounded-lg hover:bg-[#1f4b61] hover:-translate-y-2 transition duration-200'>Register</button>
                        </div>

                        <div className='flex justify-center text-md'>
                            Already have an account? <a href='#' className='ml-2 text-blue-700 underline'>Signin</a> 
                        </div>
                    </form>
                </div>
            </div>

            
           
        </div>
    )
}

export default Signup
