import React, { useEffect } from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdCloudUpload } from 'react-icons/md';

const MultipleImageUploader = ({onImagesSelected}) => {
    const [selectedImages, setSelectedImages] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedImages([...selectedImages, ...acceptedFiles]);
    }, [selectedImages]);
  
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*',
    });
  
    const removeImage = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
    };
      

    useEffect(() => {
        onImagesSelected(selectedImages);
    }, [selectedImages, onImagesSelected]);
    
    return (
        <div>
            <div 
                {...getRootProps()} 
                className="dropzone w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-200 focus:border-[#2e8a99]/50 hover:border-[#2e8a99]/50 p-2 mb-3"
            >
                <MdCloudUpload className='w-16 h-16 fill-[#2e8a99]/30 mx-auto' />
                <div className='text-[#2e8a99]/40 text-center'>Drag & drop images here, or click to select images</div>
            
                <input {...getInputProps()} />
            </div>
            <div className="selected-images w-full h-fit max-h-64 overflow-y-auto bg-[#2e8a99]/20 rounded-lg flex flex-wrap">
                {selectedImages.map((image, index) => (
                    <div key={index} className="image-container py-2 px-[7px]">
                        <img 
                            src={URL.createObjectURL(image)} 
                            alt={`Image ${index}`} 
                            className='images w-[125px] h-32'
                        />
                        <div className='cursor-pointer w-fit mx-auto bg-red-300 p-1 text-xs text-red-700 rounded-md mt-1' onClick={() => removeImage(index)}>Remove</div>
                    </div>
                ))}
            </div>
            {/* <button onClick={() => onImagesSelected(selectedImages)}>Upload</button> */}
        </div>
    );
}

export default MultipleImageUploader
