import './App.css';
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router-dom";
import NotFound from "./pages/Common/NotFound";
import Login from "./pages/Common/Login";
import PropertyPulseLanding from "./pages/Common/PropertyPulseLanding";
import SamplePage from "./pages/SamplePage";
import FinancialManager from "./pages/FinancialManager/FinancialManager";



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

        </Route>
          <Route path="/fp" >
              <FinancialManager></FinancialManager>
          </Route>
        {/*404notfound*/}
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
  );
}

export default App;
