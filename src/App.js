import './App.css';
import { Routes, Route } from 'react-router-dom';

import NotFound from "./pages/Common/NotFound";
import Login from "./pages/Common/Login";
import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";
import SamplePage from "./pages/SamplePage";
import Signup from './pages/PropertyOwner/Signup';
import TaskSupervisorDashboard from "./pages/Task Supervisor/TaskSupervisorDashboard";
import Layout from "./Components/Common/Layout";
import FinancialManager from "./pages/FinancialManager/FinancialManager";
import RequireAuth from "./security/RequireAuth";
import PropertyOwner from "./pages/PropertyOwner/PropertyOwner";






function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
            {/*Public router */}
            <Route path="/" element={<PropertyPulseLanding />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            {/*    Protected Routes*/}

            <Route element={<RequireAuth allowedRoles={['FM']} />}>
                <Route path="fm" element={<FinancialManager />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={['TS']} />}>
                <Route path="ts" element={<TaskSupervisorDashboard />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={['PROPERTYOWNER']} />}>
                <Route path="po" element={<PropertyOwner/>} />
            </Route>



            <Route path="*" element={<NotFound/>}/>
        </Route>

      </Routes>
  );
}

export default App;
