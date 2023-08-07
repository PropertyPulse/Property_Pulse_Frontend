import React from "react";
import { Card } from "flowbite-react";

const DashboardCard = (props) => {
  return (
    <div>
      <Card className="w-52 m-4 md:w-72" href={props.link}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          <p>{props.topic}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
          <p>
            {props.number}
          </p>
        </p>
      </Card>
    </div>
  );
};

export default DashboardCard;
