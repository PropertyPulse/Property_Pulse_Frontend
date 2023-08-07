import './App.css';
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router-dom";
import NotFound from "./pages/Common/NotFound";
import Login from "./pages/Common/Login";
import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";
import SamplePage from "./pages/SamplePage";
import Signup from './pages/PropertyOwner/Signup';
import TaskSupervisorDashboard from "./pages/Task Supervisor/TaskSupervisorDashboard";
import SystemAdminDashboard from "./pages/System Admin/SystemAdminDashboard";
import Calender from "./pages/Task Supervisor/Calender";
import Chart from "./pages/Task Supervisor/Chart";
import AddTopManagers from "./pages/System Admin/AddTopManagers";

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <PropertyPulseLanding></PropertyPulseLanding>
            </Route>
            <Route path="/sample" >
                <SamplePage></SamplePage>
            </Route>

            <Route path="/login" >
                <Login></Login>
            </Route>
            <Route path="/signup">
                <Signup></Signup>
            </Route>

            {/*Task Supervisor */}
            <Route path="/task-supervisor/dashboard">
                <TaskSupervisorDashboard></TaskSupervisorDashboard>
            </Route>
            <Route path="/Calender">
                <Calender></Calender>
            </Route>
            <Route path="/Chart">
                <Chart></Chart>
            </Route>

            {/*System Admin*/}
            <Route path="/system-admin/dashboard">
                <SystemAdminDashboard></SystemAdminDashboard>
            </Route>
            <Route path="/system-admin/add-top-managers">
                <AddTopManagers></AddTopManagers>
            </Route>

            {/*404notfound*/}
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    );
}

export default App;
