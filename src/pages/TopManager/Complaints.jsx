import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import ViewComplaintTable from "../../Components/TopManager/ViewComplaintTable";


const Complaints = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

    const [complaints, setComplaints] = useState([]);
  
  
    // Fetch complaint details when the component mounts
    useEffect(() => {
      fetchComplaints(); // Fetch complaints from your API
    }, []);
  
    const fetchComplaints = () => {
      // Make an HTTP request to fetch complaint details from your backend API
      axios.get("http://localhost:8080/api/v1/tm/all")
        .then((response) => {
          // Set the state of the complaints list to the value received from the API.
          // This will trigger a re-render and display the complaint details.
          setComplaints(response.data);
        });
    };
  
// const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Card className="flex-grow md:w-1/2 xl:w-full m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           Complain
          </h5>
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
            <ViewComplaintTable searchTerm={searchTerm}  complaints = {complaints}/>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Complaints;