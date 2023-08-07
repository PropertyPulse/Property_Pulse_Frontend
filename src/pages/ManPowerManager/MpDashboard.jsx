import React from 'react'
import DashboardCard from '../../Components/ManPowerManager/DashboardCard'
import DashboardChart from '../../Components/ManPowerManager/DashboardChart'

const MpDashboard = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-10'>
      <div><DashboardCard topic="Employees" number="10" link="/manpower-company/manage-employee"/></div>
      <div><DashboardCard topic="New Request" number="10" link="/manpower-company/request" /></div>
      <div><DashboardCard topic="Ongoin Operation" number="10" link="/manpower-company/request" /></div>
    </div>

    <div>

      <DashboardChart />


    </div>
    </>
  )
}

export default MpDashboard