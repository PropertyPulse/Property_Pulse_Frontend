import React, { useState } from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';
import { Link } from 'react-router-dom';

const MonthlyReportsPO = () => {
    const [values, setValues] = useState({
        reportID: "",
    });

    const reportDetails = [
        {
            id: 1,
            name: "reportID",
        },
        {
            id: 2,
            name: "propertyID",
        },
        {
            id: 3,
            name: "taskSupervisor",
        },
        {
            id: 4,
            name: "date",
        },
        {
            id: 5,
            name: "description",
        },
    ];


    return (
        <div className='w-full h-[90%] flex'>
            <div className='w-full'>  
                <div className='w-full h-[calc(100vh-4.5rem)] p-10 '>
                    <div className='title'>
                        <h1 className='text-2xl'>Monthly Reports</h1>
                    </div>
                    <div className='w-full p-10 rounded-md shadow-lg shadow-[#EDF2FB] border border-[#EDF2FB] mt-4'>
                        <div className='shadow-md overflow-hidden border-b border-gray-200 rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className="bg-[#d5e4ff]">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Report ID
                                        </th>
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
                                            Task Supervisor
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Description
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">View</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            MR001
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            P001
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            TS002
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            2023/08/02
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            All scheduled tasks have been completed
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <Link 
                                                to={{
                                                    pathname: 'view-monthly-report'
                                                }}
                                            >
                                                <button className="bg-[#013A63] py-1.5 px-3 text-white rounded-lg hover:bg-[#013A63]/80 hover:shadow">
                                                    View
                                                </button>
                                            </Link>
                                            
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            MR002
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            P002
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            TS003
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            2023/08/05
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            All scheduled tasks have been completed, tap has fixed
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                            <Link 
                                                to={{
                                                    pathname: 'view-monthly-report'
                                                }}
                                            >
                                                <button className="bg-[#013A63] py-1.5 px-3 text-white rounded-lg hover:bg-[#013A63]/80 hover:shadow">
                                                    View
                                                </button>
                                            </Link>
                                            {/* <button className="bg-[#013A63] py-1.5 px-3 text-white rounded-lg hover:bg-[#013A63]/80 hover:shadow">
                                                View
                                            </button> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    )
}

export default MonthlyReportsPO
