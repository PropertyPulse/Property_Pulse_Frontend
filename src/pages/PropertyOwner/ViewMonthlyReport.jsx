import React from 'react'
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar'
import OpenChat from '../../Components/PropertyOwner/OpenChat'

const ViewMonthlyReport = () => {
    return (
        <div className='w-full h-[100vh] flex'>
            <OpenChat />
            <div className='w-full'>
                <div className='w-full z-40'>
                    <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
                </div>  
                <div className='w-full h-[calc(100vh-4.5rem)] flex justify-between items-center'>
                    {/* <div className='title'>
                        <h1 className='text-2xl'>Monthly Report: P001 - 2023 July</h1>
                    </div> */}
                    <div className='w-full h-full p-10'>
                        <div className='title mb-3'>
                            <h1 className='text-2xl'>Monthly Report: P001 - 2023 July</h1>
                        </div>
                        <div className='w-full min-h-[90%] h-fit bg-white border shadow flex justify-between items-center'>

                        </div>
                    </div>
                    <div className='w-2/5 h-full bg-[#EDF2FB] px-10 py-8'>
                        <h1 className='text-lg font-semibold'>Remarks</h1>
                        <textarea className='w-full min-h-[300px] border-[#CCDBFD] bg-white shadow text-sm text-[#5a5a5a] placeholder:text-[#CECECE]' placeholder='Add a remark...'></textarea>
                        <div className='my-10'>
                            <button className='w-full bg-primary-blue-800 py-4 text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-200'>Save Remark</button>
                        </div>
                        {/* <div className='my-10'>
                            <button className='w-full bg-[#151B54] py-4 text-white rounded-md hover:bg-[#151B54]/90 hover:-translate-y-1 transition duration-200'>Contact Task Supervisor</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMonthlyReport
