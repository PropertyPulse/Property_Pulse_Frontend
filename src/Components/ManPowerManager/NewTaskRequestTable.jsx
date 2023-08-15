import { Table, Button, Modal, Select } from "flowbite-react";
import React, {useEffect, useState} from "react";
import { Label, Textarea } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { TextInput } from "flowbite-react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate"


const NewTaskRequestTable = ({searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [availableEmployees, setAvailableEmployees] = useState([]);


  const [feedback, setFeedback] = useState("");
  const [startDate, setStartDate] = useState("");
  const [requiredDate, setRequiredDate] = useState("");
  const [requiredTime, setRequiredTime] = useState("");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");



  const onPageChange = (page) => setCurrentPage(page);

  const axiosPrivate = useAxiosPrivate()

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const handleAccept = async (id) => {
    try {
      // Make the API call to update
      const response = await axiosPrivate.post('/api/v1/mpc/assignemployee', JSON.stringify({
        feedback : feedback,
        startDate : startDate,
        requiredDate : requiredDate,
        empid:selectedEmployeeId,
        requestid:id

      }));

      // Handle success (e.g., show a success me ssage, update UI)
      console.log("Update successful:", response.data);
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error updating data:", error);
    }
    console.log(id)

    // Close the modal
    props.setOpenModal(undefined);
  };

  const handleDecline = async () => {
    // try {
    //   // Make the API call to decline
    //   const response = await axiosPrivate.put(`/api/decline-endpoint/${selectedEmployeeId}`, {
    //     feedback,
    //   });
    //
    //   // Handle success (e.g., show a success message, update UI)
    //   console.log("Decline successful:", response.data);
    // } catch (error) {
    //   // Handle error (e.g., show an error message)
    //   console.error("Error declining:", error);
    // }
    //
    // // Close the modal
    props.setOpenModal(undefined);
  };
  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get("/api/v1/task-requests/getAllnewtaskrequests", {
      }, {});
      console.log(response.data)

      setTableData(response.data)


      console.log(tableData)



    } catch (e) {

    }


  }



  useEffect(  () => {
    // console.log('hh')
    fetchAvailableEmployees()
    fetchData()


  }, []);

  const fetchAvailableEmployees = async () => {
    try {
      const response = await axiosPrivate.get("/api/v1/mpc/getallavailableemployees"); // Change the URL as needed
      setAvailableEmployees(response.data);
    } catch (error) {
      console.error("Error fetching available employees:", error);
    }
  };


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
            <Table.HeadCell>Property Id</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Task</Table.HeadCell>
            <Table.HeadCell>Estimated Price</Table.HeadCell>
            <Table.HeadCell>Schedule Date</Table.HeadCell>
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
                <Table.Cell>{rowData.task}</Table.Cell>
                <Table.Cell>{rowData.estimatedPrice}</Table.Cell>

                  <Table.Cell>{formatDate(rowData.scheduleDate)}</Table.Cell>

                  <Table.Cell>
                    {rowData.moreInfo}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                    onClick={() => props.setOpenModal("placement")}
                  >
                    Accept
                  </Button>
                  <Modal
                    show={props.openModal === "placement"}
                    position={props.modalPlacement}
                    size="md"
                    onClose={() => props.setOpenModal(undefined)}
                  >
                    <Modal.Header>Feedback </Modal.Header>
                    <Modal.Body>
                      <div className="">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          You can accept or decline with some feedback.Our team
                          will contact you soon...
                        </p>
                        <div className="mb-2 block mt-4">
                          <Label htmlFor="comment" value="Your Feedback" />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Your feedback"
                            rows={1}
                            value={feedback}
                            onChange={event => setFeedback(event.target.value)}
                        />
                      </div>
                      <div>
                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="start_date" value="Start Date" />
                          </div>
                          <TextInput
                              id="start_date"
                              placeholder="When you can start"
                              required
                              type="date"
                              value={startDate}
                              onChange={event => setStartDate(event.target.value)}
                          />
                        </div>
                        <div>
                          <div className="mb-2 block">
                            <Label htmlFor="required_date" value="Required Date" />
                          </div>
                          <TextInput
                              id="required_date"
                              placeholder="How many days"
                              required
                              type="text"
                              value={requiredDate}
                              onChange={event => setRequiredDate(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="max-w-md" id="select">
                        <div className="mb-2 block">
                          <Label htmlFor="countries" value="Assign Employees" />
                        </div>
                        <Select id="countries" required onChange={event => setSelectedEmployeeId(event.target.value)}>
                          <option value="">Select an employee</option>
                          {availableEmployees.map(employee => (
                              <option key={employee.id} value={employee.id}>{employee.name}</option>
                          ))}
                        </Select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                          onClick={() => handleAccept(rowData.id)}
                          className="bg-secondary-gray hover:bg-secondary-gray-light"
                      >
                        Accept
                      </Button>
                      <Button
                          color="gray"
                          onClick={() => handleDecline(rowData.id)}
                      >
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Table.Cell>
              </Table.Row>
            )))}
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

export default NewTaskRequestTable;
