import React, { useState } from "react";
import { Table, Pagination, Badge, Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const InsuranceRequestTable = ({ searchTerm, pStatus }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  // Define your table data object
  const tableData = [
    {
      propertyId: "10101010",
      location: "Maharagama",
      taskid: "T1254345",
      task: "Clean the House",
      payment: "2000.00",
      finishedDate: "2023/09/10",
      assignedPerson: "Shashika",
      response: "Accepted",
    },
    {
      propertyId: "10101010",
      location: "Gampaha",
      taskid: "T1254345",
      task: "Clean the House",
      payment: "2000.00",
      finishedDate: "2023/09/10",
      assignedPerson: "Shashika",
      response: "Accepted",
    },
    {
      propertyId: "10101010",
      location: "Gampaha",
      taskid: "T1254345",
      task: "Clean the House",
      payment: "2000.00",
      finishedDate: "2023/09/10",
      assignedPerson: "Shashika",
      response: "Rejected",
    },
    {
      propertyId: "10101010",
      location: "Gampaha",
      taskid: "T1254345",
      task: "Clean the House",
      payment: "2000.00",
      finishedDate: "2023/09/10",
      assignedPerson: "Shashika",
      response: "Rejected",
    },
    {
      propertyId: "10101010",
      location: "Gampaha",
      taskid: "T1254345",
      task: "Clean the House",
      payment: "2000.00",
      finishedDate: "2023/09/10",
      assignedPerson: "Shashika",
      response: "Rejected",
    },
    {
      propertyId: "10101010",
      location: "Gampaha",
      taskid: "T1254345",
      task: "Clean the House",
      payment: "2000.00",
      finishedDate: "2023/09/10",
      assignedPerson: "Shashika",
      response: "Accepted",
    },
  ];

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
    <div>
      <div className="flex-grow md:w-4/5 p-4">
        {/* Search Form */}
        <form>{/* ... Search Form Content ... */}</form>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Property Id</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task Id</Table.HeadCell>
            <Table.HeadCell>Task</Table.HeadCell>
            <Table.HeadCell>Payment</Table.HeadCell>
            <Table.HeadCell>Finished Date</Table.HeadCell>
            <Table.HeadCell>Assigned Person</Table.HeadCell>
            <Table.HeadCell>Payment Status</Table.HeadCell>
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
                  <Table.Cell>{rowData.taskid}</Table.Cell>
                  <Table.Cell>{rowData.task}</Table.Cell>
                  <Table.Cell>{rowData.payment}</Table.Cell>
                  <Table.Cell>{rowData.finishedDate}</Table.Cell>
                  <Table.Cell>{rowData.assignedPerson}</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center justify-center">
                      <Badge
                        color={
                          rowData.response === "Accepted"
                            ? "success"
                            : "failure"
                        }
                        size="sm"
                      >
                        {rowData.response === "Accepted" ? (
                          <Button
                            onClick={() => props.setOpenModal("confirm")}
                            className="bg-secondary-gray hover:bg-secondary-gray-light"
                          >
                            Confirm
                          </Button>
                        ) : (
                          <button disabled>Rejected</button>
                        )}
                      </Badge>
                    </div>
                    {/* modal */}
                    <Modal
                      show={props.openModal === "confirm"}
                      size="md"
                      popup
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Insurance Process Completed?Do you want to Closed the Request?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="success"
                              onClick={() => props.setOpenModal(undefined)}
                            >
                              Yes, Close
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
    </div>
  );
};

export default InsuranceRequestTable;
