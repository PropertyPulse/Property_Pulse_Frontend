import { Table, Button, Modal, Select } from "flowbite-react";
import React, { useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { TextInput } from "flowbite-react";

const MpPaybleTable = ({ searchTerm }) => {
  const [openModal, setOpenModal] = useState();
  const [modalPlacement, setModalPlacement] = useState("center");
  const props = { modalPlacement, openModal, setModalPlacement, setOpenModal };
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const tableData = [
    {
      companyId: "10111010",
      month: "September",
      payamount: "Rs. 100000",
      dueDate: "2023/09/30",
    },
    {
      companyId: "10101110",
      month: "July",
      payamount: "Rs. 80000",
      dueDate: "2023/07/31",
    },
    {
      companyId: "11101010",
      month: "August",
      payamount: "Rs. 200000",
     dueDate: "2023/08/31",
},
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
            <Table.HeadCell>Company Id</Table.HeadCell>
            <Table.HeadCell>Month</Table.HeadCell>
            <Table.HeadCell>Payble Amount</Table.HeadCell>
            <Table.HeadCell>Due Date</Table.HeadCell>
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
                    {rowData.companyId}
                  </Table.Cell>
                  <Table.Cell>{rowData.month}</Table.Cell>
                  <Table.Cell>{rowData.payamount + ".00"}</Table.Cell>
                  <Table.Cell>{rowData.dueDate}</Table.Cell>
                  <Table.Cell>
                    <Button
                      className="font-medium bg-secondary-gray hover:bg-secondary-gray-light"
                      onClick={() => props.setOpenModal("placement")}
                    >
                      Pay
                    </Button>
                    <Modal
                      show={props.openModal === "placement"}
                      position={props.modalPlacement}
                      size="md"
                      onClose={() => props.setOpenModal(undefined)}
                    >
                      <Modal.Header>Payment </Modal.Header>
                      <Modal.Body>
                        <div className="">
                          <div className="max-w-md" id="select">
                            <div className="mb-2 block">
                              <Label htmlFor="countries" value="Pay by" />
                            </div>
                            <Select id="countries" required>
                              <option>Cash</option>
                              <option>Chaque</option>
                              <option>Bank Transfer</option>
                            </Select>
                          </div>
                          <div className="mb-2 block mt-4">
                            <Label htmlFor="comment" value="Payment Amount" />
                          </div>
                          <div>
                            <Textarea
                              id="comment"
                              placeholder="Amount"
                              rows={1}
                            />
                          </div>

                           <div>
                          <div className="mb-2 block">
                            <Label
                              htmlFor="reauired_date"
                              value="Remarks"
                            />
                          </div>
                          <TextInput
                            id="date"
                            placeholder="Remarks"
                            required
                            type="text"
                          />
                        </div>
                        </div>

                       
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          onClick={() => props.setOpenModal(undefined)}
                          className="bg-secondary-gray hover:bg-secondary-gray-light mx-auto"
                        >
                          Pay
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
export default MpPaybleTable;
