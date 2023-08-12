import React from "react";
import { Table, Badge } from "flowbite-react";
import { Card } from 'flowbite-react';

const RecentTransaction = () => {
  const tableData = [
    {
        description: "P10101010 Monthly payment",
        paymentStatus: "Credit",
        amount: "2000.00",
      },
      {
        description: "P10101010 Monthly payment",
        paymentStatus: "Debit",
        amount: "2000.00",
      },{
        description: "P10101010 Monthly payment",
        paymentStatus: "Debit",
        amount: "2000.00",
      },
    // Add more transaction data entries here...
  ];

  const recentTransactions = tableData.slice(0, 5); // Get the most recent 5 transactions

  return (
    <div className='m-4'>
      <Card className="max-w-sm">

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Recent Transaction
        </p>
      </h5>
        <Table striped>
          <Table.Head>
            <Table.HeadCell></Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Amount</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {recentTransactions.map((transaction, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="px-auto">
                    {tableData.paymentStatus === "Credit" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        className="w-6 h-6"
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

                    <Badge
                      color={
                        tableData.paymentStatus === "Credit"
                          ? "success"
                          : "failure"
                      }
                      size="sm"
                    ></Badge>
                  </Table.Cell>
                <Table.Cell>{transaction.description}</Table.Cell>
                <Table.Cell>{transaction.amount}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
}

export default RecentTransaction;
