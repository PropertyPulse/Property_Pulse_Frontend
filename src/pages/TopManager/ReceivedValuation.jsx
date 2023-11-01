import React, { useState } from "react";
import { Card } from "flowbite-react";
import ValuationReportTable from "../../Components/TopManager/ValuationReportTable";
import { Tabs } from "flowbite-react";

const ReceivedValuation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

// const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Card className="flex-grow md:w-1/2 xl:w-full m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Valuation Reports
          </h5>

          <div>
            <Tabs.Group aria-label="Pills" style="pills">
              <Tabs.Item active title="Received" className="bg-white">
              <div className="flex-grow md:w-4/5 p-4">
            {/* search form ... */}
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search EmployeeId, Name, Nic..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>
          <div>
            <ValuationReportTable  search ={searchTerm} mode='Received'/>
          </div>
              </Tabs.Item>
              <Tabs.Item title="Pending" >
              <div className="flex-grow md:w-4/5 p-4">
            {/* search form ... */}
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search PropertyId Or Location"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </form>
          </div>
          <div>
            <ValuationReportTable   search ={searchTerm} mode='Pending'/>
          </div>
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ReceivedValuation;
