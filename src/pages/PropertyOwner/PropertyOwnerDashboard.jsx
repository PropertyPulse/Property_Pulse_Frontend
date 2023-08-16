import React from "react";
import NavbarWithoutSidebar from "../../Components/Common/NavbarWithoutSidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import PropertyType from "./PropertyType";
import { useState } from "react";

const PropertyOwnerDashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);

  return (
    <div className="w-full bg-[#EDF2FB]">
      <PropertyType visible={showModal} onClose={handleOnClose} />
      <div className="w-full">
        {/* <DashboardPO />            */}

        <section className="dashboard-po h-[calc(100vh-4.5rem)] w-full flex overflow-auto z-10 gap-5">
          <div className="w-full min-h-full h-fit py-10 px-5">
            <div className="registered-properties w-full min-w-[300px] h-[280px] bg-white py-5 px-7 mb-10 rounded-md shadow-md border-[#EDF2FB]">
              <div className="w-full flex justify-between">
                <h1 className="text-lg font-semibold">Properties</h1>
                <div className="button-container flex gap-2">
                  {/* <Link
                    to={{
                      pathname: "/po/properties",
                    }}
                  >
                    <button className="bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300">
                      View All Properties
                    </button>
                  </Link> */}

                  {/* <button
                    className="bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300"
                    onClick={() => setShowModal(true)}
                  >
                    + Add New Property
                  </button> */}
                </div>
              </div>

              <div className="w-full h-44 overflow-auto text-sm">
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
                    <tr className="text-center text-sm odd:bg-[#EDF2FB] even:bg-[#D7E3FC]">
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                        P001
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                        House
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                        No. 50, Kegalle Road, Polgahawela
                      </td>
                      <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-600">
                        <span className="bg-[#b7efc5] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#25a244]">
                          Registered
                        </span>
                        {/* <span className='bg-[#f7e1d3] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#f26b21]'>Pending</span> */}
                      </td>
                      <td className="px-6 py-1 whitespace-nowrap text-sm text-gray-600">
                        TS002
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="upcomin-tasks w-full h-[280px] bg-white py-5 px-7 rounded-md shadow-md border border-[#EDF2FB]">
                <div className="w-full flex justify-between">
                    <h1 className="text-lg font-semibold">Ongoing Tasks</h1>
                    {/* <a href='property-owner/upcoming-tasks' className='bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300'>View All Tasks</a> */}
                </div>

                <div className="w-full h-44 overflow-auto ">
                    <div className="overflow-auto">
                        <div className="tableRow text-sm w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#EDF2FB]">
                            <div>P001</div>
                            <div>T001</div>
                            <div className="w-64 text-center">Cleaning the house</div>
                            <div>2023/08/12</div>
                            <div>
                                <button className="w-fit h-fit px-2.5 py-1 bg-[#01497C] text-xs text-white rounded-lg hover:bg-[#01497C]/90 hover:-translate-y-0.5 transition duration-200">
                                    View
                                </button>
                            </div>
                        </div>
                        <div className="tableRow text-sm w-full h-fit px-3 py-2 mt-1 rounded-lg flex flex-row flex-wrap justify-between items-center bg-[#D7E3FC]">
                            <div>P002</div>
                            <div>T003</div>
                            <div className="w-64 text-center">
                                Weeding the flower beds
                            </div>
                            <div>2023/08/12</div>
                            <div>
                                <Link
                                    to={{
                                        pathname: 'ongoing-tasks',
                                    }}
                                >
                                    <button className="w-fit h-fit px-2.5 py-1 bg-[#01497C] text-xs text-white rounded-lg hover:bg-[#01497C]/90 hover:-translate-y-0.5 transition duration-200">
                                        View
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
          </div>

          <div className="w-2/4 min-w-[300px] min-h-full h-fit bg-[#EDF2FB] pt-10 pr-4">
            <div className="monthly-reports w-full min-h-[280px] bg-white p-5 mb-10 rounded-md shadow-md border border-[#EDF2FB]">
              <div className="w-full flex justify-between">
                <h1 className="text-lg font-semibold mx-auto">
                  New Monthly Reports
                </h1>
              </div>

              <div className="w-full h-40 mb-4 overflow-auto">
                <div className="flex justify-between items-center py-2 px-4 text-sm bg-[#A9D6E5]/70 mt-1 rounded-md">
                  <div>P001</div>
                  <div>2023 July Monthly Report</div>
                  <Link
                    to={{
                      pathname: './view-monthly-report/P001',
                    }}
                  >
                    <button className="w-fit h-fit px-2.5 py-1 bg-[#01497C] text-xs text-white rounded-lg hover:bg-[#01497C]/90 hover:-translate-y-0.5 transition duration-200">
                      View
                    </button>
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 px-4 text-sm bg-[#A9D6E5]/30 mt-1 rounded-md">
                  <div>P002</div>
                  <div>2023 July Monthly Report</div>
                  <button className="w-fit h-fit px-2.5 py-1 bg-[#01497C] text-xs text-white rounded-lg hover:bg-[#01497C]/90 hover:-translate-y-0.5 transition duration-200">
                    View
                  </button>
                </div>
              </div>

              <div className="w-full flex justify-center">
                {/* <button
                  className="bg-primary-blue-800 px-3 py-2 text-sm text-white rounded-md hover:bg-primary-blue-500 hover:-translate-y-1 transition duration-300"
                  onClick={() => navigate("/po/reports")}
                >
                  View All Monthly Reports
                </button> */}
              </div>
            </div>

            <div className="due-payments w-full h-[280px] bg-white p-5 rounded-md shadow-md border border-[#EDF2FB]">
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
