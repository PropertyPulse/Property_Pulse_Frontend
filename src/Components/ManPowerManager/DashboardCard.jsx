import React from "react";
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const DashboardCard = (props) => {
  const { link, topic, number, icon } = props;

  return (
      <Link to={link}>
        <div>
          <Card className="w-52 m-4 md:w-72 h-40" >
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={icon} className="mr-2 text-4xl text-black" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                {topic}
              </h5>
            </div>
            <p className="font-normal text-gray-700 text-center text-xl">
              {number}
            </p>
          </Card>
        </div>
      </Link>
  );
};

export default DashboardCard;

