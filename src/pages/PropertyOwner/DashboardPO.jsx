import React from 'react';
import MonthlyReportsPO from './MonthlyReportsPO';
import { Link, useNavigate } from 'react-router-dom';

const reports = [
    {
        id: 1,
        propertyId: 'P001',
        description: '2023 July Monthly Report',
    },
    {
        id: 2,
        propertyId: 'P002',
        description: '2023 July Monthly Report',
    },
];

const DashboardPO = () => {
    const navigate = useNavigate();
    return (
        <section className='dashboard-po h-[calc(100vh-4.5rem)] w-full flex overflow-auto z-10'>
            <div className='w-full min-h-full h-fit p-10'>
                <div className="registered-properties w-full min-w-[300px] h-[280px] bg-white py-5 px-7 mb-10 rounded-md shadow-lg shadow-[#EDF2FB] border border-[#EDF2FB]">
                    <div className='w-full flex justify-between'>
                        <h1 className='text-lg font-semibold'>Registered Properties</h1>
                        <div className='button-container flex gap-2'>
                            <button className='bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300'>View All</button>
                            <button className='bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300'>+ Add New Property</button>
                        </div>                        
                    </div> 

                    <div className='w-full h-44 overflow-auto mt-3 text-sm'>
                        <div className='tableRow w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#EDF2FB]'>
                            <div>P001</div>
                            <div>House</div>
                            <div className='w-64 text-center'>No. 50, Kegalle Road, Polgahawela</div>
                            <div>TS001</div>
                        </div> 
                        <div className='tableRow w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#D7E3FC]'>
                            <div>P001</div>
                            <div>House</div>
                            <div className='w-64 text-center'>No. 50, Kegalle Road, Polgahawela</div>
                            <div>TS001</div>
                        </div> 
                        <div className='tableRow w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#EDF2FB]'>
                            <div>P001</div>
                            <div>House</div>
                            <div className='w-64 text-center'>No. 50, Kegalle Road, Polgahawela</div>
                            <div>TS001</div>
                        </div>                        
                    </div>                  
                </div>

                <div className="upcomin-tasks w-full h-[280px] bg-white py-5 px-7 rounded-md shadow-lg shadow-[#EDF2FB] border border-[#EDF2FB]">
                    <div className='w-full flex justify-between'>
                        <h1 className='text-lg font-semibold'>Upcoming Tasks</h1>
                        <button className='bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300'>View All Tasks</button>
                    </div> 

                    <div className='w-full h-44 overflow-auto mt-3 text-sm'>
                        <div className='tableRow w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#EDF2FB]'>
                            <div>P001</div>
                            <div>T001</div>
                            <div className='w-64 text-center'>Cleaning the house</div>
                            <div>2023/08/12</div>
                        </div> 
                        <div className='tableRow w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#D7E3FC]'>
                            <div>P001</div>
                            <div>T003</div>
                            <div className='w-64 text-center'>Weeding the flower beds</div>
                            <div>2023/08/12</div>
                        </div> 
                        <div className='tableRow w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#EDF2FB]'>
                            <div>P002</div>
                            <div>T005</div>
                            <div className='w-64 text-center'>Weeding the land</div>
                            <div>2023/08/18</div>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className='w-2/4 min-w-[300px] min-h-full h-fit bg-[#EDF2FB] p-10'>
                <div>
                    
                </div>

                <div className="monthly-reports w-full h-[280px] bg-white p-5 mb-10 rounded-md shadow-xl border border-[#EDF2FB]">
                    <div className='w-full flex justify-between'>
                        <h1 className='text-lg font-semibold mx-auto'>New Monthly Reports</h1>
                    </div> 

                    <div className='w-full h-40 mb-4 overflow-auto'>
                        {reports.map((report) => (
                            <div key={report.id} className='flex justify-between items-center py-2 px-4 text-sm bg-[#A9D6E5]/70 mt-1 rounded-md'>
                                <div>{report.propertyId}</div>
                                <div>{report.description}</div> 
                                <button className='w-fit h-fit px-2.5 py-1 bg-[#01497C] text-xs text-white rounded-lg hover:bg-[#01497C]/90 hover:-translate-y-0.5 transition duration-200'>View</button>                       
                            </div>
                        ))}
                        
                        <div className='flex justify-between items-center py-2 px-4 text-sm bg-[#A9D6E5]/30 mt-1 rounded-md'>
                            <div>P002</div>
                            <div>2023 July Monthly Report</div> 
                            <button className='w-fit h-fit px-2.5 py-1 bg-[#01497C] text-xs text-white rounded-lg hover:bg-[#01497C]/90 hover:-translate-y-0.5 transition duration-200'>View</button>                       
                        </div>
                    </div>                                  
                </div>

                <div className="due-payments w-full h-[280px] bg-white p-5 rounded-md shadow-xl border border-[#EDF2FB]">
                    <div className='w-full flex justify-between'>
                        <h1 className='text-lg font-semibold mx-auto'>Due Payments</h1>
                    </div> 
                    <div className='w-full h-40 mt-2 flex justify-center items-center'>
                        <div className='w-full text-center text-sm italic text-[#61A5C2]'>No Due Payments</div>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default DashboardPO
