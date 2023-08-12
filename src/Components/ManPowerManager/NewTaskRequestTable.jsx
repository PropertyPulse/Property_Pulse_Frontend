import { Table, Button, Modal, Select } from "flowbite-react";
import React, { useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { TextInput } from "flowbite-react";

const NewTaskRequestTable = ({searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  

  const tableData = [
    {
      propertyId: "10101010",
      location: "Gampaha",
      task: "Clean the house",
      price:"10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
    },
    {
      propertyId: "10101010",
      location: "Kaduwela",
      task: "Repair water pipe",
      price:"10000",
      scheduleDate: "2023/09/10",
      details: "0711234647",
    },
    {
      propertyId: "10101010",
      location: "Waliweriya",
      task: "Clean the house",
      price:"10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
    },
    {
      propertyId: "10101010",
      location: "Colombo",
      task: "Clean the house",
      price:"10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
    },
    {
      propertyId: "10101010",
      location: "Gampaha",
      task: "Clean the house",
      price:"10000",
      scheduleDate: "2023/09/10",
      details: "0711234647",
    },
    {
      propertyId: "10101010",
      location: "Colombo",
      task: "Clean the land",
      price:"10000",
      scheduleDate: "2023/09/10",
      details: "0711234567",
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
                <Table.Cell>{rowData.price + ".00"}</Table.Cell>
                <Table.Cell>{rowData.scheduleDate}</Table.Cell>
                
                <Table.Cell>
                    {rowData.details}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                    onClick={() => props.setOpenModal("placement")}
                  >
                    Action
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
                          placeholder="your feedback"
                          rows={1}
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
                          />
                        </div>
                        <div>
                          <div className="mb-2 block">
                            <Label
                              htmlFor="reauired_date"
                              value="Required Time"
                            />
                          </div>
                          <TextInput
                            id="date"
                            placeholder="How many days"
                            required
                            type="text"
                          />
                        </div>

                        <div className="max-w-md" id="select">
                          <div className="mb-2 block">
                            <Label
                              htmlFor="countries"
                              value="Assign Employees"
                            />
                          </div>
                          <Select id="countries" required>
                            <option>Shashika</option>
                            <option>kavisha</option>
                            <option>Deepamal</option>
                          </Select>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() => props.setOpenModal(undefined)}
                        className="bg-secondary-gray hover:bg-secondary-gray-light"
                      >
                        Accept
                      </Button>
                      <Button
                        color="gray"
                        onClick={() => props.setOpenModal(undefined)}
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
