import React from "react";
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DashboardCard = (props) => {
  return (
    <div>
      <Card className="m-4 md:w-52" href={props.link}>
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={props.icon} className="text-3xl" />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          <p>{props.topic}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
          {props.number}
        </p>
      </Card>
    </div>
  );
};

export default DashboardCard;
