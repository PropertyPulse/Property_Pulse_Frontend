import React, {useEffect, useState} from "react";
import filterIcon from "../../Assets/Icons/filter-icon.png"
import sortIcon from "../../Assets/Icons/sort-icon.png"
import {Button} from "flowbite-react";
import {RiWechatFill} from "react-icons/ri";
import {FcAddImage} from "react-icons/fc";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const OngoingTasks = () => {

    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth();
    const [ongoingTasks, setOngoingTasks] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axiosPrivate.get('/api/v1/tasks/ongoing-tasks',{
                params: { email: auth.user }
            });
            setOngoingTasks(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const headings = ['Property ID', 'Location', 'Task ID', 'Manpower Company', '', 'Upload Images', '', ''];

    const [showModalViewOnMap, setShowModalViewOnMap] = React.useState(false);

    const endTask = (taskId) => {
        Swal.fire({
            title: 'Do you want to end the task?',
            text: "Task will be marked as ended!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosPrivate.put('/api/v1/tasks/ongoing-tasks/end-task', {
                    taskId: taskId,
                }).then((response) => {
                    Swal.fire(
                        'Done!',
                        'Task marked as Ended!',
                        'success'
                    );
                })
                    .catch((error) => {
                        Swal.fire('Error', 'Unable to Mark the Task as ended', 'error');
                    });
            }
        });
    }

    return (
        <div className='w-full px-24 py-10'>
            <div className='w-full pb-6'>
                <span className='sub-title'>Ongoing Tasks</span>
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
            <div className='py-2'>
                {/*<div className='pb-4 font-medium'>Today, 17th August 2023</div>*/}
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
                        {ongoingTasks.map((task, index) => (
                            <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                <td scope="col" className="px-6 py-3">{task.propertyId}</td>
                                <td className="px-6 py-3">
                                    <button className="text-white bg-gradient-to-br bg-blue-button-end font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                                            onClick={() => {setShowModalViewOnMap(true);} }
                                    >
                                        View on Map
                                    </button>
                                </td>
                                {showModalViewOnMap ? (
                                        <>
                                            <div className="z-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                <div className="relative w-auto my-6 mx-auto w-1/3">
                                                    {/*content*/}
                                                    <div
                                                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                        {/*header*/}
                                                        <div
                                                            className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                                            {/*<h3 className="text-lg font-semibold text-gray-900 lg:text-2xl dark:text-white">*/}
                                                            {/*    Suggest Task*/}
                                                            {/*</h3>*/}
                                                            <span className='pl-40 font-semibold text-xl text-primary-blue-500 px-0'>Location</span>
                                                            <button type="button"
                                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                    data-modal-toggle="defaultModal"
                                                                    onClick={() => setShowModalViewOnMap(false)}
                                                            >
                                                                <svg className="w-5 h-5" fill="currentColor"
                                                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        {/*body*/}
                                                        <div className='map-div h-full card bg-white'>
                                                            <iframe
                                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9034101404995!2d79.85875276094056!3d6.902153718617741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1690225374454!5m2!1sen!2slk"
                                                                className='w-96 h-64'
                                                                frameBorder='0'
                                                                allowFullScreen=''
                                                                loading='lazy'
                                                                referrerPolicy='no-referrer-when-downgrade'
                                                                title='Google Maps Embed'
                                                            ></iframe>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                        </>
                                    ) : null }
                                <td scope="col" className="px-6 py-3">{task.taskId}</td>
                                {/*<td scope="col" className="px-6 py-3">{task.location}</td>*/}
                                <td scope="col" className="px-6 py-3">{task.manpowerCompany}</td>
                                <td className="px-6 py-3">
                                    <button className="text-white bg-gradient-to-br bg-blue-button-end font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform">
                                        View Details
                                    </button>
                                </td>
                                <td className="px-6 py-3 justify-center flex">
                                    <FcAddImage className='text-secondary-gray text-3xl cursor-pointer' />
                                </td>
                                <td className="px-6 py-3">
                                    <RiWechatFill className='text-secondary-gray text-2xl cursor-pointer' />
                                </td>
                                <td className="px-6 py-3">
                                    <button className="text-white bg-red-500 font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                                    onClick={() => endTask(task.taskId)}>
                                        End Task
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OngoingTasks;