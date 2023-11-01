import React, { useState,useEffect } from "react";
import { Table, Pagination } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import StepperComponent from "./Stepper";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


const PendingReportSubmissionTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const {auth} = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState();


  const onPageChange = (page) => setCurrentPage(page);

  const [tableData, setTableData] = useState([]); // Initialize tableData as an empty array
  useEffect(() => {

    axiosPrivate
      .get("api/v1/tm/viewPendingReports?status=pending")
      .then((response) => {
        setTableData(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [tableData]);
  const itemsPerPage = 5; // Number of items per page

  // Filter data based on search term
  const filteredData = tableData.filter((rowData) =>
    Object.values(rowData).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleModalOpen = (row) => {
     setSelectedRow(row);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setCurrentStep(0); // Reset the stepper to the first step when closing the modal
  };

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
        {/* search form ... */}
        <form>{/* ... search form contents ... */}</form>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Property ID</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Requested Date</Table.HeadCell>
            <Table.HeadCell>Contact Person</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {paginatedData.length === 0 ? (
              <tr className="h-32">
                <td colSpan="8" className="text-center py-4">
                  No data found.
                </td>
              </tr>
            ) : (
              paginatedData.map((item, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.propertyId}
                  </Table.Cell>
                  <Table.Cell>{item.type}</Table.Cell>
                  <Table.Cell>{item.location}</Table.Cell>
                  <Table.Cell>{item.requestedData}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.contact}</Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => handleModalOpen(item)}
                    >
                      Create report
                    </Button>
                    {/* Modal for report creation */}
                    <Modal
                      show={props.openModal === "Upload"}
                      placement={modalPlacement}
                      size="3xl"
                      onClose={() => props.setOpenModal(undefined)}
                      style={{ height: "auto", minHeight: "90vh" }}
                    >
                      <div
                        className="p-4"
                        style={{ height: "100%", overflowY: "auto" }}
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h2>Create Valuation Report</h2>
                          <button
                            onClick={() => props.setOpenModal(undefined)}
                            className="text-white p-2 rounded"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414 4.95 4.95z" />
                            </svg>
                          </button>
                          </div>
                        {/* </div>
                        {currentStep === 0 && (
                          <StepperComponent
                            step={currentStep}
                            onNextStep={() => setCurrentStep(currentStep + 1)}
                            onPrevStep={() => setCurrentStep(currentStep - 1)}
                            onFinish={handleModalClose}
                          />
                        )}
                        {currentStep > 0 && (
                          <StepperComponent
                            step={currentStep}
                            onNextStep={() => setCurrentStep(currentStep + 1)}
                            onPrevStep={() => setCurrentStep(currentStep - 1)}
                            onFinish={handleModalClose}
                          />
                        )} */}

                      </div>
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
      {openModal && (
        <StepperComponent
          selectedRow={selectedRow}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default PendingReportSubmissionTable;
