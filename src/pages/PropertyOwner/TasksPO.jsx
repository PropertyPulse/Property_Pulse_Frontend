import React from "react";
import { useState } from "react";
import RequestTask from "./RequestTask";
import axios, { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const TasksPO = () => {
    const {auth} = useAuth();
    const axiosPrivate = useAxiosPrivate();
    
    const propertyOwnerEmail = auth.user;
    console.log(propertyOwnerEmail);

    const [ongoingTasks, setOngoingTasks] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);

    const fetchData = async () => {
        try {
            const response = await axiosPrivate.get('/api/v1/tasks/ongoing-tasks-po', {
                params: { email: auth.user }
            });
            setOngoingTasks(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [auth.user]);

    useEffect(() => {
        console.log(ongoingTasks);
    })

    return (
        <div className="w-full">
            <RequestTask visible={showModal} onClose={handleOnClose} />

            <div className="w-full">      
                <section className="dashboard-po w-full h-[calc(100vh-4.5rem)] z-10 gap-5 overflow-auto px-10 py-8">
                    <div className="flex justify-between items-center">
                        <h1 className="title text-2xl ">Related Tasks</h1>
                        <button
                            className="request-task w-fit h-fit px-8 py-4 text-white text-sm bg-primary-blue-800 rounded-md shadow-lg hover:bg-primary-blue-800/80
                                        hover:-translate-y-1 transition duration-300"
                            onClick={() => setShowModal(true)}
                        >
                            Request a New Task
                        </button>
                    </div>

                    <div className="w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 mt-4 px-8 py-5 rounded-md">
                        <h2 className="w-full text-lg font-semibold">
                            Suggested Tasks by Task Supervisor
                        </h2>
                        <div className="mt-3 w-full">
                            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-[#EDF2FB]">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Suggested Task
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Description
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Priority
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
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            ></th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Fixing the roof in the kitchen
                                            </td>
                                            <td className="max-w-[300px] px-6 py-4 whitespace-wrap text-sm text-gray-500">
                                                The roof has been leaking for a few days. Since this
                                                is the rainy season it needs tto be fixed as soon as
                                                possible
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <label className="w-fit h-fit bg-red-300 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
                                                URGENT
                                                </label>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                2023/07/15
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className="w-fit h-fit bg-[#2A6F97] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#2A6F97]/80">
                                                    See Details
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className="w-fit h-fit bg-[#013A63] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#013A63]/80">
                                                Reject
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 mt-4 px-8 py-5 rounded-md">
                        <h2 className="w-full text-lg font-semibold">
                           Task Prices To Be Accepted
                        </h2>
                        <div className="mt-3 w-full">
                            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
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
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            ></th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                2
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                1
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Cleaning the garden
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                Rs. 2000.00
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className="w-fit h-fit bg-[#2A6F97] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#2A6F97]/80">
                                                    Accept
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className="w-fit h-fit bg-[#013A63] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#013A63]/80">
                                                    Reject
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center gap-10">
                        <div className="w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 px-8 py-5 rounded-md overflow-auto">
                            <h2 className="w-full text-lg font-semibold">
                                Ongoing Tasks
                            </h2>
                            <div className="w-full mt-3">
                                <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#EDF2FB]">
                                            <tr className="text-xs text-gray-500 tracking-wider uppercase">
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
                                                <th 
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Started Time
                                                </th>
                                                <th 
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                ></th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">T001</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Clean the house</td>                                                
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023/07/21</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09:45 A.M.</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                                    <Link
                                                        to={{
                                                            pathname: `../dashboard/ongoing-tasks/view-ongoing-task/P001/T001`,
                                                        }}
                                                    >
                                                        <button className="w-fit h-fit bg-[#013A63] text-white text-sm py-1.5 px-4 rounded-md hover:bg-[#013A63]/80">
                                                            Check Progress
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center gap-10">
                        <div className="w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 px-8 py-5 rounded-md overflow-auto">
                            <h2 className="w-full text-lg font-semibold">
                                Scheduled Tasks
                            </h2>
                            <div className="w-full mt-3">
                                <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#EDF2FB]">
                                            <tr className="text-xs text-gray-500 tracking-wider uppercase">
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
                                                    Frequency
                                                </th>
                                                <th 
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Last Carried-out Day
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">T001</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Clean the house</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Once a month</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023/07/21</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] mb-8 px-8 py-5 rounded-md">
                        <h2 className="w-full text-lg font-semibold">
                            Requested Tasks
                        </h2>
                        <div className="w-full mt-3">
                            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-[#EDF2FB]">
                                        <tr className="text-xs text-gray-500 tracking-wider uppercase">
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
                                                Date to be Carried Out
                                            </th>
                                            <th 
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Task Acceptance State
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">T001</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Clean the house</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023/07/21</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        
                    <div className="w-full flex justify-between items-center gap-10">
                        <div className="w-full max-h-[500px] bg-white border-[#D7E3FC] shadow-md shadow-[#D7E3FC] px-8 py-5 rounded-md overflow-auto">
                            <h2 className="w-full text-lg font-semibold">
                                Completed Tasks
                            </h2>
                            <div className="w-full mt-3">
                                <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#EDF2FB]">
                                            <tr className="text-xs text-gray-500 tracking-wider uppercase">
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
                                                    Task Type
                                                </th>
                                                <th 
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Completed Date
                                                </th>
                                                <th     
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Cost
                                                </th>
                                                {/* <th></th> */}
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">T003</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Repairing the tap</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Requested</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023/07/21</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. 3000.00</td>
                                                {/* <td> */}
                                                {/* <a href='completed-tasks' className='bg-[#013A63] px-3 py-1.5 text-white text-xs rounded-md hover:bg-[#013A63]/80'>View</a> */}

                                                {/* <Link
                                                                                    to={{
                                                                                        pathname: 'completed-tasks',
                                                                                    }}
                                                                                >
                                                                                    <button className='text-xs px-4 py-2 text-white bg-primary-blue-800 hover:bg-primary-blue-800/80 rounded-md hover:-translate-y-1 transition duration-200'>View</button>
                                                                                </Link> */}
                                                {/* </td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
    );
};

export default TasksPO;
