import { Tabs } from 'flowbite-react';
import React from 'react'

const AllDocuments = () => {
    return (
        <div className='w-full h-[90%]'>
            <div className='w-full h-[calc(100vh-4.5rem)] px-10 py-8 gap-10'>
                <Tabs.Group aria-label="Pills" style="pills">
                    <Tabs.Item active title="Insurance Documents">
                        <div className='w-full h-full'>
                            <h1 className='text-xl font-semibold'>Insurance Documents</h1>
                            <div className='div-insurance card h-full mt-5 bg-white flex justify-center items-center'>No Insuarnce to Show</div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item active title="Valuation Reports">
                        <div className='w-full h-full'>
                            <h1 className='text-xl font-semibold'>Valuation Report</h1>
                            <div className='div-insurance card h-full mt-5 bg-white flex justify-center items-center'>No Valuation Reports to Show</div>
                        </div>
                    </Tabs.Item>
                </Tabs.Group>
                
                
            </div>
        </div>
    )
}

export default AllDocuments;
