import React, { useState } from "react";
import { Table, Pagination, Modal } from "flowbite-react";
import ViewEmployee from "./ViewEmployee";
import EditEmployee from "./EditEmployee";

const EmployeeTable = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const onPageChange = (page) => setCurrentPage(page);

  // Example table data
  const tableData = [
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "kaveesha",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "kaveesha",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    {
      employeeId: "10101010",
      name: "Deepamal Shaminda",
      address: "Galla",
      contactNo: "0715992210",
      skills: "Carpenter",
    },
    // Add more data objects as needed
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
 
  const openViewModal = (rowData) => {
    setSelectedRowData(rowData); // Set selected row data
    setViewModalOpen(true); // Open view modal
  };

  const openEditModal = (rowData) => {
    setSelectedRowData(rowData); // Set selected row data
    setEditModalOpen(true); // Open edit modal
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Employee Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Contact No</Table.HeadCell>
            <Table.HeadCell>Skills</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Actions</span>
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
                  {rowData.employeeId}
                </Table.Cell>
                <Table.Cell>{rowData.name}</Table.Cell>
                <Table.Cell>{rowData.address}</Table.Cell>
                <Table.Cell>{rowData.contactNo}</Table.Cell>
                <Table.Cell>{rowData.skills}</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => openViewModal(rowData)}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      View
                    </button>
                    <button
                      onClick={() => openEditModal(rowData)}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </button>
                    <a
                      className="font-medium text-red-500 hover:underline dark:text-red-500"
                      href={`/employee/${rowData.employeeId}/delete`}
                    >
                      Delete
                    </a>
                  </div>
                </Table.Cell>
              </Table.Row>
            )))}
          </Table.Body>
        </Table>
        {/* Model */}
        {/* View Modal */}
        <Modal
          show={viewModalOpen}
          size="md"
          popup
          onClose={() => setViewModalOpen(false)}
        >
          <Modal.Header />
          <Modal.Body>
            {selectedRowData && <ViewEmployee employeeData={selectedRowData} />}
          </Modal.Body>
        </Modal>
        {/* Edit Modal */}
        <Modal
          show={editModalOpen}
          size="md"
          popup
          onClose={() => setEditModalOpen(false)}
        >
          <Modal.Header />
          <Modal.Body>
            {selectedRowData && (
              <div>
                <EditEmployee />
                {/* ... (rest of your modal form) */}
              </div>
            )}
          </Modal.Body>
        </Modal>

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

export default EmployeeTable;