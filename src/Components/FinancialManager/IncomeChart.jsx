import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "flowbite-react";

const data = [
    {
      date: '2000-01',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      date: '2000-02',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      date: '2000-03',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      date: '2000-04',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      date: '2000-05',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      date: '2000-06',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      date: '2000-07',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      date: '2000-08',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      date: '2000-09',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      date: '2000-10',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      date: '2000-11',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      date: '2000-12',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  

const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthTickFormatter = (tick) => {
  const date = new Date(tick);
  return monthNamesShort[date.getMonth()];
};

const IncomeChart = () => {
  return (

    <>
     <Card className="m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            <p>Income Overview</p>
          </h5>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={monthTickFormatter} label={{ value: "Months", position: "insideBottom", offset: -5 }} />
        <YAxis label={{ value: "Rs", angle: -90, position: "insideLeft", offset: -10 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" name="Income" fill="#8884d8" />
        <Bar dataKey="uv" name="Expenses" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </Card>
    </>
  );
};

export default IncomeChart;
