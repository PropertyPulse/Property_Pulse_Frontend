import React, { useState } from "react";
import { Table, Pagination } from "flowbite-react";
import { Button,Modal} from "flowbite-react";
import ProfilePictureUploader from "../Common/ProfilePictureUploader";

const PendingReportSubmissionTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const tableData = [
    {
      propertyId: "10101010",
      type: "Home",
      location: "Maharagama",
      Requesteddata: "2023/09/10",
      contactPerson: "shashika",
      contact: "0715702788",
    },
    {
      propertyId: "10101010",
      type: "Home",
      location: "Maharagama",
      Requesteddata: "2023/09/10",
      contactPerson: "shashika",
      contact: "0715702788",
    },
    {
      propertyId: "10101010",
      type: "Home",
      location: "Maharagama",
      Requesteddata: "2023/09/10",
      contactPerson: "shashika",
      contact: "0715702788",
    },
    {
      propertyId: "10101010",
      type: "Home",
      location: "Maharagama",
      Requesteddata: "2023/09/10",
      contactPerson: "shashika",
      contact: "0715702788",
    },
    // ... add more data objects here ...
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
                  <Table.Cell>{item.Requesteddata}</Table.Cell>
                  <Table.Cell>{item.contactPerson}</Table.Cell>
                  <Table.Cell>{item.contact}</Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        setOpenModal("Upload"); // Set the propertyId in the state
                      }}
                    >
                      Upload report
                    </Button>
                  </Table.Cell>
                  <Modal
                    show={props.openModal === "Upload"}
                    size="md"
                    popup
                    onClose={() => props.setOpenModal(undefined)}
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          Upload the Valuation Report
                        </h3>
                        <div>
                            <ProfilePictureUploader />

                        </div>

                        <Button>Upload</Button>
                      </div>
                    </Modal.Body>
                  </Modal>
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

export default PendingReportSubmissionTable;
