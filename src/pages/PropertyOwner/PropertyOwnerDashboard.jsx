import React, { useEffect } from "react";
import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyType from "./PropertyType";
import { useState } from "react";
import MakeComplaints from "./MakeComplaints";
import useAuth from "../../hooks/useAuth";
import { axiosPrivate } from "../../api/axios";

const PropertyOwnerDashboard = ({ properties, ongoingTasks }) => {
    const {auth} = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  console.log();

  const reports = [
        {
            id: 1,
            propertyId: 'P001',
            description: '2023 July Monthly Report',
        },
        {
            id: 2,
            propertyId: 'P002',
            description: '2023 July Monthly Report',
        },
    ];

    

  return (
    <div className="w-full">
      <PropertyType visible={showModal} onClose={handleOnClose} /> 
      <div className="w-full">
        {/* <DashboardPO />            */}

        <section className="dashboard-po w-full h-[calc(100vh-4.5rem)] flex justify-center items-center z-10 gap-5 overflow-auto px-5">
          <div className="w-full min-h-full h-fit py-9 px-5">
            <div className="registered-properties w-full min-w-[300px] h-[280px] bg-white py-5 px-7 mb-10 rounded-md shadow-md border-[#EDF2FB]">
              <div className="w-full flex justify-between pb-5">
                <h1 className="text-lg font-semibold">Properties</h1>
                <div className="button-container flex gap-2">

                  <button
                    className="bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300"
                    onClick={() => setShowModal(true)}
                  >
                    + Add New Property
                  </button>
                </div>
              </div>

              <div className="w-full h-44 text-sm overflow-auto">
                <table className="w-full border-separate border-spacing-y-2">
                  <thead className="text-xs uppercase text-[#ADB5BD]">
                    <tr>
                      <th
                        scope="col"
                        className="relative px-6 py-2 font-medium"
                      >
                        Property ID
                      </th>
                      <th
                        scope="col"
                        className="relative px-6 py-2 font-medium"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="relative px-6 py-2 font-medium"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="relative px-6 py-2 font-medium"
                      >
                        Registered Status
                      </th>
                      <th
                        scope="col"
                        className="relative px-6 py-2 font-medium"
                      >
                        Task Supervisor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((property) => (
                        (property.registeredStatus.toUpperCase() === "REGISTERED" || property.registeredStatus.toUpperCase() === "PENDING") && (
                            <tr key={property.propertyId} className="text-center text-sm odd:bg-[#EDF2FB] even:bg-[#D7E3FC]">
                                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                    {property.propertyId}
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                    {property.propertyType}
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                    {property.address}
                                </td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600">
                                    {/* {property.registeredStatus} */}
                                    {/* <span className="bg-[#b7efc5] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#25a244]">
                                        Registered
                                    </span>  */}
                                    {/* <span className='bg-[#f7e1d3] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#f26b21]'>Pending</span> */}
                                    {property.registeredStatus.toUpperCase() === "REGISTERED" ? (
                                        <span className="bg-[#b7efc5] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#25a244]">
                                            Registered
                                        </span>
                                    ) : property.registeredStatus.toUpperCase() === "PENDING" ? (
                                        <span className="bg-[#f7e1d3] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#f26b21]">
                                            Pending
                                        </span>
                                    ) : null}
                                </td>
                                <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                    {property.taskSupervisor ? property.taskSupervisor : "-"}
                                </td>
                            </tr>
                        )
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="upcoming-tasks w-full h-[279px] bg-white py-5 px-7 rounded-md shadow-md border border-[#EDF2FB]">
                <div className="w-full flex justify-between mb-1">
                    <h1 className="text-lg font-semibold">Ongoing Tasks</h1>
                    <div>
                        <Link
                            to={{
                                pathname: 'ongoing-tasks',
                            }}
                        >
                            <button className="w-fit h-fit px-2.5 py-2 bg-primary-blue-800 text-xs text-white rounded-lg hover:bg-primary-blue-800/80 hover:-translate-y-0.5 transition duration-200">
                                View All Ongoing Tasks
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full h-44 text-sm overflow-auto">
                    <table className="w-full border-separate border-spacing-y-2">
                        <thead className="text-xs uppercase text-[#ADB5BD]">
                            <tr>
                                <th
                                    scope="col"
                                    className="relative px-6 py-2 font-medium"
                                >
                                    Property ID
                                </th>
                                <th
                                    scope="col"
                                    className="relative px-6 py-2 font-medium"
                                >
                                    Task ID
                                </th>
                                <th
                                    scope="col"
                                    className="relative px-6 py-2 font-medium"
                                >
                                    Task
                                </th>
                                <th
                                    scope="col"
                                    className="relative px-6 py-2 font-medium"
                                >
                                    Started Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ongoingTasks.map((task) => (
                                <tr key={task.taskId} className="text-center text-sm odd:bg-[#EDF2FB] even:bg-[#D7E3FC]">
                                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                        {task.propertyId}
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                        {task.taskId}
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                        {task.task}
                                    </td>
                                    <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                                        {task.startedDate?.[0]+"-"+(task.startedDate?.[1] < 10 ? "0"+task.startedDate?.[1] : task.startedDate?.[1])+"-"+(task.startedDate?.[2] < 10 ? "0"+task.startedDate?.[2] : task.startedDate?.[2])}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
              </div>

                {/* <div className="w-full h-44 overflow-auto ">
                    {ongoingTasks.map((task) => (
                        <div className="overflow-auto">
                            <div key={task.taskId} className="tableRow text-sm w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#EDF2FB]">
                                <div>{task.propertyId}</div>
                                <div>{task.taskId}</div>
                                <div className="w-64 text-center">{task.task}</div>
                                <div>{task.startedDate[0]+"-"+task.startedDate[1]+"-"+task.startedDate[2]}</div>
                            </div>
                        </div>  
                    ))}            
                </div> */}
            </div>
          </div>

          <div className="w-2/4 min-w-[300px] min-h-full h-fit pr-4">
            {/* <div className="monthly-reports w-full min-h-[280px] bg-white p-5 mt-10 rounded-md shadow-md border border-[#EDF2FB]">
              <div className="w-full flex justify-between">
                <h1 className="text-lg font-semibold mx-auto">
                  New Monthly Reports
                </h1>
              </div>

                <div className="w-full h-40 mb-4 overflow-auto">
                    {reports.map((report) => (
                        <div className="flex justify-between items-center py-2 px-4 text-sm odd:bg-[#A9D6E5]/70 even:bg-[#A9D6E5]/30 mt-1 rounded-md">
                            <div>{report.propertyId}</div>
                            <div>{report.description}</div>
                            <Link
                            to={{
                                pathname: `../reports/view-monthly-report/${report.propertyId}`,
                            }}
                            >
                                <button className="w-fit h-fit px-2.5 py-1 bg-[#01497C] text-xs text-white rounded-lg hover:bg-[#01497C]/90 hover:-translate-y-0.5 transition duration-200">
                                    View
                                </button>
                            </Link>
                        </div>
                    ))}
              </div>

              <div className="w-full flex justify-center">
                {/* <button
                  className="bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300"
                  onClick={() => navigate("/po/reports")}
                >
                  View All Monthly Reports
                </button> 
              </div>
            </div> */}

            <div className="due-payments w-full h-[280px] bg-white p-5 mt-10 rounded-md shadow-md border border-[#EDF2FB]">
              <div className="w-full flex justify-between">
                <h1 className="text-lg font-semibold mx-auto">Due Payments</h1>
              </div>
              <div className="w-full h-40 mt-2 flex justify-center items-center">
                <div className="w-full text-center text-sm italic text-[#61A5C2]">
                  No Due Payments
                </div>
              </div>
              <div className="w-full flex justify-center mt-3">
                <Link
                  to={{
                    pathname: "/po/payment",
                  }}
                >
                  {/* <button
                    type="button"
                    className="bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 
                                    hover:-translate-y-1 transition duration-300"
                  >
                    View Payments
                  </button> */}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertyOwnerDashboard;
