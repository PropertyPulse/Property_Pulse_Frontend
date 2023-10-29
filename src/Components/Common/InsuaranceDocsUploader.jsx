import React, { useState,useEffect } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage, AiOutlineFile } from 'react-icons/ai';

const InsuranceDocsUploader = ({OnFilesUpload}) => {
    const [files, setFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        const fileList = Array.from(selectedFiles);
        setFiles(fileList);
    };

    const removeFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };



    useEffect(() => {
        OnFilesUpload(files);
    }, [files, OnFilesUpload]);

    return (
        <div>
            <label className="cursor-pointer">
                <div className="w-full h-[200px] flex justify-center items-center cursor-pointer rounded-lg border-2 border-dashed border-gray-200 focus:border-[#2e8a99]/50 hover:border-[#2e8a99]/50 p-5">
                    <input
                        type="file"
                        accept="image/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        onChange={handleFileChange}
                        multiple
                    />
                    {files.length > 0 ? (
                        files.map((file, index) => (
                            <div key={index} className="flex justify-between items-center gap-2 p-2 mt-1 bg-[#2e8a99]/20 rounded-md">
                                <span className="flex justify-center items-center gap-5">
                                    {file.type.startsWith('image/') ? (
                                        <>
                                            <AiFillFileImage className="fill-[#2e8a99]" />
                                            <span>{file.name}</span>
                                        </>
                                    ) : (
                                        <>
                                            <AiOutlineFile className="fill-[#2e8a99]" />
                                            <span>{file.name}</span>
                                        </>
                                    )}
                                </span>
                                <MdDelete onClick={() => removeFile(index)} className="cursor-pointer" />
                            </div>
                        ))
                    ) : (
                        <div>
                            <MdCloudUpload className="w-16 h-16 fill-[#2e8a99]/30 mx-auto" />
                            <div className="text-[#2e8a99]/40">Browse Files to Upload</div>
                        </div>
                    )}
                </div>
            </label>
            <span className="error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden">{errorMessage}</span>
        </div>
    );
};

export default InsuranceDocsUploader;



