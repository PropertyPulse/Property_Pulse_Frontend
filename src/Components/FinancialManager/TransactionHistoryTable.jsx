import React, { useState } from "react";
import { Table, Pagination, Badge } from "flowbite-react";

const TransactionHistoryTable = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  // Define your table data object
  const tableData = [
    {
      description: "P10101010 Monthly payment",
      paymentStatus: "Credit",
      amount: "2000.00",
      transactionDate: "2023/09/10",
      runningBalance: "2000.00",
    },
    {
      description: "P10101010 Monthly payment",
      amount: "2000.00",
      transactionDate: "2023/09/10",
      runningBalance: "2000.00",
      paymentStatus: "Debit",
    },
    {
      description: "P10101010 Monthly payment",
      paymentStatus: "Credit",
      amount: "2000.00",
      transactionDate: "2023/09/10",
      runningBalance: "2000.00",
    },
    {
      description: "P10101010 Monthly payment",
      paymentStatus: "Credit",
      amount: "2000.00",
      transactionDate: "2023/09/10",
      runningBalance: "2000.00",
    },
    {
      description: "P10101010 Monthly payment",
      amount: "2000.00",
      transactionDate: "2023/09/10",
      runningBalance: "2000.00",
      paymentStatus: "Debit",
    },
    {
      description: "P10101010 Monthly payment",
      paymentStatus: "Credit",
      amount: "2000.00",
      transactionDate: "2023/09/10",
      runningBalance: "2000.00",
    },
  ];

  const itemsPerPage = 10; // Number of items per page

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
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Transaction Date</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
            <Table.HeadCell>Running Balance</Table.HeadCell>
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
                  <Table.Cell>
                    <div className="flex items-center justify-center">
                      {rowData.paymentStatus === "Credit" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="green"
                          className="w-6 h-6 px-auto"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="red"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                          />
                        </svg>
                      )}
                    </div>

                    <Badge
                      color={
                        rowData.paymentStatus === "Credit"
                          ? "success"
                          : "failure"
                      }
                      size="sm"
                    ></Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {rowData.transactionDate}
                  </Table.Cell>
                  <Table.Cell>{rowData.description}</Table.Cell>

                  <Table.Cell>{rowData.amount}</Table.Cell>
                  <Table.Cell>{rowData.runningBalance}</Table.Cell>
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

export default TransactionHistoryTable;
