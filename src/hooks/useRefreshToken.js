import axios from '../api/axios';
import useAuth from './useAuth';
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const useRefreshToken = () => {
    const {auth, setAuth } = useAuth();
    console.log("auutttt",JSON.stringify(auth));
    const refreshToken =  Cookies.get('name');
    console.log('refresh : ', refreshToken)


    const refresh = async () => {


        try{
            const response = await axios.post('http://localhost:8080/api/v1/auth/refresh-token', null,{
            headers: {
                'Authorization': `Bearer ${refreshToken}`,

            },
            withCredentials: true

        });
            console.log("refreshrespons",JSON.stringify(response));
            let role = jwtDecode(response.data.access_token).role;
            let user = jwtDecode(response.data.access_token).sub;
            setAuth(prev => {
                console.log(JSON.stringify(jwtDecode(response.data.access_token)));


                console.log("roles",role);
                console.log("new token",response.data.access_token);
                console.log("old",JSON.stringify(prev));
                setAuth( { ...prev,
                    user:user,
                    roles: role,
                    accessToken: response.data.access_token })

                return auth
            });
            setAuth({
                user:user,
                roles: role,
                accessToken: response.data.access_token })
            console.log("newauth",JSON.stringify(auth));
            return response.data.access_token;}
        catch(e){
            console.log('refres : ',refreshToken)
            console.log("err:",JSON.stringify(e))

        }


    }
    return refresh;
};

export default useRefreshToken;