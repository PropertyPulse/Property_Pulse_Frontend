import React from "react";
import filterIcon from "../../Assets/Icons/filter-icon.png"
import sortIcon from "../../Assets/Icons/sort-icon.png"
import {Button} from "flowbite-react";
import {RiWechatFill} from "react-icons/ri";

const UpcomingTasks= () => {

    const headings = ['Property ID', 'Location', 'Task ID', 'Task', 'Manpower Company Request', '', '', ''];

    const dates = [
        {date: 'Today, 17th August 2023',
            rows: [
                {propertyID: 'P123',
                    location: 'Colombo 06',
                    taskID: 'T989',
                    task: 'Paint the house',
                    status: 'Accepted',},
            ]
        },
        {date: 'Tomorrow, 18th August 2023',
            rows: [
                {propertyID: 'P67',
                    location: 'Hikkaduwa',
                    taskID: 'T912',
                    task: 'Trim grass',
                    status: 'Accepted with Feedback',},

                {propertyID: 'P89',
                    location: 'Panadura',
                    taskID: 'T812',
                    task: 'Repair a water pipe',
                    status: 'Declined',},
            ]
        },
        {date: '19th August 2023',
            rows: [
                {propertyID: 'P92',
                    location: 'Rathnapura',
                    taskID: 'T785',
                    task: 'Clean the Garden',
                    status: 'Pending',},
                {propertyID: 'P103',
                    location: 'Anuradhapura',
                    taskID: 'T456',
                    task: 'Paint the house',
                    status: 'Make a Request',},
            ]
        },
    ];

    return (
        <div className='w-full px-24 py-10'>
            <div className='w-full pb-6'>
                <span className='sub-title'>Upcoming Tasks</span>
            </div>
            <div className='top flex h-16 space-x-4'>
                <div className='top-part-1 w-3/4'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-2.5 text-sm text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
                <div className='w-1/4 flex justify-self-end space-x-4'>
                    <div className='top-part-2 w-1/2 flex justify-self-end'>
                        <Button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-white bg-blue-400 font-medium rounded-lg text-sm px-3 text-center inline-flex items-center shadow-md shadow-gray-300"
                                type="button">
                            <img src={filterIcon} alt="metamask" className="h-4 w-4 mr-2" />
                            Filter <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                            <div id="dropdown"
                                 className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                </ul>
                            </div>
                        </Button>
                    </div>

                    <div className='top-part-2 w-1/2 flex justify-self-end'>
                        <Button id="dropdownDefault" data-dropdown-toggle="dropdown"
                                className="text-white bg-blue-400 font-medium rounded-lg text-sm px-3 text-center inline-flex items-center shadow-md shadow-gray-300"
                                type="button">
                            <img src={sortIcon} alt="metamask" className="h-4 w-4 mr-2" />
                            Sort<svg className="ml-2 w-4 h-4" fill="none"
                                                 stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linejoin="round"  d="M19 9l-7 7-7-7"></path>
                        </svg>
                            <div id="dropdown"
                                 className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Example</a>
                                    </li>
                                </ul>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>

            {dates.map((table, index) => (
                <div className='pb-6'>
                    <div className='pt-2 pb-4 font-medium'>{table.date}</div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 pb-2">
                            <tr>
                                {headings.map((heading, index) => (
                                    <th scope="col" className="px-6 py-3">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {table.rows.map((row, index) => (
                                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                    <td scope="col" className="px-6 py-3">{row.propertyID}</td>
                                    <td scope="col" className="px-6 py-3">{row.location}</td>
                                    <td scope="col" className="px-6 py-3">{row.taskID}</td>
                                    <td scope="col" className="px-6 py-3">{row.task}</td>
                                    <td className="px-6 py-3">
                                        {(row.status === 'Accepted') ? (
                                            <label className="text-white bg-green-500 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300">
                                                {row.status}
                                            </label>
                                        ) : (row.status === 'Pending') ? (
                                            <label className="text-white bg-yellow-400 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300">
                                                {row.status}
                                            </label>
                                        ) : (row.status === 'Accepted with Feedback') ? (
                                            <label className="text-white bg-yellow-700 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300">
                                                {row.status}
                                            </label>
                                        ) : (row.status === 'Declined') ? (
                                            <label className="text-white bg-red-700 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300">
                                                {row.status}
                                            </label>
                                        ) : (row.status === 'Make a Request') ? (
                                            <button className="text-white bg-blue-700 font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                                {row.status}
                                            </button>
                                        ) : (<label></label>)}
                                    </td>
                                    {(row.status === 'Accepted') ? (
                                        <td className="px-6 py-3">
                                            <button className="text-white bg-gradient-to-br bg-blue-button-end font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                                View Details
                                            </button>
                                        </td>
                                    ) : (<td><button></button></td>)}
                                    {(row.status === 'Accepted') ? (
                                        <td className="px-6 py-3">
                                            <RiWechatFill className='text-secondary-gray text-2xl cursor-pointer' />
                                        </td>
                                    ) : (<td><button></button></td>)}
                                    {(row.status === 'Accepted') ? (
                                        <td className="px-6 py-3">
                                            <button className="text-white bg-green-600 font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                                Start
                                            </button>
                                        </td>
                                    ) : (<td><button></button></td>)}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default UpcomingTasks;