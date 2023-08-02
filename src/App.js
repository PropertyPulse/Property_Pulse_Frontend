import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";

import NavbarAndSidebarLayout from "./pages/FinancialManager/NavbarAndSidebarLayout";
import Dashboard from "./pages/FinancialManager/Dashboard";
import FinancialManager from "./pages/FinancialManager/FinancialManager";
import Recieved from "./pages/FinancialManager/Recieved";
import Payments from "./pages/FinancialManager/Payments";
import PaymentHistory from "./pages/FinancialManager/PaymentHistory";
import SamplePage from "./pages/SamplePage";
import Login from "./pages/Common/Login";
import NotFound from "./pages/Common/NotFound";







function App() {

    return(
        <>
            <Routes>
                <Route path="/" element={<PropertyPulseLanding/>}/>
                    <Route path="sample" element={<SamplePage/>}/>
                <Route path="signup" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="fm" element={<NavbarAndSidebarLayout/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="received" element={<Recieved/>}/>
                    <Route path="payments" element={<Payments/>}/>
                    <Route path="history" element={<PaymentHistory/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App
