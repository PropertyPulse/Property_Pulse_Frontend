import React from 'react'
import {Link} from "react-router-dom";
import  Calender  from "../Task Supervisor/Calender.jsx"
import TopManagerLineChart from "../../Components/TopManager/TopManagerLineChart";
const   ValuationDashboard = () => {
  return (
<div className= "grid mt-8 grid-cols-1 md:grid-cols-2  gap-8 content-center md:mx-12 bg-stale-50">
          

        <div className="bg-choco-gray px-6 py-6 w-64 text-sm  text-white  font-medium rounded-lg box-border">
            <div className="flex flex-row space-x-4 items-center ">

                <div className = "flex flex-col  space-y-3">
                    <p className=" my-1   uppercase leading-4 flex justify-between ">Pending Submissions</p>

                    <p className="text-white text-2xl  ">
                        <span>6</span></p>
                   <Link to="/ve/pending-report-submissions" className= "flex space-x-0"><div className = "flex items-center space-x-3 justify-center" >See here 
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  </div>
  </Link>
  
                </div>

                <div>



                </div>
            </div>
        </div>

        <div className="bg-choco-gray px-6 py-6 w-64 text-sm text-white font-medium rounded-lg box-border">
            <div className="flex flex-row space-x-4 items-center">

                <div className = "flex flex-col  space-y-3">
                    <p className=" my-1   uppercase leading-4 flex justify-between "> Submitted  Reports</p>

                    <p className="text-red-500  text-2xl  ">
                        <span>6</span></p>
                        <Link to="/ve/view-report-submissions" className= "flex space-x-0"><div className = "flex items-center space-x-3 justify-center" >See here 
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
  </div>
  </Link>
  
                </div>

                <div>



                </div>
            </div>
        </div>


        <Calender />

        <TopManagerLineChart />
</div>

  )
}


export default ValuationDashboard