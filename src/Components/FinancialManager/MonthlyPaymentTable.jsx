import React, { useState } from "react";
import { Table, Pagination, Badge } from "flowbite-react";

const MonthlyPaymentTable = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  // Define your table data object
  const tableData = [
    {
      propertyId: "11101010",
      tasksupervisorname: "Tharindra",
      telephone: "0713222792",
      payment: "8000.00",
      due_date: "2023/09/10",
      assignedPerson: "Tharindra",
      paymentStatus: "Completed",
    },
    {
      propertyId: "10101110",
      tasksupervisorname: "Nimali",
      telephone: "0766899693",
      payment: "6000.00",
      due_date: "2023/07/10",
      assignedPerson: "Nimali",
      paymentStatus: "Pending",
    },
    {
      propertyId: "10101011",
      tasksupervisorname: "Pavan",
      telephone: "0719653452",
      payment: "9000.00",
      due_date: "2023/06/15",
      assignedPerson: "Pavan",
      paymentStatus: "Failed",
    },
    {
      propertyId: "10111110",
      tasksupervisorname: "Hansika",
      telephone: "0715347234",
      payment: "10000.00",
      due_date: "2023/05/16",
      assignedPerson: "Hansika",
      paymentStatus: "Pending",
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
            <Table.HeadCell>Property ID</Table.HeadCell>
            <Table.HeadCell>Task Supervisor name</Table.HeadCell>
            <Table.HeadCell>Contact No</Table.HeadCell>
            <Table.HeadCell>Payment</Table.HeadCell>
            <Table.HeadCell>Due date</Table.HeadCell>
            <Table.HeadCell>Payment Status</Table.HeadCell>
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
                       {rowData.tasksupervisorname}
                    </a>
                  </Table.Cell>
                  <Table.Cell>{rowData.telephone}</Table.Cell>
                  <Table.Cell>{rowData.payment}</Table.Cell>
                  <Table.Cell>{rowData.due_date}</Table.Cell>
                  <Table.Cell>
                    <Badge
                      color={
                        rowData.paymentStatus === "Completed"
                          ? "success"
                          : rowData.paymentStatus === "Pending"
                          ? "warning"
                          : "failure"
                      }
                      size="sm"
                    >
                      <p>{rowData.paymentStatus}</p>
                    </Badge>
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

export default MonthlyPaymentTable;
