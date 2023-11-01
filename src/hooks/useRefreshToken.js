import axios from '../api/axios';
import useAuth from './useAuth';
import jwtDecode from "jwt-decode";

const useRefreshToken = () => {

    const { setAuth } = useAuth();

    return async () => {
        console.log("Refresh Token Used");
        const response = await axios.get('/api/v1/auth/refresh-token', {
            withCredentials: true
        });
        console.log("new access token reply received - ",response?.data)

        const accessToken = response?.data?.access_token;

        console.log("new access token"+accessToken);
        const firstname = response?.data?.firstname;
        const lastname = response?.data?.lastname;
        const username = firstname + " " + lastname;
        const user = jwtDecode(accessToken).sub;
        const roles = jwtDecode(accessToken).role
        setAuth({user,username, roles, accessToken});

    };
};

export default useRefreshToken;
// import axios from '../api/axios';
// import useAuth from './useAuth';
// import Cookies from "js-cookie";
// import jwtDecode from "jwt-decode";
//
// const useRefreshToken = () => {
//     const {auth, setAuth } = useAuth();
//
//     const refreshToken =  Cookies.get('refreshToken');
//
//
//
//     const refresh = async () => {
//             const response = await axios.post('http://localhost:8080/api/v1/auth/refresh-token', null,{
//             headers: {
//                 'Authorization': `Bearer ${refreshToken}`,
//
//             },
//             withCredentials: true
//
//         });
//             console.log("refreshrespons",JSON.stringify(response));
//             let role = jwtDecode(response.data.access_token).role;
//             let user = jwtDecode(response.data.access_token).sub;
//             setAuth({
//                 user:user,
//                 roles: role,
//                 accessToken: response.data.access_token })
//
//             return response.data.access_token;
//     }
//
//     return refresh;
// };
//
// export default useRefreshToken;