import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {auth, setAuth } = useAuth();

    const refreshToken = auth.refreshToken;

    console.log('refres : ',refreshToken)


    const refresh = async () => {


        try{
            const response = await axios.post('http://localhost:8080/api/v1/auth/refresh-token', null,{
            headers: {
                'Authorization': `Bearer ${refreshToken}`,

            },
            withCredentials: true

        });

            setAuth(prev => {
                // console.log(JSON.stringify(prev));
                console.log("new token",response.data.access_token);
                setAuth( { ...prev, accessToken: response.data.access_token })
                console.log("newauth",JSON.stringify(prev));
                return auth
            });
            return response.data.accessToken;}
        catch(e){
            console.log('refres : ',refreshToken)
            console.log("err:",JSON.stringify(e))

        }


    }
    return refresh;
};

export default useRefreshToken;