import React, { useState } from 'react';
import { AiTwotoneEdit, AiTwotoneSave } from 'react-icons/ai';

const EditableTextField = (props) => {
    const {labelName, string, id} = props;
    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <div className='min-w-[200px] mx-auto'>
            
            <span className='relative text-xs top-2 left-3 bg-white text-[#a1a1a1] hover:text-[#2e8a99]'>{labelName}</span>
            <div className='flex items-center h-fit gap-2'>
                <input type='text' id={id} name={id} defaultValue={string} 
                    className='min-w-[200px] w-full p-1 rounded-tl-lg rounded-bl-lg outline-none pl-4 rounded-lg border border-[#dddddd] hover:border-[#2e8a99] focus:border-[#2e8a99] enabled:border-[#2e8a99] disabled:text-[#b9b9b9] peer' disabled={isDisabled} />
                
                <a className='relative fill-white bg-[#ececec] p-2 rounded-lg flex justify-center items-center gap-3 cursor-pointer' onClick={() => setIsDisabled(!isDisabled)}>
                    {isDisabled ? 
                        <AiTwotoneEdit className='fill-[#2e8a99]' />
                    :
                        <AiTwotoneSave className='fill-[#2e8a99]' />
                    }

                    {isDisabled ? 
                        <span className='text-xs text-[#2e8a99]'>Edit</span>
                    :   
                        <span className='text-xs text-[#2e8a99]'>Save</span>
                    }  
                </a>
            </div>                                 
        </div>
    )
}

export default EditableTextField
