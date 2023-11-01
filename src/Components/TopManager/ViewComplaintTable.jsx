import { Table, Button, Modal } from "flowbite-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { Label, Textarea } from "flowbite-react";

const ViewComplaintTable = ({ searchTerm ,complaints}) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [feedbackContent,setFeedbackContent] = useState('')
  const [tableData, setTableData] = useState([]); // Initialize tableData as an empty array
  const onPageChange = (page) => setCurrentPage(page);


  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search term
  const filteredData = tableData.filter((rowData) => {
    const propertyId = rowData.complainId || "";
    const type = rowData.title|| "";
    const location  = rowData.reason || "";
  
    return (
      propertyId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.toString().toLowerCase().includes(searchTerm.toLowerCase()) || 
      location.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

   useEffect(() => {
    axiosPrivate.get("api/v1/tm/all") // Replace with the correct URL for your Spring Boot endpoint
      .then((response) => {
        // Set the response data as the table data
        setTableData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFeedback  = (complaintId) => {
        
    axiosPrivate
    .post('/api/feedback/save', {
      ComplaintId:complaintId ,
      FeedbackContent: feedbackContent,
    
    })
    .then((response) => {
      if (response.status === 201) {
        console.log('Feedback sent successfully');
        // Handle success, e.g., show a success message to the user
      } else {
        console.error('Failed to send feedback');
        // Handle error, e.g., show an error message to the user
      }
    })
    .catch((error) => {
      console.error('Error sending feedback request:', error);
    })
    .finally(() => {
      props.setOpenModal(undefined);
      setFeedbackContent('');
    });

  }

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
                    {rowData.complaint_id}
                  </Table.Cell>
                  <Table.Cell>
                   
                      {rowData.title}
                  </Table.Cell>
                  <Table.Cell>{rowData.reason}</Table.Cell>
                  <Table.Cell>{rowData.description}</Table.Cell>
                  <Table.Cell>{rowData.telephone}</Table.Cell>
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
                              value = {feedbackContent}
                              onChange={(e) => setFeedbackContent(e.target.value) }
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={() => handleFeedback(rowData.complainId)}
                          className="bg-secondary-gray hover:bg-secondary-gray-light"
                        >
                          Send Feedback
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
