import React, {useContext} from 'react'
import AuthContext from "../../context/AuthProvider";

const PropertyOwner = () => {

    const{auth ,setAuth} = useContext(AuthContext)


    console.log("auth",auth)
    return (
        <div>Dashboard</div>
    )
}
export default PropertyOwner
