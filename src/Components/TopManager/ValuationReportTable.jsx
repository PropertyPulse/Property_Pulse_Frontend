import { Table, Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { Pagination } from "flowbite-react";
import { Label, Select } from "flowbite-react";
import ViewLandRegistration from "./ViewLandRegistration";
import ViewUploadedFile from "../Common/ViewUploadedFile";

const ValuationReportTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const tableData = [
    {
      propertyId: "10101010",
      type: "House",
      location: "Gampaha",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
      status:'Received',
    },
    {
      propertyId: "10101010",
      type: "Land",
      location: "Kaduwela",
      task: "Repair water pipe",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234647",
      status:'Pending',
    },
    {
      propertyId: "10101010",
      type: "House",
      location: "Waliweriya",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
      status:'Received',
    },
    {
      propertyId: "10101010",
      type: "House",
      location: "Colombo",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
      status:'Pending',
    },
    {
      propertyId: "10101010",
      type: "House",
      location: "Gampaha",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234647",
      status:'Received',
    },
    {
      propertyId: "10101010",
      type: "Land",
      location: "Colombo",
      task: "Clean the land",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
      status:'Pending',
    },
    // Add more data objects for other rows...
  ];
  //pagination and filtering

  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search term
  const filteredData = tableData.filter((rowData) =>
    Object.values(rowData).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
                  <Table.Cell>
                      {rowData.location}
                  </Table.Cell>
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
                  <Table.Cell>{rowData.details}</Table.Cell>
                  <Table.Cell>{rowData.status}</Table.Cell>
                  <Table.Cell>
                    <Button onClick={() => props.setOpenModal("viewValuation")}>
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
                    <Button onClick={() => props.setOpenModal("view")}>
                      View
                    </Button>

                      {/* view Land modal */}
                      <Modal
                      show={props.openModal === "view"}
                      size="7xl"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>View Request</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <ViewLandRegistration />
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-4">
                      <Button
                        className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                        onClick={() => props.setOpenModal("accept")}
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
