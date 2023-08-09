import React from 'react'
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar'

const ViewMonthlyReport = () => {
    return (
        <div className='w-full h-[100vh] flex bg-background-blue'>
            <div className='w-full'>
                <div className='w-full z-40'>
                    <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
                </div>  
                <div className='w-full h-[calc(100vh-4.5rem)] flex justify-between items-center'>
                    <div className='title'>
                        <h1 className='text-2xl'>Monthly Report: P001 - 2023 July</h1>
                    </div>

                    <div className='w-full h-fit  p-10'>
                        <div className='w-2/3 h-full bg-slate-300'>

                        </div>
                        <div className='h-full bg-[#EDF2FB]'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMonthlyReport
