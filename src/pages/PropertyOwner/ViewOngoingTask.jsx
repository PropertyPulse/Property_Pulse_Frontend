import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import HouseCleaning01 from  '../../Assets/PropertyOwner/house-cleaning-01.jpeg';
import HouseCleaning02 from  '../../Assets/PropertyOwner/house-cleaning-02.webp';
import LandCleaning01 from '../../Assets/PropertyOwner/land-cleaning-02.jpg';
import { AiFillWechat } from 'react-icons/ai';
import MakeComplaints from './MakeComplaints';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const ViewOngoingTask = () => {
    const { auth } = useAuth();
    const axiosPrivate = useAxiosPrivate();
    const { propertyId, taskId } = useParams();
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    const [task, setTask] = useState([]);

    const fetchTask = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/tasks/get-task-by-id?id=${taskId}`);
            setTask(response.data);
        } catch (error) {
            console.error("Error fetching data...");
        }
    };

    useEffect(() => {
        fetchTask();
    }, [taskId]);  
    
    

    return (
        <div>
            <div className="flex w-full h-[calc(100vh-4.5rem)]">
                <MakeComplaints visible={showModal} onClose={handleOnClose} />  
                <div className="w-full h-full flex flex-auto gap-5 p-10">  
                    <div>  
                        <h1 className='text-2xl font-semibold'>Ongoing Task</h1>               
                        <h1 className='text-2xl font-semibold'>Property {propertyId}: Task {taskId}</h1>
                        <Outlet />                    
                        <div className='w-full h-[88%] mt-10 overflow-auto rounded-md flex flex-wrap gap-10 justify-between items-center'> 
                            <div className='w-fit h-fit max-w-[300px] p-5 bg-white rounded-md shadow-md'>
                                <h2 className='text-xl font-medium'>Task Description</h2>
                                <div className='mt-4'>{task.task}</div>
                            </div>
                            <div className='w-fit h-fit max-w-[300px] p-5 bg-white rounded-md shadow-md'>
                                <div className='my-3'>
                                    <h2 className='text-xl font-medium'>Started Date</h2>
                                    <div>{task.startedDate?.[0]+"/"+task.startedDate?.[1]+"/"+task.startedDate?.[2]}</div>
                                </div>
                                <div className='my-3'>
                                    <h2 className='text-xl font-medium'>Estimated Ending Date</h2>
                                    <div>{task.endingDate?.[0]+"/"+task.endingDate?.[1]+"/"+task.endingDate?.[2]}</div>
                                </div>
                            </div>
                            <div className='w-full h-[300px] max-w-[700px] p-5 bg-white rounded-md shadow-md mx-auto'>
                                <h2 className='text-xl font-medium'>Images</h2>
                                <div className='w-full h-[90%] gap-5 flex flex-wrap justify-center overflow-auto'>
                                    <div className='w-48 h-48 shadow-md'>
                                        <img src={HouseCleaning01} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-48 h-48 shadow-md'>
                                        <img src={HouseCleaning02} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-48 h-48 shadow-md'>
                                        <img src={LandCleaning01} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-48 h-48 shadow-md'>
                                        <img src={HouseCleaning01} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-48 h-48 shadow-md'>
                                        <img src={HouseCleaning02} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-48 h-48 shadow-md'>
                                        <img src={LandCleaning01} className='w-full h-full object-cover' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className='w-2/5 min-w-[400px] bg-white p-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>Give Feedback</h2>
                            <textarea className='w-full min-h-[300px] mt-2 rounded-md border-gray-400 placeholder:text-gray-300 text-sm outline-none focus:ring-0' placeholder='Add your feedback...'></textarea>
                        </div>
                        <div className='text-center mt-5'>                            
                            <button 
                                className='w-full mt-2 bg-primary-blue-800 text-white py-4 px-5 rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300 z-50'
                                onClick={() => setShowModal(true)}
                            >
                                Make a complain
                            </button>
                        </div>
                        <div className='text-center mt-6'>
                            <button className='w-full mt-2 bg-sky-600 py-3 px-5 text-white rounded-md hover:bg-sky-400 hover:-translate-y-1 transition duration-300 flex justify-center items-center gap-5'>
                                <AiFillWechat className='w-8 h-8 hover:bg-sky-300' />
                                Open Chat
                            </button>
                        </div>                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ViewOngoingTask
