import React from 'react'
import DashboardCard from '../../Components/ManPowerManager/DashboardCard'
import DashboardChart from '../../Components/ManPowerManager/DashboardChart'
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons"

const MpDashboard = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-10'>
      <div><DashboardCard topic="Employees" number="10" link="/manpower-company/manage-employee" icon={faUsers}/></div>
      <div><DashboardCard topic="New Request" number="10" link="/manpower-company/new-task-request" icon={faClock} /></div>
      <div><DashboardCard topic="Ongoing Operations" number="10" link="/manpower-company/request" icon={faCog}/></div>
    </div>

    <div>

      <DashboardChart />


    </div>
    </>
  )
}

export default MpDashboard