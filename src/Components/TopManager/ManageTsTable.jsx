import { Table, Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { Pagination } from "flowbite-react";
import { Label, Select } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import { useEffect } from "react";

const ManageTsTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const {auth} = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [tableData, setTableData] = useState([]); // Initialize tableData as an empty array

  useEffect(() => {
    // Make an HTTP GET request to fetch table data
   axiosPrivate.get("api/v1/tm/accepted") // Replace with the correct URL for your Spring Boot endpoint
      .then((response) => {
        // Set the response data as the table data
        setTableData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosPrivate]);
  

  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search term
  const filteredData = tableData.filter((rowData) => {
    const propertyId = rowData.propertyId || "";
  
    const location  = rowData.location || "";
  
    return (
      propertyId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
   
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

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Property Id</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task Supervisor</Table.HeadCell>
            <Table.HeadCell>No of ongoing Tasks</Table.HeadCell>
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
                  <Table.Cell>
                    <a
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      href="/tables"
                    >
                      {rowData.location}
                    </a>
                  </Table.Cell>
                  <Table.Cell>{rowData.name}</Table.Cell>
                  <Table.Cell>{rowData.ongoingTask}</Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-4">
                      <Button
                        className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                        onClick={() => props.setOpenModal("accept")}
                      >
                        Update
                      </Button>
                    </div>
                    <Modal
                      show={props.openModal === "accept"}
                      position={props.modalPlacement}
                      size="md"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>
                        Update Assigned Task supervisor?
                      </Modal.Header>
                      <Modal.Body>
                        <div className="">
                          <div className="max-w-md" id="select">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="countries"
                                value="Select the task supervisor"
                              />
                            </div>
                            <Select id="countries" required>
                              <option>Shashika</option>
                              <option>Kavisha</option>
                              <option>Surani</option>
                              <option>Anjalee</option>
                            </Select>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={() => props.setOpenModal(undefined)}
                          className="bg-secondary-gray hover:bg-secondary-gray-light"
                        >
                          Update
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

export default ManageTsTable;
