import useRefreshToken from "../../hooks/useRefreshToken";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {useLocation, useNavigate} from "react-router-dom";
import useLogout from "../../hooks/useLogout";


const PropertyOwner = () => {

    const refresh = useRefreshToken();

    const[responseMsg,setResponse] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const logout = useLogout();

    const axiosPrivate = useAxiosPrivate();



        const getMessage = async () => {
            try {
                const response = await axiosPrivate.get('/api/v1/po', {

                });

                setResponse(response.data)
                console.log(response.data);

            } catch (err) {
                console.error(err);

                console.log({from: location})

                if (err.response?.status === 403){
                    navigate('/login', { state: { from: location }, replace: true });
                }

            }
        }

        useEffect(()=>{

            getMessage();

        });








    // console.log("auth",auth)

    function refreshtoken() {
        refresh();
    }

   const signout = async () => {

       await logout();

   }

    return (
        <div>Dashboard

            <br/>

        <div>message : {responseMsg}</div>

            <button onClick={getMessage} >Generated {responseMsg}</button>
                <br/>


        <button onClick={refreshtoken}>click refresh</button>

            <br/>
                <br/>
            <br/>
            <br/>
            <button onClick={signout}>logout</button>
        </div>
    )
}
export default PropertyOwner
