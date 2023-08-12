import { Table, Button, Modal} from "flowbite-react";
import React, { useState } from "react";
import { Label} from "flowbite-react";
import { Pagination } from "flowbite-react";
import { FileInput } from "flowbite-react";

const OngoingQuatationTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const tableData = [
    {
      propertyId: "10101010",
      location: "Gampaha",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
    },
    {
      propertyId: "10101010",
      location: "Kaduwela",
      task: "Repair water pipe",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234647",
    },
    {
      propertyId: "10101010",
      location: "Waliweriya",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
    },
    {
      propertyId: "10101010",
      location: "Colombo",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
    },
    {
      propertyId: "10101010",
      location: "Gampaha",
      task: "Clean the house",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234647",
    },
    {
      propertyId: "10101010",
      location: "Colombo",
      task: "Clean the land",
      price: "10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
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
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task</Table.HeadCell>
            <Table.HeadCell>Estimated Price</Table.HeadCell>
            <Table.HeadCell>Schedule Date</Table.HeadCell>
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
                  <Table.Cell>{rowData.task}</Table.Cell>
                  <Table.Cell>{rowData.price + ".00"}</Table.Cell>
                  <Table.Cell>{rowData.scheduleDate}</Table.Cell>

                  <Table.Cell>{rowData.details}</Table.Cell>
                  <Table.Cell>
                    <Button
                      className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                      onClick={() => props.setOpenModal("placement")}
                    >
                      Submit
                    </Button>
                    <Modal
                      show={props.openModal === "placement"}
                      position={props.modalPlacement}
                      size="md"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>Quatation Submission</Modal.Header>
                      <Modal.Body>
                        <div className="">
                          <div className="max-w-md" id="fileUpload">
                            <div className="mb-2 block">
                              <Label htmlFor="file" value="Upload file" />
                            </div>
                            <FileInput
                              helperText="After the quatation analysis is done,Respones will be shown at Insurance request Section.
                              Then you can procede the insurance Process"
                              id="file"
                            />
                          </div>
                        </div>

                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={() => props.setOpenModal(undefined)}
                          className="bg-secondary-gray hover:bg-secondary-gray-light"
                        >
                          Submit
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

export default OngoingQuatationTable;
