import { Table, Button, Modal } from "flowbite-react";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Label, Select } from "flowbite-react";
import ViewLandRegistration from "./ViewLandRegistration";
import ViewHouseRegistration from "./ViewHouseRegistration";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const NewPropertyTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const axiosPrivate = useAxiosPrivate();
  const onPageChange = (page) => setCurrentPage(page);
  let [tableData, setTableData] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState([]);

  // This is the data that will be displayed in the table

  //pagination and filtering

  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search term
  const filteredData = tableData.filter((rowData) => {
    const propertyId = rowData.id|| "";
    const type = rowData.type || "";
    const location  = rowData.location || "";
  
    return (
      propertyId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.toString().toLowerCase().includes(searchTerm.toLowerCase()) || 
      location.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  // Calculate startIndex and endIndex based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Determine which data to display based on the search term
  const dataToDisplay = searchTerm ? filteredData : tableData;

  // Slice the data to display based on startIndex and endIndex
  const paginatedData = dataToDisplay.slice(startIndex, endIndex);


  useEffect(() => {
   

    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get("http://localhost:8080/api/v1/tm/newmanagmentrequest",{
         
        }); 
        if (response.status === 200) {
          setTableData(response.data); 
        } else {
          console.error("Failed to fetch data from the backend.");
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);



  // ... Rest of your component code









  const handleRequestValuation = async (propertyId) => {
    try {
      const data = { propertyId }; // Create a data object with the propertyId
      const response = await axiosPrivate.post(
        "http://localhost:8080/api/v1/tm/requestValuationandAcceptProperty",
        data
      );
      console.log(response);

    } catch (err) {
      console.error(err.message);
    }
  }

  const handleReject = (propertyId) => {
   
    axiosPrivate
      .post("http://localhost:8080/api/v1/tm/reject-property", { propertyId: propertyId })
      .then((response) => {

        if (response.status === 200) {
          setTableData((prevData) => prevData.filter((rowData) => rowData.id !== propertyId));
          props.setOpenModal(undefined); 
        }

      })
      .catch((error) => {
        console.error("Error rejecting property: ", error);
      });
  };
  

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Request Id</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task List</Table.HeadCell>
            <Table.HeadCell>Duration</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
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
                    {rowData.id}
                  </Table.Cell>
                  <Table.Cell>
                    
                    {rowData.type}
                </Table.Cell>
                  <Table.Cell>
                    
                      {rowData.location}
                  </Table.Cell>
                  <Table.Cell>
                    {" "}
                    <Button onClick={() => props.setOpenModal("viewTask")}>
                      View Tasks
                    </Button>
                  </Table.Cell>
                  <Table.Cell>{rowData.duration}</Table.Cell>
                  <Table.Cell>{rowData.propertyOwnerContactNo}</Table.Cell>
                  <Table.Cell>
        
                    <Button onClick={() => {
                      setSelectedRowData(rowData);
                      props.setOpenModal(rowData.type === "LAND" ? "viewLand" : "viewHouse");
                    }}>
                      View
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-4">
                      <Button
                        className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                        onClick={() => props.setOpenModal("accept")}
                      >
                        Accept
                      </Button>
                      <Button
  color="failure"
  onClick={ () => props.setOpenModal("reject")}
>
 Reject
</Button>
                    </div>
                    <Modal
                      show={props.openModal === "accept"}
                      size="md"
                      popup
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Do you want to accept this Property?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="success"
                              onClick={() => {
                                handleRequestValuation(rowData.propertyId);
                                props.setOpenModal(undefined);
                              }}
                            >
                              Yes,Accept and Request Valuation Report
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => props.setOpenModal(undefined)}
                            >
                              No, cancel
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                    {/* reject modal */}
                    <Modal
                      show={props.openModal === "reject"}
                      size="md"
                      popup
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to reject this Property?
                          </h3>

                          <div className="m-4">
                            <div className="max-w-md" id="select">
                              <div className="mb-2 block">
                                <Label
                                  htmlFor="countries"
                                  value="Select the reason"
                                />
                              </div>
                              <Select id="countries" required>
                                <option>Not in the working area</option>
                                <option>Too small tasks</option>
                                <option>Property Owner unverified</option>
                              </Select>
                            </div>
                          </div>

                          <div className="flex justify-center gap-4">
                            <Button
                              color="failure"
                              onClick={() => handleReject(rowData.propertyId)}
                            >
                              Yes, Reject
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => props.setOpenModal(undefined)}
                            >
                              No, cancel
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* view Land modal */}
                    <Modal
                      show={props.openModal === "viewLand"}
                      size="7xl"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>View Request</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <ViewLandRegistration data = {selectedRowData} />
                        </div>
                      </Modal.Body>
                    </Modal>

                    {/* view House modal */}
                    <Modal
                      show={props.openModal === "viewHouse"}
                      size="7xl"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>View Request</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <ViewHouseRegistration data = {selectedRowData} />
                        </div>
                      </Modal.Body>
                    </Modal>

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

export default NewPropertyTable;
