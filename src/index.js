import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhBYVRpR2NbfE5xdF9GZlZTRmY/P1ZhSXxQdkJgWH1ccHJXRGBeV0E=');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>


);


