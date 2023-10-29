import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    let contenttype ;

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                    console.log("hhhee")
                    console.log(config.headers['Content-Type'])
                    contenttype = config.headers['Content-Type']
                    console.log(config.headers['Authorization'])

                }
                console.log("config first timee----"+JSON.stringify(config.headers))
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {




                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    console.log("going to refresh")
                    const newAccessToken = await refresh();
                    console.log("new aaccess token - ",auth?.accessToken)
                    prevRequest.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                    prevRequest.headers['Content-Type'] = contenttype;
                    console.log("contenttpeeeee -- "+ contenttype);


                    console.log("hhhee ---preve")
                    console.log(prevRequest.headers['Content-Type'])
                    console.log(prevRequest.headers['Authorization'])
                    console.log("prevall")
                    console.log(prevRequest)
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;