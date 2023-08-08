import React from "react";
import { Table } from "flowbite-react";

const EmployeeTable = () => {
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
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {/* Employee Row 1 */}
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              10101010
            </Table.Cell>
            <Table.Cell>Deepamal Shaminda</Table.Cell>
            <Table.Cell>Galla</Table.Cell>
            <Table.Cell>0715992210</Table.Cell>
            <Table.Cell>Carpenter</Table.Cell>
            <Table.Cell>
              <div className="flex space-x-4">
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View
                </a>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Edit
                </a>
                <a
                  className="font-medium text-red-500 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Delete
                </a>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              10101010
            </Table.Cell>
            <Table.Cell>Deepamal Shaminda</Table.Cell>
            <Table.Cell>Galla</Table.Cell>
            <Table.Cell>0715992210</Table.Cell>
           <Table.Cell>Carpenter</Table.Cell>
            <Table.Cell>
              <div className="flex space-x-4">
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View
                </a>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Edit
                </a>
                <a
                  className="font-medium text-red-500 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Delete
                </a>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              10101010
            </Table.Cell>
            <Table.Cell>Deepamal Shaminda</Table.Cell>
            <Table.Cell>Galla</Table.Cell>
            <Table.Cell>0715992210</Table.Cell>
            <Table.Cell>Carpenter</Table.Cell>
            <Table.Cell>
              <div className="flex space-x-4">
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View
                </a>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Edit
                </a>
                <a
                  className="font-medium text-red-500 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Delete
                </a>
              </div>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              10101010
            </Table.Cell>
            <Table.Cell>Deepamal Shaminda</Table.Cell>
            <Table.Cell>Galla</Table.Cell>
            <Table.Cell>0715992210</Table.Cell>
            <Table.Cell>Carpenter</Table.Cell>
            <Table.Cell>
              <div className="flex space-x-4">
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  View
                </a>
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Edit
                </a>
                <a
                  className="font-medium text-red-500 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  Delete
                </a>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
    </>
  );
};

export default EmployeeTable;
