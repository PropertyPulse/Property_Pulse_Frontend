import React from 'react'
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar'
import OpenChat from '../../Components/PropertyOwner/OpenChat'
import { Outlet, useParams } from 'react-router-dom'

const ViewMonthlyReport = () => {
    const {id} = useParams();

    return (
        <section className='w-full flex'>
            <div className='w-full'>
                <div className='w-full h-full flex justify-between items-center'>
                    {/* <div className='title'>
                        <h1 className='text-2xl'>Monthly Report: P001 - 2023 July</h1>
                    </div> */}
                    <div className='w-full p-10'>
                        <div className='title mb-3'>
                            <h1 className='text-2xl'>Monthly Report: {id} - 2023 July</h1>
                        </div>
                        <div className='w-full min-h-[72vh] h-fit bg-white border shadow flex justify-between items-center'>

                        </div>
                    </div>
                    <div className='w-2/5 h-full px-10 py-8 flex justify-center items-center'>
                        <div className='w-full'>
                            <h1 className='text-lg font-semibold'>Remarks</h1>
                            <textarea className='w-full min-h-[300px] border-[#CCDBFD] bg-white shadow text-sm text-[#5a5a5a] placeholder:text-[#CECECE]' placeholder='Add a remark...'></textarea>
                            <div className='mt-10'>
                                <button className='w-full bg-primary-blue-800 py-4 text-white rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-200'>Save Remark</button>
                            </div>
                            {/* <div className='my-10'>
                                <button className='w-full bg-[#151B54] py-4 text-white rounded-md hover:bg-[#151B54]/90 hover:-translate-y-1 transition duration-200'>Contact Task Supervisor</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewMonthlyReport
