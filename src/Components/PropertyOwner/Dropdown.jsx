import { Option, Select } from '@material-tailwind/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { BsChevronDown, BsSearch } from 'react-icons/bs';

const Dropdown = ({label, options, searchEnable}) => {
    const [frequency, setFrequency] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    useEffect(() => {
        
    })
    
    return (
        
        <div>
            <div 
                onClick={() => setOpen(!open)}
                className={`bg-white w-64 p-2 flex items-center justify-between rounded text-sm cursor-pointer border-2 ${!selected && "text-gray-400 pl-4"}`}>
                {selected 
                    ? selected.length > 25 
                        ? selected.substring(0, 25) + '...'
                        : selected 
                    : label
                }
                <BsChevronDown size={12} className={`ml-5 ${open && "rotate-180"}`} />
            </div>
            <ul className={`bg-white rounded overflow-y-auto ${open ? 'max-h-60 border mt-2' : 'max-h-0'}`}>
                <div className={`flex items-center justify-center px-2 sticky top-0 bg-white ${searchEnable ? '' : 'hidden'}`}>
                    <BsSearch size={12} className='text-gray-500' />
                    <input 
                        type='text' 
                        placeholder='Search' 
                        className='placeholder:text-gray-400 text-[#01497C] p-1.5 outline-none focus:ring-0 text-xs border-none'
                        onChange={(e)=>setInputValue(e.target.value.toLowerCase())} 
                    />
                </div>
                
                {options.map((option) => (
                    <li 
                        key={option.id} 
                        className={`p-2 text-xs hover:bg-sky-600 hover:text-white rounded 
                        ${option.label.toLowerCase() === selected.toLowerCase() &&
                        'bg-sky-600 text-white'}
                        ${option.label.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
                        onClick={() => {
                            if(option.label.toLowerCase() !== selected.toLowerCase()) {
                                setSelected(option.label);
                                setOpen(false);
                                setInputValue("");
                            }
                        
                        }}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dropdown
