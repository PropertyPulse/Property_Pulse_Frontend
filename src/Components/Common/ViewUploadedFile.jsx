import React, { useState } from 'react';
import { Md10K, MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const ViewUploadedFile = (props) => {
    const [ setImage] = useState(null);
    const [ setFileName] = useState("No selected file");

    return (
        <div>
            <div onClick={() => document.querySelector(".input-field").click()}>
                <div className='w-full h-[200px] flex justify-center items-center cursor-pointer rounded-lg border-2 border-dashed border-gray-200 focus:border-[#2e8a99]/50 hover:border-[#2e8a99]/50 p-5'>
                    <input 
                        name='profile-pic'
                        id='profile-pic'
                        type='file' 
                        accept='/image/*' 
                        className='input-field' 
                        hidden 
                        onChange={({ target: {files}}) => {
                            files[0] && setFileName(files[0].name)
                            if(files) {
                                setImage(URL.createObjectURL(files[0]))
                            }
                        }}
                    />

                </div> 
            </div>                       
        </div>
    )
}

export default ViewUploadedFile
