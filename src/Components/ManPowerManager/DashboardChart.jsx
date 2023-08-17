import React from "react";
import { Card } from "flowbite-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    August: 4000,
    July: 2400,
    June: 2400,
  },
  {
    name: "Week 2",
    August: 3000,
    July: 1398,
    June: 2210,
  },
  {
    name: "Week 3",
    August: 2000,
    July: 9800,
    June: 2290,
  },
  {
    name: "Week 4",
    August: 2780,
    July: 3908,
    June: 2000,
  },
];

const data1 = [
    {
      name: "Mon",
      Sales: 4000,
    },
    {
      name: "Tue",
      Sales: 3000,
    },
    {
      name: "Wed",
      Sales: 2000,
    },
    {
      name: "Thu",
      Sales: 2780,
    },
    {
        name: "Fri",
        Sales: 2780,
      },
      {
        name: "Sat",
        Sales: 2780,
      },
      {
        name: "Sun",
        Sales: 2780,
      },
     
  ];

const DashboardChart = () => {
  return (
    <div className=" flex justify center space-x-2 flex-col lg:flex-row w-full">
      <div className="lg:w-1/3 md:w-auto">
        <Card className="m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            <p>This Week</p>
          </h5>
          {/* Chart Section */}
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Sales"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <div className="lg:w-2/3 md:w-auto">
        <Card className="m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            <p>Last 3 Months Revenue Comparison</p>
          </h5>
          {/* Chart Section */}
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="August"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="July" stroke="#82ca9d" />
                <Line type="monotone" dataKey="June" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardChart;