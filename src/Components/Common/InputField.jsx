const InputField = (props) => {
    const { labelName } = props;

    return (
        <div className="mb-4">
            <label className='relative mb-2'>                            
                <input type='text' className='w-full bg-white border-2 rounded-lg px-6 py-2
                border-[#ddd] border-opacity-50 outline-none focus:text-[#1f6e8c]
                focus:border-[#1f6e8c] transition duratio-200' />
                <span className='h-fit text-[#909090] text-opacity-80 absolute left-0 -top-0.5 mx-6
                px-2 transition duration-200 input-text'>{labelName}</span>
            </label>
        </div>       
    )
}

export default InputField
