import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios('/api/v1/auth/logout', {
                withCredentials: true
            });
            if(response.status === 200) console.log('logout success');
        } catch (err) {
            console.error(err);
        }
    }
    // setAuth({});
    return logout;
}

export default useLogout










// import useAuth from "./useAuth";
// import axios from "../api/axios";
// import Cookies from "js-cookie";
// const useLogout = () => {
//
//     const {auth,setAuth} = useAuth();
//
//     let accessToken = auth.accessToken;
//     console.log("logout",accessToken)
//     const logout = async () => {
//         setAuth({})
//         Cookies.remove('name')
//
//         try {
//             const response = await axios.post('/api/v1/auth/logout',null,
//                 {
//
//
//                     headers: {'Authorization': `Bearer ${accessToken}`}
//                 }
//
//                 );
//             console.log("LOGUT",JSON.stringify(response));
//
//
//
//
//         }
//         catch (e){
//
//             console.log("logout err: ",e)
//
//         }
//
//
//
//
//     }
//     return logout;
//
// }
// export default useLogout
