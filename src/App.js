import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from "./pages/Common/NotFound";
import Login from "./pages/Common/Login";
import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";
import Signup from './pages/PropertyOwner/Signup';
import Layout from "./Components/Common/Layout";
// import FinancialManager from "./pages/FinancialManager/FinancialManagers";
import RequireAuth from "./security/RequireAuth";
import PropertyOwner from "./pages/PropertyOwner/PropertyOwner";
import PersistLogin from "./config/PersistLogin";
import TaskSupervisor from "./pages/Task Supervisor/TaskSupervisor";
import ManPowerDashboard from "./pages/ManPowerManager/ManPowerDashboard";
import MpDashboard from "./pages/ManPowerManager/MpDashboard";
import ManageEmployee from "./pages/ManPowerManager/ManageEmployee";
import Request from "./pages/ManPowerManager/Request";
import TaskHistory from "./pages/ManPowerManager/TaskHistory";
import Dashboard from './pages/Task Supervisor/Dashboard';
import PropertiesToBeManaged from './pages/Task Supervisor/PropertiesToBeManaged';
import SystemAdminDashboard from './pages/System Admin/SystemAdminDashboard'
import FinancialManager from "./pages/FinancialManager/FinancialManager";
import FmDashboard from "./pages/FinancialManager/FmDashboard";
import FmRecieved from "./pages/FinancialManager/FmRecieved";
import ContactUs from './pages/Common/ContactUs';
import AddEmployee from './pages/ManPowerManager/AddEmployee';
import NewTaskRequest from './pages/ManPowerManager/NewTaskRequest';
import PropertyOwnerDashboard from './pages/PropertyOwner/PropertyOwnerDashboard';
import ProfileSetupAfterRegister from './pages/PropertyOwner/ProfileSetupAfterRegister';
import MonthlyReportsPO from './pages/PropertyOwner/MonthlyReportsPO';
import ViewMonthlyReport from './pages/PropertyOwner/ViewMonthlyReport';
import AddTopManagers from "./pages/System Admin/AddTopManagers";
import ViewProperty from "./pages/Task Supervisor/ViewProperty";
import SystemAdmin from "./pages/System Admin/SystemAdmin";
import TasksPO from './pages/PropertyOwner/TasksPO';
import UpcomingTasks from "./pages/Task Supervisor/UpcomingTasks";
import PropertiesPO from './pages/PropertyOwner/PropertiesPO';
import PropertyViewMore from './pages/PropertyOwner/PropertyViewMore';
import LandRegistration from './pages/PropertyOwner/LandRegistration';
import HouseRegistration from './pages/PropertyOwner/HouseRegistration';
import PropertyDocuments from './pages/PropertyOwner/PropertyDocuments';

// import Properties from "./pages/TaskSupervisor/Properties";
import OngoingTasks from "./pages/Task Supervisor/OngoingTasks";
import CompletedTasks from "./pages/Task Supervisor/CompletedTasks";
import CompletedTasksPO from './pages/PropertyOwner/CompletedTasksPO';
import TaskApprovals from "./pages/Task Supervisor/TaskApprovals";
import AssignedProperties from "./pages/Task Supervisor/AssignedProperties"
import AddFinanceManagers from "./pages/System Admin/AddFinanceManagers";
import AddValuationExperts from "./pages/System Admin/AddValuationExperts";
import AddTaskSupervisors from "./pages/System Admin/AddTaskSupervisors";
import AddManpowerCompanies from "./pages/System Admin/AddManpowerCompanies";
import AddInsuranceAgent from "./pages/System Admin/AddInsuranceAgents";
import UserProfiles from "./pages/System Admin/UserProfiles";
import ViewProfile from "./pages/System Admin/ViewProfile";
import AllPaymentsPO from './pages/PropertyOwner/AllPaymentsPO';
import PropertyPayments from './pages/PropertyOwner/PropertyPayments';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/*Public router */}
                <Route path="/" element={<PropertyPulseLanding />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                <Route path="system-admin" element={<SystemAdmin />} >
                    <Route path="dashboard" element={<SystemAdminDashboard />} />
                    <Route path="add-users/top-manager" element={<AddTopManagers />} />
                    <Route path="add-users/finance-manager" element={<AddFinanceManagers />} />
                    <Route path="add-users/valuation-expert" element={<AddValuationExperts />} />
                    <Route path="add-users/task-supervisor" element={<AddTaskSupervisors />} />
                    <Route path="add-users/manpower-company" element={<AddManpowerCompanies />} />
                    <Route path="add-users/insurance-agent" element={<AddInsuranceAgent />} />
                    <Route path="user-profiles" element={<UserProfiles />} />
                    <Route path="user-profiles/view-profile" element={<ViewProfile />} />
                </Route>

                <Route path="fm" element={<FinancialManager />} >
                    <Route path="dashboard" element={<FmDashboard/>} />
                    <Route path="received" element={<FmRecieved/>} />
                </Route>

                <Route path="task-supervisor" element={<TaskSupervisor />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="assigned-properties" element={<AssignedProperties />} />
                    {/*<Route path="sample-modal" element={<Modal />} />*/}
                    <Route path="assigned-properties" element={<AssignedProperties />} />
                    <Route path="properties-to-be-managed" element={<PropertiesToBeManaged />} />
                    <Route path="upcoming-tasks" element={<UpcomingTasks />} />
                    <Route path="ongoing-tasks" element={<OngoingTasks />} />
                    <Route path="completed-tasks" element={<CompletedTasks />} />
                    <Route path="task-approvals" element={<TaskApprovals />} />
                    <Route path="properties/view-property" element={<ViewProperty />} />
                </Route>


            {/* PROPERTY OWNER ROUTES */}
            <Route path="property-owner/profile-setup" element={<ProfileSetupAfterRegister />}></Route>
            <Route path="property-owner" element={<PropertyOwnerDashboard />} />
            <Route path="property-owner/monthly-reports" element={<MonthlyReportsPO />} />
            <Route path="property-owner/monthly-reports/view-monthly-report" element={<ViewMonthlyReport />} />
            <Route path="property-owner/tasks/:id" element={<TasksPO />} />
            <Route path="property-owner/properties" element={<PropertiesPO />} />
            <Route path="property-owner/properties/property-details/:id" element={<PropertyViewMore />} />
            <Route path="property-owner/land-registration" element={<LandRegistration />} />
            <Route path="property-owner/house-registration" element={<HouseRegistration />} />
            <Route path="property-owner/properties/property-details/:id/documents" element={<PropertyDocuments />} />
            <Route path="property-owner/payments" element={<AllPaymentsPO />} />
            <Route path="property-owner/properties/property-details/:id/payments" element={<PropertyPayments />} />
            {/* <Route path='property-owner/tasks/:id/completed-tasks' element={<CompletedTasksPO />} /> */}

                {/*    Protected Routes*/}

                <Route element={<PersistLogin/>}>
                    <Route element={<RequireAuth allowedRoles='MPC' />}>
                        <Route path="manpower-company" element={<ManPowerDashboard />}>
                            <Route path="dashboard" element={<MpDashboard />} />
                            <Route path="manage-employee" element={<ManageEmployee />} />
                            <Route path="request" element={<Request />} />
                            <Route path="task-history" element={<TaskHistory />} />
                            <Route path="add-employee" element={<AddEmployee />} />
                            <Route path="new-task-request" element={<NewTaskRequest />} />
                        </Route>
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