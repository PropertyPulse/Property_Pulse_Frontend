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
import ManPowerDashboard from "./pages/ManPowerManager/ManPowerDashboard";
import MpDashboard from "./pages/ManPowerManager/MpDashboard";
import ManageEmployee from "./pages/ManPowerManager/ManageEmployee";
import Request from "./pages/ManPowerManager/Request";
import TaskHistory from "./pages/ManPowerManager/TaskHistory";
import Dashboard from './pages/Task Supervisor/Dashboard';
import Properties from './pages/Task Supervisor/Properties';
import SystemAdminDashboard from './pages/System Admin/SystemAdminDashboard'
import FinancialManager from "./pages/FinancialManager/FinancialManager";
import FmDashboard from "./pages/FinancialManager/FmDashboard";
import FmRecieved from "./pages/FinancialManager/FmRecieved";
import ContactUs from './pages/Common/ContactUs';
import AddEmployee from './pages/ManPowerManager/AddEmployee';
import NewTaskRequest from './pages/ManPowerManager/NewTaskRequest';
import PropertyOwnerDashboard from './pages/PropertyOwner/PropertyOwnerDashboard';
import ProfileSetupAfterRegister from './pages/PropertyOwner/ProfileSetupAfterRegister';
import DashboardPO from './pages/PropertyOwner/DashboardPO';
import MonthlyReportsPO from './pages/PropertyOwner/MonthlyReportsPO';
import ViewMonthlyReport from './pages/PropertyOwner/ViewMonthlyReport';
import AddTopManagers from "./pages/System Admin/AddTopManagers";
import ViewProperty from "./pages/Task Supervisor/ViewProperty";

// import Properties from "./pages/TaskSupervisor/Properties";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
            {/*Public router */}
            <Route path="/" element={<PropertyPulseLanding />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="system-admin" element={<SystemAdminDashboard />} />
            <Route path="system-admin/add-users/top-manager" element={<AddTopManagers />} />
            <Route path="fm" element={<FinancialManager />} >
                <Route path="dashboard" element={<FmDashboard/>} />
                <Route path="received" element={<FmRecieved/>} />
            </Route>
            <Route path="task-supervisor" element={<TaskSupervisorDashboard />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="properties" element={<Properties />} />
                <Route path="properties/view-property" element={<ViewProperty />} />

            </Route>
            {/* <Route path="ts" element={<TaskSupervisorLayout />}> */}
                {/*<Route path="db" element={<Dashboard />} />*/}
                {/*<Route path="properties" element={<Properties />} />*/}
            {/* </Route> */}
            <Route path="manpower-company" element={<ManPowerDashboard />}>
                <Route path="dashboard" element={<MpDashboard />} />
                <Route path="manage-employee" element={<ManageEmployee />} />
                <Route path="request" element={<Request />} />
                <Route path="task-history" element={<TaskHistory />} />
                <Route path="add-employee" element={<AddEmployee />} />
                <Route path="new-task-request" element={<NewTaskRequest />} />
            </Route>

            <Route path="property-owner/profile-setup" element={<ProfileSetupAfterRegister />}></Route>
            <Route path="property-owner" element={<PropertyOwnerDashboard />} />
            <Route path="property-owner/monthly-reports" element={<MonthlyReportsPO />} />
            <Route path="property-owner/monthly-reports/view-monthly-report" element={<ViewMonthlyReport />} />

            {/*    Protected Routes*/}

            <Route element={<PersistLogin/>}>
                <Route element={<RequireAuth allowedRoles='TASKSUPERVISOR' />}>

                </Route>
                <Route element={<RequireAuth allowedRoles='FINANCIALMANAGER' />}>
                    <Route path="financial-manager" element={<FinancialManager />} >
                        <Route path="dashboard" element={<FmDashboard/>} />
                        <Route path="received" element={<FmRecieved/>} />
                    </Route>
                </Route>
                <Route element={<RequireAuth allowedRoles='PROPERTYOWNER' />}>
                    <Route path="po" element={<PropertyOwner/>} />
                </Route>
            </Route>



            <Route path="*" element={<NotFound/>}/>
        </Route>

      </Routes>
  );
}

export default App;
