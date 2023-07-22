import React from 'react'

const SamplePage = () => {
    return (
        <section className='flex w-screen'>
            <section className='w-1/2 h-screen bg-blue-200 flex align-center justify-center'>
                <section className='card h-max bg-white'>
                    <p className='title text-center'>Dashboard</p>
                    <p className='sub-title text-center'>Upcoming Tasks</p>

                    <div className='row-auto p-3'>
                        <input className='w-96' placeholder='User Name'/>
                    </div>
                    <div className='row-auto p-3'>
                        <input className='w-96' type='password' placeholder='Password'/>
                    </div>

                    <div className='flex justify-center py-4 gap-1'>
                        <button className="btn-lg bg-primary-blue-800 text-white">Login</button>
                    </div>
                    <div className='flex justify-center py-4 gap-1'>
                        <button className="btn-md bg-success-green text-white">Submit</button>
                    </div>
                    <div className='flex justify-center py-4 gap-1'>
                        <button className="btn-sm bg-secondary-gray text-white">Send</button>
                    </div>
                    <div className='flex justify-center py-4 gap-1'>
                        <button className="btn-outlined-red-md">Cancel</button>
                    </div>
                    <div className='flex justify-center py-4 gap-1'>
                        <button className="btn-outlined-red-sm">Remove</button>
                    </div>
                    <div className='flex justify-center py-4 gap-1'>
                        <button className="btn-outlined-gray-md">Hide</button>
                    </div>
                </section>
            </section>

            <section className='w-1/2 h-screen bg-background-blue flex align-center justify-center'>
            </section>
        </section>
    )
}
export default SamplePage
