import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';

const OngoingTasksPO = () => {
    const axiosPrivate = useAxiosPrivate();
    const [ongoingTasks, setOngoingTasks] = useState([]);
    const [properties, setProperties] = useState([]);
    const { auth } = useAuth();

    const fetchOngoingTasks = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/tasks/ongoing-tasks-po?email=${auth.user}`);
            setOngoingTasks(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const fetchAllProperties = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/property/get-all-properties-by-owner?email=${auth.user}`);
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchOngoingTasks();
        fetchAllProperties();
    }, [auth.user]);

    function getPropertyType(propertyId) {
        const property = properties.find((prop) => prop.propertyId === propertyId);
        return property ? property.propertyType : "N/A";
    }


    return (
        <div>
            <div className="flex w-full p-10">
                <div className="w-full h-full">
                    <h1 className='text-2xl font-semibold'>Ongoing Tasks</h1>
                    <Outlet />
                    <div className='w-full h-[90%] mt-5 overflow-auto rounded-md'>
                        <div className="shadow border-b bg-slate-300 border-gray-200 rounded-lg overflow-auto">
                            <table className="max-h-full min-w-full divide-y divide-gray-200">
                                <thead className="bg-[#d8e5ff]">
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
                                            Task ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Task
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Started Date
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">View</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="w-full max-h-100 bg-white h-full divide-y divide-gray-200">
                                    {ongoingTasks.map((task) => (
                                        <tr key={task.taskId}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.propertyId}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {getPropertyType(task.propertyId)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.taskId}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.task}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.registered_date?.[0]+"/"+(task.registered_date?.[1] < 10 ? "0"+task.registered_date?.[1] : task.registered_date?.[1]) +"/"+(task.registered_date?.[2] < 10 ? "0"+task.registered_date?.[2] : task.registered_date?.[2])}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                                <Link
                                                    to={{
                                                        pathname: `view-ongoing-task/${task.propertyId}/${task.taskId}`,
                                                    }}
                                                >
                                                    <button className="bg-[#013A63] py-1.5 px-3 text-white text-xs rounded-lg hover:bg-[#013A63]/80 hover:shadow">
                                                        View
                                                    </button>
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
        </div>
    )
}

export default OngoingTasksPO
