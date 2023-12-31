import React from 'react'
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar'
import { useParams } from 'react-router';
import { useState } from 'react';
import PropertyImg1 from '../../Assets/property-image.jpg';
import { Link } from 'react-router-dom';
import OpenChat from '../../Components/PropertyOwner/OpenChat';
import { IoLogoWechat } from 'react-icons/io5';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useEffect } from 'react';

const PropertyViewMore = () => {
    const { id } = useParams();
    const axiosPrivate = useAxiosPrivate();
    const [property, setProperty] = useState([]);

    console.log(id);
    const fetchPropertyDetails = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/property/get-property-by-id?id=${id}`);
            setProperty(response.data);
        } catch (error) {
            console.error('Error fetching data...', error);
        }        
    };

    useEffect(() => {
        fetchPropertyDetails();
    }, [id]);
    console.log(property);

    const tasks = [
        {
            id: 1,
            taskID: 'T001',
            task: 'Cleaning the house',
            frequency: 'Once a week',
            lastCarriedOutDate: '2023/08/06',
        },
        {
            id: 2,
            taskID: 'T002',
            task: 'Weeding the flower beds',
            frequency: 'Once a month',
            lastCarriedOutDate: '2023/08/06',
        }
    ];

    return (
        <div className='w-full'>
            <div className='w-full h-[calc(100vh-4.5rem)] flex justify-between items-center'>
                <div className='w-2/3 h-full px-10 pt-7 pb-10'>
                    <h1 className='text-2xl font-semibold'>Property Details: {id}</h1>

                    <div className='w-full h-fit bg-[#D7E3FC] border border-[#E2EAFC] shadow-lg shadow-[#E2EAFC] px-8 py-5 mt-5 rounded-lg flex justify-between items-center'>
                        <div className='w-fit'>
                            <div className='flex gap-2'>
                                <label className='font-semibold text-[#012A4A]'>Type: </label>
                                <div className='text-[#014F86]'>{property.type}</div>
                            </div>
                            <div className='flex gap-2'>
                                <label className='font-semibold text-[#012A4A]'>Managing Duration: </label>
                                <div className='text-[#014F86]'>{property.duration}</div>
                            </div>
                            <div className='flex gap-2'>
                                <label className='font-semibold text-[#012A4A]'>Registered Date: </label>
                                <div className='text-[#014F86]'>
                                    {property.registered_date?.[0]+"/"+(property.registered_date?.[1] < 10 ? "0"+property.registered_date?.[1] : property.registered_date?.[1]) +"/"+(property.registered_date?.[2] < 10 ? "0"+property.registered_date?.[2] : property.registered_date?.[2])}
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <label className='font-semibold text-[#012A4A]'>Address: </label>
                                <div className='text-[#014F86]'>{property.address}</div>
                            </div>
                        </div>
                        
                        <div>
                            <Link 
                                to={{
                                    pathname: `documents`,
                                }}
                            >
                                <button className='bg-primary-blue-800 px-5 py-3 text-white shadow-md shadow-[#89C2D9] rounded-md hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>Show Documents</button>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full min-h-[300px] bg-white border border-[#E2EAFC] shadow-lg shadow-[#E2EAFC] px-8 py-5 mt-10 rounded-lg'>
                        <h1 className='text-xl font-medium'>Scheduled Tasks</h1>
                        <div className='w-full h-[250px] mt-3 overflow-x-auto'>
                            <table className='w-full border-separate border-spacing-y-2'>
                                <thead className='text-xs uppercase text-[#ADB5BD]' >
                                    <tr>
                                        <th scope="col" className="relative px-6 py-3 font-semibold">Task ID</th>
                                        <th scope="col" className="relative px-6 py-3 font-semibold">Task</th>
                                        <th scope="col" className="relative px-6 py-3 font-semibold">Frequency</th>
                                        <th scope="col" className="relative px-6 py-3 font-semibold">Last Carried-Out Date</th>
                                    </tr>
                                </thead>
                                <tbody>                                    
                                    {tasks.map(task => (  
                                        <tr key={task.id} className='text-center text-sm odd:bg-[#EDF2FB] even:bg-[#D7E3FC]'>
                                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">{task.taskID}</td>
                                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">{task.task}</td>
                                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">{task.frequency}</td>
                                            <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">{task.lastCarriedOutDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 h-full p-5'>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-full h-64 bg-white rounded-md'>
                            <h2 className='text-xl font-md text-center p-2'>Due Payments</h2>
                            <div className='w-full h-[55%] flex justify-center items-center px-2 overflow-auto'>
                                <div className='italic text-[#2A6F97]'>No Due Payments</div>
                            </div>
                            <div className='w-full flex justify-center'>
                                <Link
                                    to={{
                                        pathname: 'payments'
                                    }}
                                >
                                    <button className='bg-primary-blue-800 text-white text-sm py-3 px-5 rounded-md mt-3 shadow-md 
                                    shadow-[#D7E3FC] hover:bg-primary-blue-800/80 hover:-translate-y-1 transition duration-300'>
                                        View Payments
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {property.registered_status && property.registered_status.toUpperCase() === "REGISTERED" ? (
                            <div className=''>
                                <h3 className='font-semibold text-[#012A4A] text-lg underline text-center'>Assigned Task Supervisor: </h3>
                                <div className='mt-2 px-10 text-center'>
                                    <div className='flex gap-2'>
                                        {/* <label className='font-semibold text-[#012A4A]'>Name: </label> */}
                                        <div className='text-[#014F86]'>Jayantha Galigamuwa</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <label className='font-semibold text-[#012A4A]'>Employee ID: </label>
                                        <div className='text-[#014F86]'>3</div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    {/* <div className='w-full h-56 bg-white rounded-md mb-10'>
                        <h2 className='text-xl font-md text-center p-2'>Gallery</h2>
                        <div className='w-full h-[70%] flex-auto px-2 overflow-auto'>
                            <button className='w-[110px] h-[110px] bg-slate-100 m-1 rounded-md'>
                                <img src={PropertyImg1} alt='' className='w-full h-full object-cover rounded-md' />
                            </button>
                            <button className='w-[110px] h-[110px] bg-slate-100 m-1 rounded-md'>
                                <img src={PropertyImg1} alt='' className='w-full h-full object-cover rounded-md' />
                            </button>
                            <button className='w-[110px] h-[110px] bg-slate-100 m-1 rounded-md'>
                                <img src={PropertyImg1} alt='' className='w-full h-full object-cover rounded-md' />
                            </button>
                            <button className='w-[110px] h-[110px] bg-slate-100 m-1 rounded-md'>
                                <img src={PropertyImg1} alt='' className='w-full h-full object-cover rounded-md' />       
                            </button>
                            <button className='w-[110px] h-[110px] bg-slate-100 m-1 rounded-md'>
                                <img src={PropertyImg1} alt='' className='w-full h-full object-cover rounded-md' />
                            </button>
                        </div>
                    </div> */}
                    
                    
                    {/* <div className='mt-10'>
                        <button className='w-full bg-[#2588d4] p-4 rounded-md text-white flex justify-center gap-3 peer hover:opacity-80 hover:-translate-y-1 transition duration-200 shadow-lg'>
                            <IoLogoWechat className='w-6 h-6 fill-white peer-hover:opacity-80'/>
                            Open Chat
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PropertyViewMore
