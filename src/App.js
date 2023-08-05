import './App.css';
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router-dom";
import NotFound from "./pages/Common/NotFound";
import Login from "./pages/Common/Login";
import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";
import SamplePage from "./pages/SamplePage";
import Signup from './pages/PropertyOwner/Signup';
import TaskSupervisorDashboard from "./pages/Task Supervisor/TaskSupervisorDashboard";
import Calender from "./pages/Task Supervisor/Calender"
import Chart from "./pages/Task Supervisor/Chart"
import Duplicate from "./pages/Task Supervisor/Duplicate";
import SystemAdminDashboard from "./pages/System Admin/SystemAdminDashboard";

function App() {
  return (
      <Switch>
        <Route exact path="/">
            <PropertyPulseLanding></PropertyPulseLanding>
        </Route>
          <Route path="/sample" >
              <SamplePage></SamplePage>
          </Route>
          <Route path="/task-supervisor/dashboard">
              <TaskSupervisorDashboard></TaskSupervisorDashboard>
          </Route>
          <Route path="/duplicate">
              <Duplicate></Duplicate>
          </Route>
          <Route path="/Calender">
              <Calender></Calender>
          </Route>
          <Route path="/Chart">
              <Chart></Chart>
          </Route>
        <Route path="/login" >
            <Login></Login>
        </Route>
        <Route path="/signup">
            <Signup></Signup>
        </Route>
        <Route path="/system-admin/dashboard">
            <SystemAdminDashboard></SystemAdminDashboard>
        </Route>
        {/*404notfound*/}
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
  );
}

export default App;
