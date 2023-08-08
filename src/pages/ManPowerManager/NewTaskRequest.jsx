import React from "react";
import NewTaskRequestTable from "../../Components/ManPowerManager/NewTaskRequestTable";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const NewTaskRequest = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Card className="flex-grow md:w-1/2 xl:w-full m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            New Requests
          </h5>
          <div>
            <NewTaskRequestTable />
          </div>
        </Card>
      </div>
    </>
  );
};

export default NewTaskRequest;
