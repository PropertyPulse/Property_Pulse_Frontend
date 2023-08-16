import { Table, Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { Pagination } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Label, Textarea } from "flowbite-react";

const ViewComplaintTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const tableData = [
    {
      complainId: "10101010",
      title:'Cannot sign in',
      reason: "I cannot sign in.",
      details: "when i trying to signin popup a error msg",
      phoneNo:'0712452366',
    },
    {
      
      complainId: "10101010",
      title:'Cannot sign in',
      reason: "I cannot sign in.",
      details: "when i trying to signin popup a error msg",
      phoneNo:'0712452366',
    },
    {
      
      complainId: "10101010",
      title:'Cannot sign in',
      reason: "I cannot sign in.",
      details: "when i trying to signin popup a error msg",
      phoneNo:'0712452366',
    },
    {
     
      complainId: "10101010",
      title:'Cannot sign in',
      reason: "I cannot sign in.",
      details: "when i trying to signin popup a error msg",
      phoneNo:'0712452366',
    },
    {
      
      complainId: "10101010",
      title:'Cannot sign in',
      reason: "I cannot sign in.",
      details: "when i trying to signin popup a error msg",
      phoneNo:'0712452366',
    },
    {
      
      complainId: "10101010",
      title:'Cannot sign in',
      reason: "I cannot sign in.",
      details: "when i trying to signin popup a error msg",
      phoneNo:'0712452366',
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
            <Table.HeadCell>Compalin Id</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>
            <Table.HeadCell>Reason</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
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
                    {rowData.complainId}
                  </Table.Cell>
                  <Table.Cell>
                   
                      {rowData.title}
                  </Table.Cell>
                  <Table.Cell>{rowData.reason}</Table.Cell>
                  <Table.Cell>{rowData.details}</Table.Cell>
                  <Table.Cell>{rowData.phoneNo}</Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-4">
                      <Button
                        className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                        onClick={() => props.setOpenModal("accept")}
                      >
                        Take Action
                      </Button>
                      <Button
                        className="font-medium bg-error-red hover:bg-error-red-hover"
                        onClick={() => props.setOpenModal("reject")}
                      >
                        Feedback
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
                            Do you want to take a action?
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="success"
                              onClick={() => props.setOpenModal(undefined)}
                            >
                              Yes
                            </Button>
                            <Button
                              color="gray"
                              onClick={() => props.setOpenModal(undefined)}
                            >
                              No
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                    {/* reject modal */}
                    <Modal
                      show={props.openModal === "reject"}
                      position={props.modalPlacement}
                      size="md"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>
                        Add a feedback and close the complain
                      </Modal.Header>
                      <Modal.Body>
                        <div className="">
                          <div className="max-w-md" id="textarea">
                            <div className="mb-2 block">
                              <Label htmlFor="comment" value="Feedback" />
                            </div>
                            <Textarea
                              id="comment"
                              placeholder="Write your feedback..."
                              required
                              rows={4}
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={() => props.setOpenModal(undefined)}
                          className="bg-secondary-gray hover:bg-secondary-gray-light"
                        >
                          Close Complain
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

export default ViewComplaintTable;
