import './App.css';
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router-dom";
import NotFound from "./pages/Common/NotFound";
import Login from "./pages/Common/Login";
import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";
import SamplePage from "./pages/SamplePage";
import Signup from './pages/PropertyOwner/Signup';
import TaskSupervisorDashboard from "./pages/Task Supervisor/TaskSupervisorDashboard";




function App() {
  return (
      <Switch>
        <Route exact path="/">
            <PropertyPulseLanding></PropertyPulseLanding>
        </Route>
          <Route path="/sample" >
              <SamplePage></SamplePage>
          </Route>
          {/*<Route>*/}
          {/*  <TaskSupervisorDashboard></TaskSupervisorDashboard>*/}
          {/*</Route>*/}
        <Route path="/login" >
            <Login></Login>
        </Route>
        <Route path="/signup">
            <Signup></Signup>
        </Route>
        {/*404notfound*/}
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
  );
}

export default App;
