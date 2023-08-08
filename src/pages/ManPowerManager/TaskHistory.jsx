import React from 'react'
import TaskHistoryTable from '../../Components/ManPowerManager/TaskHistoryTable'
import { Card } from "flowbite-react";

const TaskHistory = () => {
  return (
    <>
    <div>
<Card className="flex-grow md:w-1/2 xl:w-full m-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           Requests History
          </h5>
          <div>
          <TaskHistoryTable />
          </div>
        </Card>
      </div>
    </>
  )
}

export default TaskHistory