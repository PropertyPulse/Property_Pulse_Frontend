import React, {useEffect, useState} from "react";
import filterIcon from "../../Assets/Icons/filter-icon.png"
import sortIcon from "../../Assets/Icons/sort-icon.png"
import {Button} from "flowbite-react";
import {RiWechatFill} from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const TaskApprovals = () => {

    const {auth} = useAuth();
    const axiosPrivate = useAxiosPrivate();

    const [taskApprovals, setTaskApprovals] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axiosPrivate.get('api/v1/task-requests/task-approvals', {
                params: {email: auth.user}
            });
            setTaskApprovals(response.data);
            console.log(response.data);
        }catch (error) {
            console.log('Error fetching data: ', error);
        }
    }

    useEffect( () => {
        fetchData();
    }, []);

    const headings = ['Property ID', 'Location', 'Task ID', 'Task', 'Manpower Company Request', '', ''];

    return (
        <div className='w-full px-24 py-10'>
            <div className='w-full pb-6'>
                <span className='sub-title'>Task Approvals</span>
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

            {/*Table 01*/}
            <div className='pt-3 pb-6'>
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
                        {taskApprovals.map((task, index) => (
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                <td scope="col" className="px-6 py-3">{task.propertyId}</td>
                                <td scope="col" className="px-6 py-3">{task.location}</td>
                                <td scope="col" className="px-6 py-3">{task.taskId}</td>
                                <td scope="col" className="px-6 py-3">{task.task}</td>
                                <td className="px-6 py-3">
                                    {(task.manpowerCompanyRequestStatus === 'Accepted') ? (
                                        <label className="text-white bg-green-500 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300">
                                            {task.manpowerCompanyRequestStatus}
                                        </label>
                                    ) : (task.manpowerCompanyRequestStatus === 'Pending') ? (
                                        <label className="text-white bg-yellow-400 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300">
                                            {task.manpowerCompanyRequestStatus}
                                        </label>
                                    ) : (task.manpowerCompanyRequestStatus === 'Requested Reschedule') ? (
                                        <label className="text-white bg-red-700 font-medium rounded-2xl text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300">
                                            {task.manpowerCompanyRequestStatus}
                                        </label>
                                    ) : (task.manpowerCompanyRequestStatus === 'Make a Request') ? (
                                        <button className="text-white bg-blue-700 font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                            {task.manpowerCompanyRequestStatus}
                                        </button>
                                    ) : (<label></label>)}
                                </td>
                                <td className="px-6 py-3">
                                    {(task.manpowerCompanyRequestStatus === 'Accepted') ? (
                                        <button className="text-white bg-gradient-to-br bg-blue-button-end font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                            View Details
                                        </button>
                                    ) : (task.manpowerCompanyRequestStatus === 'Requested Reschedule') ? (
                                        <button className="text-blue-700 border-2 border-blue-700 font-medium rounded-lg text-xs px-3 py-0.5 text-center inline-flex items-center hover:scale-[1.02]">
                                            Reschedule
                                        </button>
                                    ) : (task.manpowerCompanyRequestStatus === 'Pending') ? (
                                        <button className="text-red-700 border-2 border-red-700 font-medium rounded-lg text-xs px-3 py-0.5 text-center inline-flex items-center hover:scale-[1.02]">
                                            Cancel
                                        </button>
                                    ) : (<label></label>)}
                                </td>
                                {(task.manpowerCompanyRequestStatus === 'Accepted') ? (
                                    <td className="px-6 py-3">
                                        <RiWechatFill className='text-secondary-gray text-2xl cursor-pointer' />
                                    </td>
                                ) : (<td><button></button></td>)}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default TaskApprovals;