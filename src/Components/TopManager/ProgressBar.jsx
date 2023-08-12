import React from 'react';
import {useState,useEffect} from 'react';
const ProgressBar = () => {

    const [progress, setProgress] = useState(10);



    return (


        <div className="w-full bg-gray-200 h-4 rounded-md overflow-hidden">
            <div
                className="h-full bg-purple-500"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    )

};


    export default ProgressBar ;
