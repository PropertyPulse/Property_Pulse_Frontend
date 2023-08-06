import React, {useEffect, useState} from 'react'
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import {Outlet} from "react-router-dom";


const PersistLogin = () => {

    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth, persist} = useAuth();

    console.log("persist auth ", JSON.stringify(auth))


    useEffect(() => {

        const verifyRefreshToken = async () => {
            try{
                await refresh()
            }
            catch (err){
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        }

        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, [auth?.accessToken, refresh]);


    useEffect(() => {

        console.log(
            `isLoading : ${isLoading}`
        )
        console.log(`aT : ${JSON.stringify(auth.accessToken)}`)

    }, [auth.accessToken, isLoading]);

    

    return (
        <>
            {!persist
                ? <Outlet/>
                : isLoading
                    ? <p>Loading..</p> : <Outlet/>
            }
        </>
    )
}
export default PersistLogin
