import React, { useState } from "react";
import { Table, Pagination, Badge } from "flowbite-react";

const TaskReceivableTable = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  // Define your table data object
  const tableData = [
    {
      propertyId: "10101110",
      tasksupervisorname: "Tharindra", 
      taskId:"T163748",
      task:"Repair a Pipeline",
      telephone: "0711242531",
      payment: "3000.00",
      due_date: "2023/08/15",
      paymentStatus: "Received",
    },
    {
      propertyId: "11101010",
      tasksupervisorname: "Lahiru",
      taskId:"T162755",
      task:"Repair Tiles",
      telephone: "0711256539",
      payment: "5000.00",
      due_date: "2023/07/10",
      paymentStatus: "Pending",
    },
    {
      propertyId: "10111011",
      tasksupervisorname: "Luthira",
      taskId:"T166734",
      task:"Window Repair",
      telephone: "0713222792",
      payment: "2000.00",
      due_date: "2023/06/15",
      paymentStatus: "Failed",
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
            <Table.HeadCell>Task Id</Table.HeadCell>
            <Table.HeadCell>Task</Table.HeadCell>
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
                  <Table.Cell>{rowData.taskId}</Table.Cell>
                  <Table.Cell>{rowData.task}</Table.Cell>
                  <Table.Cell>{rowData.telephone}</Table.Cell>
                  <Table.Cell>{rowData.payment}</Table.Cell>
                  <Table.Cell>{rowData.due_date}</Table.Cell>
                  <Table.Cell>
                    <Badge
                      color={
                        rowData.paymentStatus === "Received"
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

export default TaskReceivableTable;
