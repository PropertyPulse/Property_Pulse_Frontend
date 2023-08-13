import React, { useState } from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import {AiOutlineSearch} from 'react-icons/ai';
import PropertyType from './PropertyType';
import { Link } from 'react-router-dom';

const PropertiesPO = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);

    const properties = [
        {
            id: 1,
            propertyID: 'P001',
            propertyType: 'House',
            registeredDate: '2023/02/05',
            duration: '1 year',
            registeredStatus: 'Registered',
            taskSupervisor: 'TS001',
        },
        {
            id: 2,
            propertyID: 'P002',
            propertyType: 'Land',
            registeredDate: '2023/02/05',
            duration: '1 year',
            registeredStatus: 'Pending',
            taskSupervisor: 'TS003',
        },
    ];

    return (
        <div className='w-full h-[100vh] bg-background-blue'>
            <PropertyType visible={showModal} onClose={handleOnClose} />
            <div className='w-full z-40'>
                <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
            </div> 
            <div className='w-full h-[calc(100vh-4.5rem)] p-10'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold'>Properties</h1>
                    <button 
                        type='button' 
                        className='px-7 py-4 bg-primary-blue-800 text-white text-sm rounded-md shadow-md shadow-[#A9D6E5] 
                        hover:-translate-y-1 hover:bg-primary-blue-800/90 transition duration-300' 
                        onClick={() => setShowModal(true)}
                    >
                        + Add New Property
                    </button>
                </div>

                <div className='w-fit h-fit bg-[#d2dcf3] m-5 mx-auto flex justify-center items-center rounded-full focus:bg-[#CCDBFD]/80 hover:bg-[#CCDBFD]/80'>
                    <AiOutlineSearch className='w-5 h-5 fill-slate-500 ml-4' />
                    <input type='text' className='w-80 h-10 bg-transparent border-none focus:ring-0 mr-4 text-sm text-[#495057] placeholder:text-[#8795b7]' placeholder='Search for a property' />
                </div>

                <div className='w-full h-[480px] p-10'>
                    <div className='shadow border-b bg-slate-300 border-gray-200 rounded-lg overflow-auto'>
                        <table className='max-h-full min-w-full divide-y divide-gray-200'>
                            <thead className="bg-[#EDF2FB]">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Property ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Property Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Registered Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Managing Duration
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Registered Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Assigned Task Supervisor
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">View</span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="w-full max-h-100 bg-white h-full divide-y divide-gray-200"> 
                                {properties.map(property => (                              
                                    <tr key={property.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {property.propertyID}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {property.propertyType}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {property.registeredDate}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {property.duration}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {(property.registeredStatus === "Registered") ? (
                                                <span className='bg-[#b7efc5] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#25a244]'>Registered</span>
                                            ) : (
                                                <span className='bg-[#f7e1d3] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#f26b21]'>Pending</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {property.taskSupervisor}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <Link
                                                to = {{
                                                    pathname: `property-details/${property.propertyID}`
                                                }}
                                            >
                                                <button className="bg-[#013A63] py-1.5 px-3 text-white text-xs rounded-lg hover:bg-[#013A63]/80 hover:shadow">View</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))} 

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesPO
