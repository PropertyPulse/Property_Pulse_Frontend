import './App.css';
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/unregisteredUser/Login";
import PropertyPulseLanding from "./pages/PropertyPulseLanding";



function App() {
  return (
      <Switch>
        <Route exact path="/">
            <PropertyPulseLanding></PropertyPulseLanding>
        </Route>
        <Route path="/login" >
            <Login></Login>
        </Route>
        <Route path="/signup">

        </Route>
        {/*404notfound*/}
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
  );
}

export default App;
