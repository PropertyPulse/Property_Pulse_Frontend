import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const ViewOngoingTask = () => {
    const { propertyId, taskId } = useParams();

    return (
        <div>
            <div className="flex w-full h-[calc(100vh-4.5rem)] bg-[#EDF2FB]">        
                <div className="w-full h-full flex flex-auto gap-5 p-10">  
                    <div>                 
                        <h1 className='text-2xl font-semibold'>Ongoing Task for {propertyId}: {taskId}</h1>
                        <Outlet />                    
                        <div className='w-full h-[88%] mt-10 overflow-auto rounded-md flex flex-wrap gap-10 justify-between items-center'>
                            <div className='w-fit h-fit max-w-[300px] p-5 bg-white rounded-md shadow-md'>
                                <h2 className='text-xl font-medium'>Task Description</h2>
                                <div className='mt-4'>Weeding the land and renew the fence</div>
                            </div>
                            <div className='w-fit h-fit max-w-[300px] p-5 bg-white rounded-md shadow-md'>
                                <div className='my-3'>
                                    <h2 className='text-xl font-medium'>Started Date</h2>
                                    <div>2023/08/16</div>
                                </div>
                                <div className='my-3'>
                                    <h2 className='text-xl font-medium'>Estimated Ending Date</h2>
                                    <div>2023/08/18</div>
                                </div>
                            </div>
                            <div className='w-full h-[300px] p-5 bg-white rounded-md shadow-md'>
                                <h2 className='text-xl font-medium'>Images</h2>
                            </div>
                        </div>
                    </div> 
                    <div className='w-2/5 bg-white p-5'>
                        <div>
                            <h2>Give Feedback</h2>
                            <textarea className='w-full min-h-[300px] mt-2'></textarea>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='w-full mt-2 bg-primary-blue-800 hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>
                                
                                Make a complain</button>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='w-full mt-2 bg-sky-blue-600 hover:bg-sky-blue-600/80 hover:-translate-y-1 transition duration-300'>Open Chat</button>
                        </div>                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ViewOngoingTask
