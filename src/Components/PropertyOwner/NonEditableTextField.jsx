import React from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';

const NonEditableTextField = (props) => {
    const {labelName, string} = props;

    return (
        <div className='min-w-[200px]'>
            <span className='relative text-xs top-2 left-3 bg-white text-[#a1a1a1]'>{labelName}</span>
            <div className='w-full flex items-center h-fit rounded-lg border border-[#dddddd] hover:border-[#2e8a99]'>
                <input type='text' defaultValue={string} className='w-full p-1 rounded-lg outline-none pl-4 border-none disabled:text-[#b9b9b9]' disabled />
            </div>                                 
        </div>
    )
}

export default NonEditableTextField
