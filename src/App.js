import './App.css';
import { Routes, Route } from 'react-router-dom';

import NotFound from "./pages/Common/NotFound";
import Login from "./pages/Common/Login";
import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";

import Signup from './pages/PropertyOwner/Signup';
// import TaskSupervisorLayout from "./pages/TaskSupervisor/TaskSupervisorLayout";
import Layout from "./Components/Common/Layout";
// import FinancialManager from "./pages/FinancialManager/FinancialManager";
import RequireAuth from "./security/RequireAuth";
import PropertyOwner from "./pages/PropertyOwner/PropertyOwner";
import PersistLogin from "./config/PersistLogin";
import TaskSupervisorDashboard from "./pages/Task Supervisor/TaskSupervisorDashboard";
import Dashboard from './pages/Task Supervisor/Dashboard';
import Properties from './pages/Task Supervisor/Properties';
import SystemAdminDashboard from './pages/System Admin/SystemAdminDashboard'
import React from "react";
// import Properties from "./pages/TaskSupervisor/Properties";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
            {/*Public router */}
            <Route path="/" element={<PropertyPulseLanding />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="admin" element={<SystemAdminDashboard />} />
            <Route path="task-supervisor" element={<TaskSupervisorDashboard />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="properties" element={<Properties />} />
            </Route>
            {/* <Route path="ts" element={<TaskSupervisorLayout />}> */}
                {/*<Route path="db" element={<Dashboard />} />*/}
                {/*<Route path="properties" element={<Properties />} />*/}
            {/* </Route> */}

            {/*    Protected Routes*/}

            <Route element={<PersistLogin/>}>
                <Route element={<RequireAuth allowedRoles={['TASKSUPERVISOR']} />}>

                </Route>
                <Route element={<RequireAuth allowedRoles={['PROPERTYOWNER']} />}>
                    <Route path="po" element={<PropertyOwner/>} />
                </Route>
            </Route>



            <Route path="*" element={<NotFound/>}/>
        </Route>

      </Routes>
  );
}

export default App;
