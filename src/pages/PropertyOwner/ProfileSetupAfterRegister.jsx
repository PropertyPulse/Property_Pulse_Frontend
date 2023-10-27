import React from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import BgCard from '../../Assets/PropertyOwner/profile-setup-card-bg.jpg';
import ProfilePic from '../../Assets/user-avatar.png';
import { useState } from 'react';
import EditableTextField from '../../Components/PropertyOwner/EditableTextField';
import NonEditableTextField from '../../Components/PropertyOwner/NonEditableTextField';
import PropertyType from './PropertyType';


const ProfileSetupAfterRegister = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);

    return (
        <div className='w-full h-[100vh] bg-background-blue'>
            <NavbarWithoutSidebar userRole="Property Owner" name="Anjalee Neelika" />
            <PropertyType visible={showModal} onClose={handleOnClose} />
            <div className='w-full h-full flex justify-between items-center p-10 gap-10 overflow-auto'>
                <div className='w-full h-fit p-5'>
                    <div
                        className="block max-w-full rounded-lg bg-[#235ab4] bg-cover p-6 shadow-xl dark:bg-[#0e2954] mix-blend-multiply"
                        style={{backgroundImage: `url(${BgCard})`}}
                    >
                        <h1 className='text-center text-4xl text-[#61a2bb] font-semibold mb-3'>WELCOME TO</h1>
                        <h1 className='text-6xl italic text-center font-bold text-[#9ddef8] mb-20'>PROPERTY PULSE</h1>
                        <div className='bg-black/50 p-10 rounded-lg'>
                            <h1
                                className="mb-2 text-3xl font-medium leading-tight text-white dark:text-neutral-50 text-center">
                                Haven't Registered Your Property Yet?
                            </h1>
                            <h3
                                className="mb-4 text-2xl text-white text-center mt-5 italic">
                                Register your property now to experience our services
                            </h3>

                            <div className='w-full flex justify-center'>
                                <button
                                    type="button"
                                    className="inline-block rounded border-2 border-neutral-50 p-6 py-3 text-sm font-medium uppercase leading-normal 
                                    text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-400 hover:bg-opacity-30
                                    hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0
                                    active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                    onClick={() => setShowModal(true)}
                                >
                                    Register Now
                                </button>
                                
                            </div>
                        </div>  
                    </div>
                </div>

                <div className='w-full h-fit p-5'>
                    <div className='w-full h-fit'>
                        <div className='w-full max-w-[560px] h-fit mx-auto'> 
                            <div className='relative max-w-full h-fit border-8 border-slate-600 rounded-lg bg-white'>
                                <form method='' action='' className='flex justify-between items-center m-5'>
                                    <div>
                                        <h1 className='text-center text-2xl font-semibold text-[#236a75] mb-3'>YOUR PROFILE</h1>
                                        <div className='relative w-32 h-32 rounded-full p-1 bg-slate-700 mx-auto'>
                                            <img src={ProfilePic} alt='' className='w-full h-full object-cover rounded-full' />
                                        </div>
                                    </div>
                                    
                                    <div className='ml-5'>
                                        <EditableTextField labelName='First Name' string='Anjalee' id='fname' />
                                        <EditableTextField labelName='Last Name' string='Neelika' id='lname' />
                                        <EditableTextField labelName='Address' string='No. 50, Kegalle Road, Polgahawela' id='address' />
                                        <EditableTextField labelName='District' string='Kurunegala' id='district' />
                                        <EditableTextField labelName='Phone Number' string='0713577800' id='phone' />
                                        <NonEditableTextField labelName='Email' string='anjalee9912n@gmail.com' />
                                        <NonEditableTextField labelName='NIC' string='199985510370' />
                                        <button className='w-full px-10 py-3 border mt-10 bg-[#0e2954] text-white rounded-lg hover:bg-[#0e2954]/90 hover:-translate-y-2 transition duration-200'>Update Profile</button>
                                    </div>                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>              
            </div> 
        </div>
    )
}

export default ProfileSetupAfterRegister
