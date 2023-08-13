import React from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import { IoLogoWechat } from 'react-icons/io5';
import OpenChat from '../../Components/PropertyOwner/OpenChat';

const PropertyDocuments = () => {
    return (
        <div className='w-full h-[100vh] bg-background-blue'>
            <OpenChat />
            <div className='w-full z-40'>
                <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
            </div> 
            <div className='w-full h-[calc(100vh-4.5rem)] flex justify-between items-center px-10 py-8 gap-10'>
                <div className='w-full h-full'>
                    <div className='flex-auto'>
                        <h1 className='text-xl font-semibold'>Insurance Documents</h1>
                        <div className='flex justify-between mt-2 px-10'>
                            <button className='text-sm px-5 py-2 bg-[#168fdb] text-white rounded-md hover:bg-[#168fdb]/80'>Request Insurance</button>
                            <button className='text-sm px-5 py-2 bg-[#00559A] text-white rounded-md hover:bg-[#00559A]/80'>Upload Insurance Document</button>
                        </div>
                    </div>
                    
                    <div className='div-insurance card h-[85%] mt-5 bg-white flex justify-center items-center'>No Insuarnce to Show</div>
                </div>
                <div className='w-full h-full'>
                    <h1 className='text-xl font-semibold'>Valuation Report</h1>
                    <div className='div-valuation card h-[92%] mt-5 bg-white flex justify-center items-center'>No valuation reports to show</div>
                </div>
            </div>
        </div>
    )
}

export default PropertyDocuments
