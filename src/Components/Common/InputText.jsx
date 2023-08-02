import React, { useState } from 'react';
import '../../CSS/InputText.css';

const InputText = (props) => {
    const {label, onChange, name, type, errorMessage, ...inputProps} = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);        
    }

    let labelName;
    return (
        <div className='w-full'>
            <div className='relative w-full'>
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder=''
                    className='peer h-12 w-full min-w-[200px] border-2 border-gray-200 text-gray-800 focus:outline-none focus:border-[#2e8a99]/70 
                    rounded-md pl-3 hover:border-[#2e8a99]/70 placeholder-transparent'
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() => 
                        name === 'confirmPassword' && setFocused(true)
                    }
                    focused={focused.toString()}
                    {...inputProps}
                    required
                />
                <label htmlFor={name} className='absolute left-0 -top-2 px-1 bg-white ml-4 text-gray-400 text-xs peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-[#2e8a99] peer-focus:text-xs transform duration-300'>
                    {label}
                </label>
                <span className='error-msg text-xs text-red-500 leading-tight line-clamp-3 hidden'>
                    {errorMessage}                                    
                </span>
            </div>

            {/*<div className='relative mt-4 w-full'>*/}
            {/*    /!* eslint-disable-next-line no-undef *!/*/}
            {/*    <input type='text' id={props.id} name={props.id} className='peer h-12 w-full min-w-[200px] px-5 text-md bg-grey border border-[#ddd] rounded-lg placeholder-transparent*/}
            {/*    border-opacity-50 outline-none hover:border-[#2e8a99] focus:border-[#2e8a99] focus:text-black transition duration-300 -z-10' */}
            {/*    placeholder={labelName} />     */}
            {/*    <label htmlFor='input' className='absolute text-sm px-1 mt-2 left-3 peer-placeholder-shown:text-md*/}
            {/*    peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1.5 transition-all peer-focus:-top-4 peer-focus:left-3 */}
            {/*    peer-focus:text-[#2e8a99] peer-focus:font-medium peer-focus:bg-white peer-focus:scale-75'>*/}
            {/*        {labelName}*/}
            {/*    </label>      */}
            {/*</div>   */}

        </div>
    )
}

export default InputText
