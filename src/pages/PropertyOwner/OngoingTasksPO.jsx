import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const OngoingTasksPO = () => {
    const tasks = [
        {
          id: 1,
          propertyID: "P001",
          propertyType: "House",
          taskID: '1234',
          taskDescription: "Repairing the roof",
          startedDateTime: "2023/08/12 09:30"
        },
        {
          id: 2,
          propertyID: "P002",
          propertyType: "Land",
          taskID: '5677',
          taskDescription: "Weeding the land",
          startedDateTime: "2023/08/12 09:30"
        },
    ];


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
                                            Started Date and Time
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">View</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="w-full max-h-100 bg-white h-full divide-y divide-gray-200">
                                    {tasks.map((task) => (
                                        <tr key={task.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.propertyID}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.propertyType}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.taskID}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.taskDescription}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {task.startedDateTime}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                                <Link
                                                    to={{
                                                        pathname: `view-ongoing-task/${task.propertyID}/${task.taskID}`,
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
