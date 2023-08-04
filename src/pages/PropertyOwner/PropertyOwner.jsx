import useRefreshToken from "../../hooks/useRefreshToken";
import { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useLocation, useNavigate} from "react-router-dom";


const PropertyOwner = () => {

    const refresh = useRefreshToken();

    const[responseMsg,setResponse] = useState();

    const navigate = useNavigate();
    const location = useLocation();



    const axiosPrivate = useAxiosPrivate();



        const getMessage = async () => {
            try {
                const response = await axiosPrivate.get('/api/v1/po', {

                });
                console.log(response.data);

            } catch (err) {
                console.error(err);

                console.log({from: location})
                navigate('/login', { state: { from: location }, replace: true });
            }
        }








    // console.log("auth",auth)

    function refreshtoken() {
        refresh();
    }

    return (
        <div>Dashboard

            <br/>

        <div>message : {responseMsg}</div>

            <button onClick={getMessage} >Generate response message</button>
                <br/>


        <button onClick={refreshtoken}>click refresh</button>
        </div>
    )
}
export default PropertyOwner
