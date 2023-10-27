import propertyImage from '../../Assets/property-image.jpg'
import React from "react";
import {Link} from "react-router-dom";
import ScheduledTasksList from "../../Components/TaskSupervisor/ScheduledTasksList";
import SuggestTaskForm from "./SuggestTask"
import {Button} from "@material-tailwind/react";
import {AiFillWechat} from "react-icons/ai";
import {MdAddTask} from "react-icons/md";
import {FaTasks} from "react-icons/fa";
import {IoDocumentLockSharp, IoDocumentTextSharp} from "react-icons/io5";
import {CgMoveTask} from "react-icons/cg";

const ViewProperty = () => {

    const propertyDetails = [
        {title: 'Property Type', data: 'House'},
        {title: 'Owner Name', data: 'Anjalee Neelika'},
        {title: 'District', data: 'Colombo'},
        {title: 'Address', data: 'No. 67, Robert Gunawardena Mawatha, Colombo 06'},
        {title: 'Contact Number', data: '077-7891902'},
        {title: 'Insurance Agent Contact', data: '078-2678138'},
        {title: 'Agreement Date', data: '27-07-2023'},
        {title: 'Maintenance Duration', data: '2 Years'},
    ]

    const [showModalScheduledTasks, setShowModalScheduledTasks] = React.useState(false);
    const [showModalSuggestTask, setShowModalSuggestTask] = React.useState(false);


    return (
        <div className='w-full px-24 py-9 relative'>
            <div className='w-full row sub-title'>Property ID: P97</div>
            <div className='w-full flex row-auto justify-start items-start space-x-8 py-8'>

                <div className='w-1/3'>
                    <div className='card bg-white h-auto py-4'>
                        <img src={propertyImage} className='min-h-[200px]' alt='Property'/>
                    </div>

                    {/*<div id="default-carousel" className="relative w-full" data-carousel="slide">*/}

                    {/*    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">*/}

                    {/*        <div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                    {/*            <img src={propertyImage}*/}
                    {/*                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                    {/*                 alt="..." />*/}
                    {/*        </div>*/}

                    {/*        <div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                    {/*            <img src={propertyImage}*/}
                    {/*                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                    {/*                 alt="..." />*/}
                    {/*        </div>*/}

                    {/*        <div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                    {/*            <img src={propertyImage}*/}
                    {/*                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                    {/*                 alt="..." />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">*/}
                    {/*        <button type="button" className="w-3 h-3 rounded-full" aria-current="true"*/}
                    {/*                aria-label="Slide 1" data-carousel-slide-to="0"></button>*/}
                    {/*        <button type="button" className="w-3 h-3 rounded-full" aria-current="false"*/}
                    {/*                aria-label="Slide 2" data-carousel-slide-to="1"></button>*/}
                    {/*        <button type="button" className="w-3 h-3 rounded-full" aria-current="false"*/}
                    {/*                aria-label="Slide 3" data-carousel-slide-to="2"></button>*/}
                    {/*    </div>*/}

                    {/*    <button type="button"*/}
                    {/*            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
                    {/*            data-carousel-prev>*/}
                    {/*        <span*/}
                    {/*            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
                    {/*            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                 fill="none" viewBox="0 0 6 10">*/}
                    {/*                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                    {/*                      d="M5 1 1 5l4 4"/>*/}
                    {/*            </svg>*/}
                    {/*            <span className="sr-only">Previous</span>*/}
                    {/*        </span>*/}
                    {/*    </button>*/}
                    {/*    <button type="button"*/}
                    {/*            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
                    {/*            data-carousel-next>*/}
                    {/*        <span*/}
                    {/*            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
                    {/*            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                 fill="none" viewBox="0 0 6 10">*/}
                    {/*                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                    {/*                      d="m1 9 4-4-4-4"/>*/}
                    {/*            </svg>*/}
                    {/*            <span className="sr-only">Next</span>*/}
                    {/*        </span>*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                </div>

                <div className='w-2/3'>
                    <div className='flex space-x-3 pb-6'>
                        <div className='py-2 px-3 rounded-md border-2 border-blue-800'>
                            <button className='flex justify-center py-1 font-md rounded-sm text-sm space-x-2.5'
                                onClick={() => setShowModalSuggestTask(true)}>
                                <span className='text-2xl pt-2 text-blue-800'><MdAddTask /></span>
                                <span className='font-medium text-center text-blue-800'>Suggest a Task</span>
                            </button>
                        </div>

                        <div className='py-2 px-3 rounded-md border-2 border-blue-800'>
                            <button className='flex justify-center py-1 font-md rounded-sm text-sm space-x-2.5'
                                    onClick={() => setShowModalScheduledTasks(true)}>
                                <span className='text-2xl pt-2 text-blue-800'><FaTasks /></span>
                                <span className='font-medium text-center text-blue-800'>Scheduled Tasks</span>
                            </button>
                        </div>

                        <div className='py-2 px-3 rounded-md border-2 border-blue-800'>
                            <button className='flex justify-center py-1 font-md rounded-sm text-sm space-x-2'>
                                <span className='text-4xl pt-1 text-blue-800'><CgMoveTask /></span>
                                <span className='font-medium text-center text-blue-800'>Requested Tasks</span>
                            </button>
                        </div>
                        <div className='py-2 px-3 rounded-md border-2 border-blue-800'>
                            <Link to='/task-supervisor/assigned-properties/view-property/legal-documents' className='flex justify-center py-1 font-md rounded-sm text-sm space-x-2.5'>
                                <span className='text-2xl pt-2 text-blue-800'><IoDocumentLockSharp /></span>
                                <span className='font-medium text-center text-blue-800'>Legal Documents</span>
                            </Link>
                        </div>
                        <div className='py-2 px-3 rounded-md border-2 border-blue-800'>
                            <Link to='/task-supervisor/assigned-properties/view-property/monthly-reports' className='flex justify-center py-1 font-md rounded-sm text-sm space-x-2.5'>
                                <span className='text-2xl pt-2 text-blue-800'><IoDocumentTextSharp /></span>
                                <span className='font-medium text-center text-blue-800'>Monthly Reports</span>
                            </Link>
                        </div>
                    </div>

                    {showModalSuggestTask ? (
                        <>
                            <div className="z-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative w-auto my-6 mx-auto w-1/3">
                                    {/*content*/}
                                    <div
                                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div
                                            className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">

                                            <span className='font-semibold text-xl text-primary-blue-500 px-0'>Suggest Task</span>
                                            <button type="button"
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    data-modal-toggle="defaultModal"
                                                    onClick={() => setShowModalSuggestTask(false)}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor"
                                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <SuggestTaskForm />
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}

                    {showModalScheduledTasks ? (
                        <>
                            <div

                                className="z-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                onClick={() => setShowModalScheduledTasks(false)}>
                                <div className="relative w-auto my-6 mx-auto">
                                    {/*content*/}
                                    <div
                                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div
                                            className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                                            <h3 className="text-lg font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                                Scheduled Tasks
                                            </h3>
                                            <button type="button"
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    data-modal-toggle="defaultModal">
                                                <svg className="w-5 h-5" fill="currentColor"
                                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                                                </svg>
                                            </button>
                                        </div>

                                        <ScheduledTasksList />

                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}

                    <div className='w-auto card bg-white p-0 flex justify-items-start justify-center'>
                        <div className='p-0'>
                            <div
                                className='sub-title text-lg text-black text-center border-b-2 border-b-black py-2'>Property
                                Details
                            </div>
                            <div className='py-4 px-6 w-full'>
                                {propertyDetails.map((info, index) => (
                                    <React.Fragment key={index}>
                                        <div className='w-full flex'>
                                            <div className='w-1/2'>
                                                <div className='py-1 text-sm font-medium w-72'>{info.title}</div>
                                            </div>
                                            <div className='w-1/2'>
                                                <div className='py-1 text-sm'>{info.data}</div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 right-6 pt-2'>
                <Button className='bg-gradient-to-br from-pink-500 to-voilet-500'>
                    <Link to='/task-supervisor/assigned-properties/view-property/chat' className='flex space-x-3'>
                        <span className='text-white text-3xl'><AiFillWechat /></span>
                        <span className='text-white pt-2 text-md'>Chat with Owner</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default ViewProperty;