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
import TasksListPO from './pages/PropertyOwner/TasksListPO';
import Chat from "./pages/Task Supervisor/Chat";
// import TopManager from "./pages/TopManager/TopManager";
import Complaints from "./pages/TopManager/Complaints";
import ValuationExpert from "./pages/ValuationExpert/ValuationExpert"
import LegalDocuments from "./pages/Task Supervisor/LegalDocuments";
import MonthlyReports from "./pages/Task Supervisor/MonthlyReports";
import VisitedProperties from "./pages/Task Supervisor/VisitedProperties";
import PropertyOwnerdb from './pages/PropertyOwner/PropertyOwnerdb';
import PoDashboard from './pages/PropertyOwner/PoDashboard';
import Poproperties from './pages/PropertyOwner/Poproperties';
import Potask from './pages/PropertyOwner/Potask';
import PoPayment from './pages/PropertyOwner/PoPayment';
import PoReport from './pages/PropertyOwner/PoReport';
import OngoingTasksPO from './pages/PropertyOwner/OngoingTasksPO';
import ViewOngoingTask from './pages/PropertyOwner/ViewOngoingTask';
// import PaymentsPO from './pages/PropertyOwner/PaymentsPO';
import Unauthorized from "./pages/Common/Unauthorized";
import IsDashboard from './pages/InsuranceManager/IsDashboard';
import QuatationRequest from './pages/InsuranceManager/QuatationRequest';
import OngoingQuation from './pages/InsuranceManager/OngoingQuation';
import InsuranceRequest from './pages/InsuranceManager/InsuranceRequest';
import PayblePayment from './pages/FinancialManager/PayblePayment';
import ReceivablePayment from './pages/FinancialManager/ReceivablePayment';
import TransactionHistory from './pages/FinancialManager/TransactionHistory';
import TopManager from './pages/TopManager/TopManager';
import TmDashboard from './pages/TopManager/TmDashboard';
import NewProperty from './pages/TopManager/NewProperty';
import ReceivedValuation from './pages/TopManager/ReceivedValuation';
// import Complaints from './pages/TopManager/Complaints';
import ManageTs from './pages/TopManager/ManageTs';
import PendingValuationReport from './pages/ValuationExpert/PendingValuationReport';
import SubmittedValutationReport from './pages/ValuationExpert/SubmittedValutationReport';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/*Public router */}
                <Route path="/" element={<PropertyPulseLanding />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="/unauthorized" element={<Unauthorized />} />



                {/* Valuation Expert  Routes */}

                {/* Task Supervisor Routes */}



                {/*    Protected Routes*/}

                <Route element={<PersistLogin />}>
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
                    <Route element={<RequireAuth allowedRoles='ADMIN' />}>
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

                    </Route>
                    <Route element={<RequireAuth allowedRoles='TASKSUPERVISOR' />}>
                        <Route path="task-supervisor" element={<TaskSupervisor />}>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="assigned-properties" element={<AssignedProperties />} />
                            <Route path="properties-to-be-managed/visited-properties" element={<VisitedProperties />} />
                            {/*<Route path="sample-modal" element={<Modal />} />*/}
                            <Route path="assigned-properties" element={<AssignedProperties />} />
                            <Route path="properties-to-be-managed/not-visited-properties" element={<PropertiesToBeManaged />} />
                            <Route path="upcoming-tasks" element={<UpcomingTasks />} />
                            <Route path="ongoing-tasks" element={<OngoingTasks />} />
                            <Route path="completed-tasks" element={<CompletedTasks />} />
                            <Route path="task-approvals" element={<TaskApprovals />} />
                            <Route path="assigned-properties/view-property" element={<ViewProperty />} />
                            <Route path="assigned-properties/view-property/chat" element={<Chat />} />
                            <Route path="assigned-properties/view-property/legal-documents" element={<LegalDocuments />} />
                            <Route path="assigned-properties/view-property/monthly-reports" element={<MonthlyReports />} />

                        </Route>

                    </Route>
                    <Route element={<RequireAuth allowedRoles='TOPMANAGER' />}>
                        <Route path="tm" element={<TopManager />} >
                            <Route path="dashboard" element={<TmDashboard />} />
                            <Route path="new-property" element={<NewProperty />} />
                            <Route path="valuation-reports" element={<ReceivedValuation />} />
                            <Route path="manage-task-supervisor" element={<ManageTs />} />
                            <Route path="complain" element={<Complaints />} />
                        </Route>
                    </Route>
                    <Route element={<RequireAuth allowedRoles='PROPERTYOWNER' />}>
                        <Route path="po" element={<PropertyOwnerdb />}>
                            <Route path="dashboard" element={<PoDashboard />} />
                            <Route path="dashboard/view-monthly-report/:id" element={<ViewMonthlyReport />} />
                            <Route path="dashboard/ongoing-tasks" element={<OngoingTasksPO />} />
                            <Route path='dashboard/ongoing-tasks/view-ongoing-task/:propertyId/:taskId' element={<ViewOngoingTask />} />
                            <Route path="properties" element={<Poproperties />} />
                            <Route path="task" element={<Potask />} />
                            <Route path="payment" element={<PoPayment />} />
                            <Route path="reports" element={<PoReport />} />
                            <Route path="documents" element={<PropertyDocuments />} />
                            <Route path="land-registration" element={<LandRegistration />} />
                            <Route path="house-registration" element={<HouseRegistration />} />
                        </Route>
                    </Route>
                    <Route element={<RequireAuth allowedRoles='FINANCIALMANAGER' />}>
                        <Route path="fm" element={<FinancialManager />} >
                            <Route path="dashboard" element={<FmDashboard />} />
                            <Route path="receivable-payment" element={<ReceivablePayment />} />
                            <Route path="payble-payment" element={<PayblePayment />} />
                            <Route path="transaction-history" element={<TransactionHistory />} />
                            {/*<Route path="financial-manager" element={<FinancialManager />} >*/}
                            {/*    <Route path="dashboard" element={<FmDashboard />} />*/}
                            {/*    <Route path="received" element={<FmRecieved />} />*/}
                        </Route>

                    </Route>
                    <Route element={<RequireAuth allowedRoles='INSURANCEMANAGER' />}>
                        <Route path="ins" element={<IsDashboard />} >
                            <Route path="quatation-request" element={<QuatationRequest />} />
                            <Route path="ongoin-quatation" element={<OngoingQuation />} />
                            <Route path="insurance-request" element={<InsuranceRequest />} />
                        </Route>
                    </Route>

                    <Route element={<RequireAuth allowedRoles='VE' />}>
                        <Route path="ve" element={<ValuationExpert />} >
                            <Route path="pending-valuation-reports" element={<PendingValuationReport />} />
                            <Route path="submited-valuation-reports" element={<SubmittedValutationReport />} />
                        </Route>

                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>

        </Routes>
    );
}

