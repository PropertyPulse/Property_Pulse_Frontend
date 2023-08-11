import propertyImage from '../../Assets/property-image.jpg'
import React from "react";
import {Link} from "react-router-dom";
import ScheduledTasksList from "../../Components/TaskSupervisor/ScheduledTasksList";

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

    const actions = [
        {
            text: 'Chat with Owner',
            link: './chat'
        },
        {text: 'Suggest a New Task'},
        {text: 'View Scheduled Tasks'},
        {text: 'View Requested Tasks'},
        {
            text: 'View Legal Documents',
            link: './legal-documents'
        },
        {
            text: 'View Monthly Reports',
            link: './monthly-reports'
        },
    ]

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className='w-full px-24 py-9'>
            <div className='w-full row sub-title'>Property ID: 82389</div>
            <div className='w-full flex row-auto justify-start items-start space-x-8 py-8'>
                <div className='w-4/12'>
                    <div className='card bg-white h-auto py-4'>
                        <img src={propertyImage} className='min-h-[150px]' alt='Property'/>
                    </div>
                    <div className='flex justify-center py-4'>
                        <span className='border-2 border-black rounded-2xl text-center py-1 px-5 font-md text-sm w-fit
                        cursor-pointer hover:bg-secondary-gray-light hover:text-white'>
                            Remove Photo
                        </span>
                    </div>
                </div>
                <div className='w-4/12 card bg-white p-0 flex justify-items-start justify-center'>
                    <div className='p-0'>
                        <div
                            className='sub-title text-lg text-black text-center border-b-2 border-b-black py-2'>Property
                            Details
                        </div>
                        <div className='p-6 w-full'>
                            {propertyDetails.map((info, index) => (
                                <React.Fragment key={index}>
                                    <div className='w-full flex'>
                                        <div className='w-1/2'>
                                            <div className='py-1 text-sm'>{info.title}</div>
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
                <div className='w-4/12'>
                    <div className='sub-title text-lg text-black border-b-2 border-b-black pb-2'>More Actions</div>
                    <div className='py-4 gap-y-4'>
                        {actions.map((action, index) => (
                            <React.Fragment key={index}>
                                <div className='py-2'>
                                    {/*<Link to={action.link} className='border-2 border-black rounded-2xl text-center py-1 px-5 font-md text-sm w-fit*/}
                                    {/*hover:bg-secondary-gray-light hover:text-white'>*/}
                                    {/*    {action.text}*/}
                                    {/*</Link>*/}


                                    <button
                                        className=""
                                        type="button"
                                        onClick={() => setShowModal(true)}
                                    >
                                        <Link to={action.link}
                                              className='border-2 border-black rounded-2xl text-center py-1 px-5 font-md text-sm w-fit hover:bg-secondary-gray-light hover:text-white'>
                                            {action.text}
                                        </Link>
                                    </button>
                                </div>


                                {showModal ? (
                                    <>
                                        <div
                                            className="z-50 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}>
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
                                                    {/*body*/}
                                                        <ScheduledTasksList />
                                                    {/*footer*/}
                                                    {/*<div*/}
                                                    {/*    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">*/}
                                                    {/*    <button*/}
                                                    {/*        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                                                    {/*        type="button"*/}
                                                    {/*        onClick={() => setShowModal(false)}*/}
                                                    {/*    >*/}
                                                    {/*        Close*/}
                                                    {/*    </button>*/}
                                                    {/*    <button*/}
                                                    {/*        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"*/}
                                                    {/*        type="button"*/}
                                                    {/*        onClick={() => setShowModal(false)}*/}
                                                    {/*    >*/}
                                                    {/*        Save Changes*/}
                                                    {/*    </button>*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className='sub-title text-lg text-black border-b-2 border-b-black pb-2'>Monthly Report</div>
                    <Link to='./submit-monthly-report' className='py-3 flex justify-center'>
                        <div className='btn-md bg-primary-blue-500 text-white w-fit'>Generate Report</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ViewProperty;