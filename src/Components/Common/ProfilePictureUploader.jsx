import React, { useState } from 'react';
import { Md10K, MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const ProfilePictureUploader = (props) => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");
    const {errorMessage} = props;

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

                    {image ? 
                        <img src={image} className='h-full' alt={fileName} />
                        :
                        <div>
                            <MdCloudUpload className='w-16 h-16 fill-[#2e8a99]/30 mx-auto' />
                            <div className='text-[#2e8a99]/40'>Browse Files to Upload</div>
                        </div>
                    }
                </div> 
                
                <section>                
                    <div className='w-full uploaded-row flex justify-between items-center gap-2 p-2 mt-1 bg-[#2e8a99]/20 rounded-md'>
                        <span className='w-full flex justify-center items-center gap-5 text-xs'>
                            <AiFillFileImage className='fill-[#2e8a99]' />
                            {fileName}                        
                        </span>
                        <MdDelete 
                            onClick={() => {
                                setFileName("No selected file")
                                setImage(null)
                            }} 
                            className='cursor-pointer'
                        />
                    </div>
                </section>
                <span className='error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden'>{errorMessage}</span>
            </div>                       
        </div>
    )
}

export default ProfilePictureUploader
