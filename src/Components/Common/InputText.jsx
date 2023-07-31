import React from 'react'

const InputText = (props) => {
    const { labelName, id } = props;

    return (
        <div className='w-full'>
            <div className='relative mt-4 w-full'>
                <input type='text' id={id} name={id} className='peer h-12 w-full min-w-[200px] px-5 text-md bg-grey border border-[#ddd] rounded-lg placeholder-transparent
                border-opacity-50 outline-none hover:border-[#2e8a99] focus:border-[#2e8a99] focus:text-black transition duration-300 -z-10' 
                placeholder={labelName} />     
                <label htmlFor='input' className='absolute px-1 mt-1 left-3 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1.5 transition-all peer-focus:-top-4 peer-focus:left-3 
                peer-focus:text-[#2e8a99] peer-focus:font-medium peer-focus:bg-white peer-focus:scale-75'>
                    {labelName}
                </label>      
            </div>   
        </div>
    )
}

export default InputText