export default App;

// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import NotFound from "./pages/Common/NotFound";
// import Login from "./pages/Common/Login";
// import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";
// import Signup from './pages/PropertyOwner/Signup';
// import Layout from "./Components/Common/Layout";
// // import FinancialManager from "./pages/FinancialManager/FinancialManagers";
// import RequireAuth from "./security/RequireAuth";
// import PropertyOwner from "./pages/PropertyOwner/PropertyOwner";
// import PersistLogin from "./config/PersistLogin";
// import TaskSupervisor from "./pages/Task Supervisor/TaskSupervisor";
// import ManPowerDashboard from "./pages/ManPowerManager/ManPowerDashboard";
// import MpDashboard from "./pages/ManPowerManager/MpDashboard";
// import ManageEmployee from "./pages/ManPowerManager/ManageEmployee";
// import Request from "./pages/ManPowerManager/Request";
// import TaskHistory from "./pages/ManPowerManager/TaskHistory";
// import Dashboard from './pages/Task Supervisor/Dashboard';
// import PropertiesToBeManaged from './pages/Task Supervisor/PropertiesToBeManaged';
// import SystemAdminDashboard from './pages/System Admin/SystemAdminDashboard'
// import FinancialManager from "./pages/FinancialManager/FinancialManager";
// import FmDashboard from "./pages/FinancialManager/FmDashboard";
// import FmRecieved from "./pages/FinancialManager/FmRecieved";
// import ContactUs from './pages/Common/ContactUs';
// import AddEmployee from './pages/ManPowerManager/AddEmployee';
// import NewTaskRequest from './pages/ManPowerManager/NewTaskRequest';
// import PropertyOwnerDashboard from './pages/PropertyOwner/PropertyOwnerDashboard';
// import ProfileSetupAfterRegister from './pages/PropertyOwner/ProfileSetupAfterRegister';
// import MonthlyReportsPO from './pages/PropertyOwner/MonthlyReportsPO';
// import ViewMonthlyReport from './pages/PropertyOwner/ViewMonthlyReport';
// import AddTopManagers from "./pages/System Admin/AddTopManagers";
// import ViewProperty from "./pages/Task Supervisor/ViewProperty";
// import SystemAdmin from "./pages/System Admin/SystemAdmin";
// import TasksPO from './pages/PropertyOwner/TasksPO';
// import UpcomingTasks from "./pages/Task Supervisor/UpcomingTasks";
// import PropertiesPO from './pages/PropertyOwner/PropertiesPO';
// import PropertyViewMore from './pages/PropertyOwner/PropertyViewMore';
// import LandRegistration from './pages/PropertyOwner/LandRegistration';
// import HouseRegistration from './pages/PropertyOwner/HouseRegistration';
// import PropertyDocuments from './pages/PropertyOwner/PropertyDocuments';
// import OngoingTasks from "./pages/Task Supervisor/OngoingTasks";
// import CompletedTasks from "./pages/Task Supervisor/CompletedTasks";
// import CompletedTasksPO from './pages/PropertyOwner/CompletedTasksPO';
// import TaskApprovals from "./pages/Task Supervisor/TaskApprovals";
// import AssignedProperties from "./pages/Task Supervisor/AssignedProperties"
// import AddFinanceManagers from "./pages/System Admin/AddFinanceManagers";
// import AddValuationExperts from "./pages/System Admin/AddValuationExperts";
// import AddTaskSupervisors from "./pages/System Admin/AddTaskSupervisors";
// import AddManpowerCompanies from "./pages/System Admin/AddManpowerCompanies";
// import AddInsuranceAgent from "./pages/System Admin/AddInsuranceAgents";
// import UserProfiles from "./pages/System Admin/UserProfiles";
// import ViewProfile from "./pages/System Admin/ViewProfile";
// import AllPaymentsPO from './pages/PropertyOwner/AllPaymentsPO';
// import PropertyPayments from './pages/PropertyOwner/PropertyPayments';
// import TasksListPO from './pages/PropertyOwner/TasksListPO';
// import Chat from "./pages/Task Supervisor/Chat";
// // import TopManager from "./pages/TopManager/TopManager";
// import Complaints from "./pages/TopManager/Complaints";
// import ValuationExpert from "./pages/ValuationExpert/ValuationExpert"
// import LegalDocuments from "./pages/Task Supervisor/LegalDocuments";
// import MonthlyReports from "./pages/Task Supervisor/MonthlyReports";
// import VisitedProperties from "./pages/Task Supervisor/VisitedProperties";
// import PropertyOwnerdb from './pages/PropertyOwner/PropertyOwnerdb';
// import PoDashboard from './pages/PropertyOwner/PoDashboard';
// import Poproperties from './pages/PropertyOwner/Poproperties';
// import Potask from './pages/PropertyOwner/Potask';
// import PoPayment from './pages/PropertyOwner/PoPayment';
// import PoReport from './pages/PropertyOwner/PoReport';
// import OngoingTasksPO from './pages/PropertyOwner/OngoingTasksPO';
// import ViewOngoingTask from './pages/PropertyOwner/ViewOngoingTask';
// // import PaymentsPO from './pages/PropertyOwner/PaymentsPO';
// import Unauthorized from "./pages/Common/Unauthorized";
// import IsDashboard from './pages/InsuranceManager/IsDashboard';
// import QuatationRequest from './pages/InsuranceManager/QuatationRequest';
// import OngoingQuation from './pages/InsuranceManager/OngoingQuation';
// import InsuranceRequest from './pages/InsuranceManager/InsuranceRequest';
// import PayblePayment from './pages/FinancialManager/PayblePayment';
// import ReceivablePayment from './pages/FinancialManager/ReceivablePayment';
// import TransactionHistory from './pages/FinancialManager/TransactionHistory';
// import TopManager from './pages/TopManager/TopManager';
// import TmDashboard from './pages/TopManager/TmDashboard';
// import NewProperty from './pages/TopManager/NewProperty';
// import ReceivedValuation from './pages/TopManager/ReceivedValuation';
// // import Complaints from './pages/TopManager/Complaints';
// import ManageTs from './pages/TopManager/ManageTs';
// import PendingValuationReport from './pages/ValuationExpert/PendingValuationReport';
// import SubmittedValutationReport from './pages/ValuationExpert/SubmittedValutationReport';
//
// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 {/*Public router */}
//                 <Route path="/" element={<PropertyPulseLanding />} />
//                 <Route path="/contact-us" element={<ContactUs />} />
//                 <Route path="login" element={<Login />} />
//                 <Route path="signup" element={<Signup />} />
//                 <Route path="/unauthorized" element={<Unauthorized />} />
//
//
//
//                 {/* Valuation Expert  Routes */}
//
//                 {/* Task Supervisor Routes */}
//
//
//
//                 {/*    Protected Routes*/}
//
//                 <Route element={<PersistLogin />}>
//                     <Route element={<RequireAuth allowedRoles='MPC' />}>
//                         <Route path="manpower-company" element={<ManPowerDashboard />}>
//                             <Route path="dashboard" element={<MpDashboard />} />
//                             <Route path="manage-employee" element={<ManageEmployee />} />
//                             <Route path="request" element={<Request />} />
//                             <Route path="task-history" element={<TaskHistory />} />
//                             <Route path="add-employee" element={<AddEmployee />} />
//                             <Route path="new-task-request" element={<NewTaskRequest />} />
//                         </Route>
//                     </Route>
//                     <Route element={<RequireAuth allowedRoles='ADMIN' />}>
//                         <Route path="system-admin" element={<SystemAdmin />} >
//                             <Route path="dashboard" element={<SystemAdminDashboard />} />
//                             <Route path="add-users/top-manager" element={<AddTopManagers />} />
//                             <Route path="add-users/finance-manager" element={<AddFinanceManagers />} />
//                             <Route path="add-users/valuation-expert" element={<AddValuationExperts />} />
//                             <Route path="add-users/task-supervisor" element={<AddTaskSupervisors />} />
//                             <Route path="add-users/manpower-company" element={<AddManpowerCompanies />} />
//                             <Route path="add-users/insurance-agent" element={<AddInsuranceAgent />} />
//                             <Route path="user-profiles" element={<UserProfiles />} />
//                             <Route path="user-profiles/view-profile" element={<ViewProfile />} />
//                         </Route>
//
//                     </Route>
//                     <Route element={<RequireAuth allowedRoles='TASKSUPERVISOR' />}>
//                         <Route path="task-supervisor" element={<TaskSupervisor />}>
//                             <Route path="dashboard" element={<Dashboard />} />
//                             <Route path="assigned-properties" element={<AssignedProperties />} />
//                             <Route path="properties-to-be-managed/visited-properties" element={<VisitedProperties />} />
//                             {/*<Route path="sample-modal" element={<Modal />} />*/}
//                             <Route path="assigned-properties" element={<AssignedProperties />} />
//                             <Route path="properties-to-be-managed/not-visited-properties" element={<PropertiesToBeManaged />} />
//                             <Route path="upcoming-tasks" element={<UpcomingTasks />} />
//                             <Route path="ongoing-tasks" element={<OngoingTasks />} />
//                             <Route path="completed-tasks" element={<CompletedTasks />} />
//                             <Route path="task-approvals" element={<TaskApprovals />} />
//                             <Route path="assigned-properties/view-property" element={<ViewProperty />} />
//                             <Route path="assigned-properties/view-property/chat" element={<Chat />} />
//                             <Route path="assigned-properties/view-property/legal-documents" element={<LegalDocuments />} />
//                             <Route path="assigned-properties/view-property/monthly-reports" element={<MonthlyReports />} />
//
//                         </Route>
//
//                     </Route>
//                     <Route element={<RequireAuth allowedRoles='TOPMANAGER' />}>
//                         <Route path="tm" element={<TopManager />} >
//                             <Route path="dashboard" element={<TmDashboard />} />
//                             <Route path="new-property" element={<NewProperty />} />
//                             <Route path="valuation-reports" element={<ReceivedValuation />} />
//                             <Route path="manage-task-supervisor" element={<ManageTs />} />
//                             <Route path="complain" element={<Complaints />} />
//                         </Route>
//                     </Route>
//                     <Route element={<RequireAuth allowedRoles='PROPERTYOWNER' />}>
//                         <Route path="po" element={<PropertyOwnerdb />}>
//                             <Route path="dashboard" element={<PoDashboard />} />
//                             <Route path="dashboard/view-monthly-report/:id" element={<ViewMonthlyReport />} />
//                             <Route path="dashboard/ongoing-tasks" element={<OngoingTasksPO />} />
//                             <Route path='dashboard/ongoing-tasks/view-ongoing-task/:propertyId/:taskId' element={<ViewOngoingTask />} />
//                             <Route path="properties" element={<Poproperties />} />
//                             <Route path="task" element={<Potask />} />
//                             <Route path="payment" element={<PoPayment />} />
//                             <Route path="reports" element={<PoReport />} />
//                             <Route path="documents" element={<PropertyDocuments />} />
//                             <Route path="land-registration" element={<LandRegistration />} />
//                             <Route path="house-registration" element={<HouseRegistration />} />
//                         </Route>
//                     </Route>
//                     <Route element={<RequireAuth allowedRoles='FINANCIALMANAGER' />}>
//                         <Route path="fm" element={<FinancialManager />} >
//                             <Route path="dashboard" element={<FmDashboard />} />
//                             <Route path="receivable-payment" element={<ReceivablePayment />} />
//                             <Route path="payble-payment" element={<PayblePayment />} />
//                             <Route path="transaction-history" element={<TransactionHistory />} />
//                             {/*<Route path="financial-manager" element={<FinancialManager />} >*/}
//                             {/*    <Route path="dashboard" element={<FmDashboard />} />*/}
//                             {/*    <Route path="received" element={<FmRecieved />} />*/}
//                         </Route>
//
//                     </Route>
//                     <Route element={<RequireAuth allowedRoles='INSURANCEMANAGER' />}>
//                         <Route path="ins" element={<IsDashboard />} >
//                             <Route path="quatation-request" element={<QuatationRequest />} />
//                             <Route path="ongoin-quatation" element={<OngoingQuation />} />
//                             <Route path="insurance-request" element={<InsuranceRequest />} />
//                         </Route>
//                     </Route>
//
//                     <Route element={<RequireAuth allowedRoles='VE' />}>
//                         <Route path="ve" element={<ValuationExpert />} >
//                             <Route path="pending-valuation-reports" element={<PendingValuationReport />} />
//                             <Route path="submited-valuation-reports" element={<SubmittedValutationReport />} />
//                         </Route>
//
//                     </Route>
//                 </Route>
//
//                 <Route path="*" element={<NotFound />} />
//             </Route>
//
//         </Routes>
//     );
// }
//
// export default App;