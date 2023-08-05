import React, {useEffect, useState} from 'react'

const PropertyPulseLanding = () => {

    const [state, setState] = useState("mine");
    const[valueee,setvalueee] = useState("valuee")


    useEffect(() => {
        console.log("value1")
        setState("yours")
    }, [valueee]);

    useEffect(() => {
        console.log("value2")
        setState("my")
    }, [state]);



    return (
        <div>{state}</div>
    )
}
export default PropertyPulseLanding
