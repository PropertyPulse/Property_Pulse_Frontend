import React from 'react'

import Sidebar from "./common/Sidebar";
import Appbar from "./common/Appbar";
import {Outlet} from "react-router-dom";
const FinancialManager = () => {




    return (
        <div>
          <div className="flex">
              {/*side bar*/}
                <Sidebar/>
                {/*main area*/}
              <div className="flex flex-col sm:mx-auto md:w-5/6 h-screen overflow-auto relative">
                 {/* Appbar*/}
                  <Appbar/>

              {/*    content*/}

                  <div className=" min-h-max overflow-auto bg-content-bg py-3 px-4">

                        <Outlet/>

                  </div>
              </div>
          </div>
        </div>
    )
}
export default FinancialManager
