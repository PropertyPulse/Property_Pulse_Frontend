import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PropertyType from "./PropertyType";
import { Link } from "react-router-dom";
import { Tabs } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const PropertiesPO = () => {
    const axiosPrivate = useAxiosPrivate();
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    const [properties, setProperties] = useState([]);
    const { auth } = useAuth();

    const fetchAllProperties = async () => {
        try {
            const response = await axiosPrivate.get(`/api/v1/property/get-all-properties-by-owner?email=${auth.user}`);
            setProperties(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        fetchAllProperties();
    }, [auth.user]);

    useEffect(() => {
        console.log(properties);
    });

    const [propertyId, setPropertyId] = useState();

  return (
    <div className="w-full h-[calc(100vh-4.5rem)]">
      
      <div className="w-full p-10">
        <div className="w-full flex justify-between items-center">
          <PropertyType visible={showModal} onClose={handleOnClose} />
          <h1 className="text-2xl font-semibold">Properties</h1>
          <button
            type="button"
            className="px-7 py-4 bg-primary-blue-800 text-white text-sm rounded-md shadow-md shadow-[#A9D6E5] 
                        hover:-translate-y-1 hover:bg-primary-blue-800/90 transition duration-300"
            onClick={() => setShowModal(true)}
          >
            + Add New Property
          </button>
        </div>

        {/* tabs */}

        <div>
          <Tabs.Group aria-label="Pills" style="pills">
            <Tabs.Item active title="All">
              <div className="w-fit h-fit bg-[#d2dcf3] m-5 mx-auto flex justify-center items-center rounded-full focus:bg-[#CCDBFD]/80 hover:bg-[#CCDBFD]/80">
                <AiOutlineSearch className="w-5 h-5 fill-slate-500 ml-4" />
                <input
                  type="text"
                  className="w-80 h-10 bg-transparent border-none focus:ring-0 mr-4 text-sm text-[#495057] placeholder:text-[#8795b7]"
                  placeholder="Search for a property"
                />
              </div>

              <div className="w-full h-[380px] p-10 overflow-auto">
                <div className="shadow border-b bg-slate-300 border-gray-200 rounded-lg overflow-auto">
                  <table className="max-h-full min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#d5e4ff]">
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
                          Registered Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Managing Duration
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Registered Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Assigned Task Supervisor
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="w-full max-h-100 bg-white h-full divide-y divide-gray-200">
                      {properties.map((property) => (
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {property.propertyId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {property.propertyType}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {property.registeredDate?.[0]+"/"+property.registeredDate?.[1]+"/"+property.registeredDate?.[2]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {property.duration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {property.registeredStatus.toUpperCase() === "REGISTERED" ? (
                              <span className="bg-[#b7efc5] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#25a244]">
                                Registered
                              </span>
                            ) : property.registeredStatus.toUpperCase() === "PENDING" ? (
                              <span className="bg-[#f7e1d3] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#f26b21]">
                                Pending
                              </span>
                            ) : (
                              <span className="bg-[#ff9595] py-1 px-2 rounded-full text-xs font-semibold uppercase text-[#f00]">
                                Rejected
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {property.registeredStatus.toUpperCase() === "REGISTERED" ? (
                                <span>{property.taskSupervisor}</span>
                            ) : (
                                <span>_</span>
                            )}
                            
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            <Link
                              to={{
                                pathname: `property-details/${property.propertyId}`,
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
            </Tabs.Item>
            <Tabs.Item title="Registered">
              <div className="w-fit h-fit bg-[#d2dcf3] m-5 mx-auto flex justify-center items-center rounded-full focus:bg-[#CCDBFD]/80 hover:bg-[#CCDBFD]/80">
                <AiOutlineSearch className="w-5 h-5 fill-slate-500 ml-4" />
                <input
                  type="text"
                  className="w-80 h-10 bg-transparent border-none focus:ring-0 mr-4 text-sm text-[#495057] placeholder:text-[#8795b7]"
                  placeholder="Search for a property"
                />
              </div>

              <div className="w-full h-[380px] p-10 overflow-auto">
                <div className="shadow border-b bg-slate-300 border-gray-200 rounded-lg overflow-auto">
                  <table className="max-h-full min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#d5e4ff]">
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
                          Registered Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Managing Duration
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Registered Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Assigned Task Supervisor
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>

                    {properties.map((property) => (
                      <tbody className="w-full max-h-100 bg-white h-full divide-y divide-gray-200">
                        {property.registeredStatus.toUpperCase === "REGISTERED" ? (
                            <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.propertyId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.propertyType}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.registeredDate?.[0]+"/"+property.registeredDate?.[1]+"/"+property.registeredDate?.[2]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.duration}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span>{property.taskSupervisor}</span>                              
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <Link
                                to={{
                                  pathname: `property-details/${property.propertyId}`,
                                }}
                              >
                                <button className="bg-[#013A63] py-1.5 px-3 text-white text-xs rounded-lg hover:bg-[#013A63]/80 hover:shadow">
                                  View
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ) : (
                            <div></div>
                        )}  
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Pending">
              <div className="w-fit h-fit bg-[#d2dcf3] m-5 mx-auto flex justify-center items-center rounded-full focus:bg-[#CCDBFD]/80 hover:bg-[#CCDBFD]/80">
                <AiOutlineSearch className="w-5 h-5 fill-slate-500 ml-4" />
                <input
                  type="text"
                  className="w-80 h-10 bg-transparent border-none focus:ring-0 mr-4 text-sm text-[#495057] placeholder:text-[#8795b7]"
                  placeholder="Search for a property"
                />
              </div>

              <div className="w-full h-[380px] p-10 overflow-auto">
                <div className="shadow border-b bg-slate-300 border-gray-200 rounded-lg overflow-auto">
                  <table className="max-h-full min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#d5e4ff]">
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
                          Registered Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Managing Duration
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>

                    {properties.map((property) => (
                      <tbody className="w-full max-h-100 bg-white h-full divide-y divide-gray-200">
                        {property.registeredStatus.toUpperCase() === "PENDING" ? (
                            <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.propertyId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.propertyType}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.registeredDate?.[0]+"/"+property.registeredDate?.[1]+"/"+property.registeredDate?.[2]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.duration}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <Link
                                to={{
                                  pathname: `property-details/${property.propertyId}`,
                                }}
                              >
                                <button className="bg-[#013A63] py-1.5 px-3 text-white text-xs rounded-lg hover:bg-[#013A63]/80 hover:shadow">
                                  View
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ) : (
                            <div></div>
                        )}  
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Rejected">
              <div className="w-fit h-fit bg-[#d2dcf3] m-5 mx-auto flex justify-center items-center rounded-full focus:bg-[#CCDBFD]/80 hover:bg-[#CCDBFD]/80">
                <AiOutlineSearch className="w-5 h-5 fill-slate-500 ml-4" />
                <input
                  type="text"
                  className="w-80 h-10 bg-transparent border-none focus:ring-0 mr-4 text-sm text-[#495057] placeholder:text-[#8795b7]"
                  placeholder="Search for a property"
                />
              </div>

              <div className="w-full h-[380px] p-10 overflow-auto">
                <div className="shadow border-b bg-slate-300 border-gray-200 rounded-lg overflow-auto">
                  <table className="max-h-full min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#d5e4ff]">
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
                          Registered Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Managing Duration
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>

                    {properties.map((property) => (
                      <tbody className="w-full max-h-100 bg-white h-full divide-y divide-gray-200">
                        {property.registeredStatus.toUpperCase() === "REJECTED" ? (
                            <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.propertyId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.propertyType}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.registeredDate?.[0]+"/"+property.registeredDate?.[1]+"/"+property.registeredDate?.[2]}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {property.duration}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                              <Link
                                to={{
                                  pathname: `property-details/${property.propertyId}`,
                                }}
                              >
                                <button className="bg-[#013A63] py-1.5 px-3 text-white text-xs rounded-lg hover:bg-[#013A63]/80 hover:shadow">
                                  View
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ) : (
                            <div></div>
                        )}  
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </Tabs.Item>
          </Tabs.Group>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPO;
