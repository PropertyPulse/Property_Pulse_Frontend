import React from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import RequestTask from './RequestTask';
import OpenChat from '../../Components/PropertyOwner/OpenChat';

const TasksPO = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);

    return (
        <div className='w-full h-[100vh] flex bg-background-blue'>
            <RequestTask visible={showModal} onClose={handleOnClose} />
            <div className='w-full'>
                <div className='w-full z-40'>
                    <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
                </div>  

                <div className='tasks-po h-[calc(100vh-4.5rem)] w-full fixed z-10'>
                    
                    <div className='w-full h-full overflow-auto'>
                        <div className='flex justify-between sticky px-10 pt-10'>
                            <h1 className='text-2xl font-semibold'>Related Tasks for {id}</h1>
                            <button className='w-fit h-fit px-8 py-4 text-white text-sm bg-primary-blue-800 rounded-md shadow-lg hover:bg-primary-blue-800/80
                            hover:-translate-y-1 transition duration-300'
                            onClick={() => setShowModal(true)}>
                                Request a New Task
                            </button>
                        </div>

                        <div className='w-full overflow-auto p-10 pt-3'>
                            <div className='w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 mt-4 px-8 py-5 rounded-md'>
                                <h2 className='w-full text-lg font-semibold'>Suggested Tasks by Task Supervisor</h2>
                                <div className='mt-3 w-full'>
                                    <div className='shadow overflow-hidden border-b border-gray-200 rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-200'>
                                            <thead className="bg-[#EDF2FB]">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >Suggested Task</th>
                                                    <th 
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >Description</th>
                                                    <th 
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >Priority</th>
                                                    <th 
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >Date</th>
                                                    <th 
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    ></th>
                                                    <th 
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    ></th>
                                                </tr>
                                            </thead>

                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Fixing the roof in the kitchen</td>
                                                    <td className="max-w-[300px] px-6 py-4 whitespace-wrap text-sm text-gray-500">
                                                        The roof has been leaking for a few days. Since this is the 
                                                        rainy season it needs tto be fixed as soon as possible
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><label className='w-fit h-fit bg-red-300 text-red-700 text-xs font-semibold px-2 py-1 rounded-full'>URGENT</label></td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023/07/15</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className='w-fit h-fit bg-[#2A6F97] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#2A6F97]/80'>Give Permission</button></td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><button className='w-fit h-fit bg-[#013A63] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#013A63]/80'>Reject</button></td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex justify-between items-center gap-10'>
                                <div className='w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 px-8 py-5 rounded-md overflow-auto'>
                                    <h2 className='w-full text-lg font-semibold'>Scheduled Tasks</h2>
                                    <div className='w-full mt-3'>
                                        <table className='w-full'>
                                            <thead className='bg-[#E2EAFC]'>
                                                <tr className='text-xs text-gray-500 tracking-wider uppercase'>
                                                    <th className='font-medium py-2'>Task ID</th>
                                                    <th className='font-medium'>Task</th>
                                                    <th className='font-medium'>Frequency</th>
                                                    <th className='font-medium'>Last Carried-out Day</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className='w-full text-center text-sm text-[#6e7479] border-t border-[#CED4DA]'>
                                                    <td className='py-2'>T001</td>
                                                    <td>Clean the house</td>
                                                    <td>Once a month</td>
                                                    <td>2023/07/21</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className='w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 px-8 py-5 rounded-md'>
                                    <h2 className='w-full text-lg font-semibold'>Requested Tasks</h2>
                                    <div className='w-full mt-3'>
                                        <table className='w-full'>
                                            <thead className='bg-[#E2EAFC]'>
                                                <tr className='text-xs text-gray-500 tracking-wider uppercase'>
                                                    <th className='font-medium py-2'>Task ID</th>
                                                    <th className='font-medium'>Task</th>
                                                    <th className='font-medium'>Date to be Carried Out</th>
                                                    <th className='font-medium'>Task Acceptance State</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className='w-full text-center text-sm text-[#6e7479] border-t border-[#CED4DA]'>
                                                    <td className='py-2'>T001</td>
                                                    <td>Clean the house</td>
                                                    <td>2023/07/21</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                            <div className='w-full flex justify-between items-center gap-10'>
                                <div className='w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 px-8 py-5 rounded-md overflow-auto'>
                                    <h2 className='w-full text-lg font-semibold'>Completed Tasks</h2>
                                    <div className='w-full mt-3'>
                                        <table className='w-full'>
                                            <thead className='bg-[#E2EAFC]'>
                                                <tr className='text-xs text-gray-500 tracking-wider uppercase'>
                                                    <th className='font-medium py-2'>Task ID</th>
                                                    <th className='font-medium'>Task</th>
                                                    <th className='font-medium'>Task Type</th>
                                                    <th className='font-medium'>Completed Date</th>
                                                    <th className='font-medium'>Cost</th>
                                                    {/* <th></th> */}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className='w-full text-center text-sm text-[#6e7479] border-t border-[#CED4DA]'>
                                                    <td className='py-3'>T003</td>
                                                    <td>Repairing the tap</td>
                                                    <td>Requested</td>
                                                    <td>2023/07/21</td>
                                                    <td>Rs. 3000.00</td>
                                                    {/* <td> */}
                                                        {/* <a href='completed-tasks' className='bg-[#013A63] px-3 py-1.5 text-white text-xs rounded-md hover:bg-[#013A63]/80'>View</a> */}

                                                        {/* <Link
                                                            to={{
                                                                pathname: 'completed-tasks',
                                                            }}
                                                        >
                                                            <button className='text-xs px-4 py-2 text-white bg-primary-blue-800 hover:bg-primary-blue-800/80 rounded-md hover:-translate-y-1 transition duration-200'>View</button>
                                                        </Link> */}
                                                    {/* </td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default TasksPO
