import React, {useEffect, useState} from "react";
import { Table, Pagination, Badge } from "flowbite-react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const TaskReceivableTable = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [receivedPayments, setReceivedPayments] = useState([]);
  const onPageChange = (page) => setCurrentPage(page);
  const axiosPrivate = useAxiosPrivate();
  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get(
          '/api/v1/payments/all-received-task-payments'
      );
      setReceivedPayments(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();

    console.log("useEffect")
  }, []); // Include dependencies here if needed


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

  const filteredData = receivedPayments.filter((rowData) =>
      Object.values(rowData).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Calculate startIndex and endIndex based on currentPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Determine which data to display based on the search term
  const dataToDisplay = searchTerm ? filteredData : receivedPayments;

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
              <Table.HeadCell>Amount</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Received Date</Table.HeadCell>

            </Table.Head>
            <Table.Body className="divide-y">
              {paginatedData.length === 0 ? (
                  <tr className="h-32">
                    <td colSpan="4" className="text-center py-4">
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
                        <Table.Cell>{rowData.amount}</Table.Cell>
                        <Table.Cell>{rowData.description}</Table.Cell>
                        <Table.Cell>{rowData.receiveddate.join("/")}</Table.Cell>
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
