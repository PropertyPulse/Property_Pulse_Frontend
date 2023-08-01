import React from 'react'
import logo from '../../Assets/logo.png'
import eyeIcon from '../../Assets/Icons/eye-icon.png'
import passwordIcon from '../../Assets/Icons/password-icon.png'
import userIcon from '../../Assets/Icons/user-icon.png'





const Login = () => {
    return (
        <div className='background'>
            <section className='flex w-screen bg-black bg-opacity-60 justify-center'>
                <section className='w-1/2 h-screen flex align-center pr-20'>
                    <section className='card login-card h-max w-3/5 bg-white bg-opacity-80 py-16 z-10'>
                        <div className='flex justify-center'>
                            <img className='logo' src={logo} alt='logo'/>
                        </div>
                        <p className='title text-center pt-2 pb-7'>Login</p>

                        <div className='row-auto flex p-2'>
                            <div
                                className="w-1/12 pr-1">
                                <img className='h-8 w-8' src={userIcon} alt='icon'/>
                            </div>
                            <div className="relative h-10 w-11/12 min-w-[200px]">
                                <input
                                    className="peer h-full w-full rounded-[7px] border border-primary-blue-500 border-t-transparent bg-transparent px-3 py-2.5
                                    text-primary-blue-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary-blue-500 placeholder-shown:border-t-primary-blue-500
                                    focus:border-1 focus:border-primary-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-primary-blue-500 transition-all
                                    before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary-blue-500 before:transition-all
                                    after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primary-blue-500 after:transition-all
                                    peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-blue-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
                                    peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-blue-500 peer-focus:before:border-t-1 peer-focus:before:border-l-1 peer-focus:before:border-primary-blue-200 peer-focus:after:border-t-1 peer-focus:after:border-r-1 peer-focus:after:border-primary-blue-500
                                    peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    User Name
                                </label>
                            </div>
                        </div>
                        <div className='row-auto flex p-2'>
                            <div
                                className="w-1/12 pt-1">
                                <img className='h-8 w-8' src={passwordIcon} alt='icon'/>
                            </div>
                            <div className="relative h-10 w-11/12 min-w-[200px]">
                                <div
                                    className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
                                    <img className='h-5 w-5' src={eyeIcon} alt='icon'/>
                                </div>
                                <input
                                    className="peer h-full w-full rounded-[7px] border border-primary-blue-500 border-t-transparent bg-transparent
                                    px-3 py-2.5 !pr-9 text-primary-blue-800 outline outline-0 transition-all
                                    placeholder-shown:border placeholder-shown:border-primary-blue-500 placeholder-shown:border-t-primary-blue-500
                                    focus:border-1 focus:border-primary-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" " type='password'
                                />
                                <label
                                    className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 flex h-full w-full
                                    select-none text-[11px] font-normal leading-tight text-primary-blue-500 transition-all
                                    before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary-blue-500 before:transition-all
                                    after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:left-6 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primary-blue-500 after:transition-all
                                    peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-primary-blue-800
                                    peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary-blue-800 peer-focus:before:border-t-1 peer-focus:before:border-l-1
                                    peer-focus:before:border-primary-blue-500 peer-focus:after:border-t-1 peer-focus:after:border-r-1 peer-focus:after:border-primary-blue-500
                                    peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                        </div>

                        <div className='p-3 text-center'>
                            <span className='font-semibold'>Don't you have an account? </span>
                            <a className='text-primary-blue-500 font-bold' href="#">Signup</a>
                        </div>

                        <div className='flex justify-center py-7 gap-1'>
                            <button className="btn-lg bg-primary-blue-800 text-white" onClick=''>Login</button>
                        </div>

                    </section>
                </section>
            </section>
        </div>
    )
}
export default Login
