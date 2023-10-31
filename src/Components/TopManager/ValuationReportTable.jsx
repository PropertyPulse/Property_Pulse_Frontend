import { Table, Button, Modal } from "flowbite-react";
import React, { useEffect,useState } from "react";
import { Pagination } from "flowbite-react";
import { Label, Select } from "flowbite-react";
import ViewLandRegistration from "./ViewLandRegistration";
import ViewUploadedFile from "../Common/ViewUploadedFile";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import ViewHouseRegistration from "./ViewHouseRegistration";



const ValuationReportTable = ({mode ,search}) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [selectedRowData, setSelectedRowData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const onPageChange = (page) => setCurrentPage(page);
  const  [Supervisors,setSupervisors] = useState([]);
  const [selectedSupervisorId, setSelectedSupervisorId] = useState(null);
 const [ SelectedPropertyId,setSelectedPropertyId] = useState(null);
 const [tableData,setTableData] = useState([{}]);

  // useEffect(() => {
   
  //   axiosPrivate.get("http://localhost:8080/api/v1/tm/NewManagmentRequests", {})
  //     .then((response) => {
        
  //       setSupervisors(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching supervisors:", error);
  //     });
  // }, []);


  const fetchSupervisors = (propertyAddress) => {
    axiosPrivate
      .get("http://localhost:8080/api/v1/tm/select-a-task-supervisor", {
        params: { address: propertyAddress } // Include property's address in the API call
      })
      .then((response) => {
        setSupervisors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching supervisors:", error);
      });
  };

  const assignTask = (selectedSupervisorId,selectedPropertyId) => {
    axiosPrivate.post("http://localhost:8080/api/v1/tm/Assign-a-task-supervisor", {
      propertyId: selectedPropertyId, // Pass the selected property's ID
      taskSupervisorId: selectedSupervisorId, // Pass the selected supervisor's ID
    })
    .then((response) => {
      // Handle the API response as needed
    })
    .catch((error) => {
      console.error("Error assigning the task supervisor:", error);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request using axiosPrivate to fetch valuation reports
        const response = await axiosPrivate.get("/api/v1/tm/valuation-reports", {
          params: {
            status: mode, 
          }
        });

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
          // Set the loaded valuation reports into the state
          setTableData(response.data);
        }
      } catch (error) {
        console.error("Error fetching valuation reports:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [axiosPrivate, mode]);
  
  
  //pagination and filtering

  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search term
// Filter data based on search term for propertyId and type
const filteredData = tableData.filter((rowData) => {
  const propertyId = rowData.propertyId || "";
  const type = rowData.type || "";
  const location  = rowData.location || "";

  return (
    propertyId.toString().toLowerCase().includes(search.toLowerCase()) ||
    type.toString().toLowerCase().includes(search.toLowerCase()) || 
    location.toString().toLowerCase().includes(search.toLowerCase())
  );
});


  // Calculate startIndex and endIndex based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Determine which data to display based on the search term
  const dataToDisplay = search ? filteredData : tableData;

  // Slice the data to display based on startIndex and endIndex
  const paginatedData = dataToDisplay.slice(startIndex, endIndex);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Property Id</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task List</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Valuation Report</Table.HeadCell>
            <Table.HeadCell>More info</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Action</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {paginatedData.length === 0 ? (
              <tr className="h-32">
                <td colSpan="8" className="text-center py-4">
                  No data found.
                </td>
              </tr>
            ) : (
              paginatedData.map((rowData, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {rowData.propertyId}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {rowData.type}
                  </Table.Cell>
                  <Table.Cell>{rowData.location}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => props.setOpenModal("viewTask")}>
                      View Tasks
                    </Button>
                  </Table.Cell>
                  {/* view task */}
                  <Modal
                    show={props.openModal === "viewTask"}
                    size="7xl"
                    onClose={() => props.setOpenModal(undefined)}
                  >
                    <Modal.Header>View Lask List</Modal.Header>
                    <Modal.Body>
                      <Table>
                        <Table.Head>
                          <Table.HeadCell>Task name</Table.HeadCell>
                          <Table.HeadCell>Frequency</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              Clean House
                            </Table.Cell>
                            <Table.Cell>Once Week</Table.Cell>
                          </Table.Row>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              Clean Land
                            </Table.Cell>
                            <Table.Cell>Once 2 Week</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Modal.Body>
                  </Modal>
                  <Table.Cell>{rowData.contact}</Table.Cell>
                  <Table.Cell>{rowData.status}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() =>   setOpenModal("viewValuation")}>
                      View
                    </Button>
                    

                    {/* view Land modal */}
                    <Modal
                      show={props.openModal === "viewValuation"}
                      size="7xl"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>View Valuation Report</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <ViewUploadedFile />
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Table.Cell>

                  <Table.Cell>
                    <Button onClick={()  => {  setSelectedRowData(rowData);
                      props.setOpenModal(rowData.type === "LAND" ? "viewLand" : "viewHouse");}}>
                      View
                    </Button>

                    {/* view Land modal */}
                    <Modal
                      show={props.openModal === "viewLand"}
                      size="7xl"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>View Request</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <ViewLandRegistration  data = { selectedRowData}/>
                        </div>
                      </Modal.Body>
                    </Modal>
                    <Modal
                      show={props.openModal === "viewHouse"}
                      size="7xl"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>View Request</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <ViewHouseRegistration data = { selectedRowData}/>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-4">
                      <Button
                        className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                        onClick={() => 
                          {
                            props.setOpenModal("accept");
                            setSelectedPropertyId(rowData.propertyId);
                            fetchSupervisors(rowData.location);}}
                      >
                        Assign
                      </Button>
                    </div>
                    <Modal
                      show={props.openModal === "accept"}
                      position={props.modalPlacement}
                      size="md"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>Assign Task supervisor?</Modal.Header>
                      <Modal.Body>
                        <div className="">
                          <div className="max-w-md" id="select">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="countries"
                                value="Select the task supervisor"
                              />
                            </div>
                            <Select id="countries"   value={selectedSupervisorId}
  onChange={(e) => setSelectedSupervisorId(e.target.value)} required>
                            {Supervisors.map((supervisor) => (
                 
                 <option key={supervisor.id} value={supervisor.id
                }>
                 {supervisor.user.firstname + " " + supervisor.user.lastname}
                  </option>
                ))}
                            </Select>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                      <Button
  className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
  onClick={() => {
    assignTask(selectedSupervisorId,SelectedPropertyId);
    props.setOpenModal(undefined); 
  }}
>
  Assign
</Button>

                        <Button
                          color="gray"
                          onClick={() => props.setOpenModal(undefined)}
                        >
                          Cancel
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table>
        <div className="flex items-center justify-center text-center">
          <Pagination
            currentPage={currentPage}
            layout="table"
            onPageChange={onPageChange}
            showIcons
            totalPages={Math.ceil(dataToDisplay.length / itemsPerPage)}
          />
        </div>
      </div>
    </>
  );
};

export default ValuationReportTable;
