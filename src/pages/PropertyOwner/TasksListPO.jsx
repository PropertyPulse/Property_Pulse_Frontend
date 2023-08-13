import React from 'react';
import NavbarWithoutSidebar from '../../Components/Common/NavbarWithoutSidebar';

const TasksListPO = () => {
    return (
        <div className='w-full h-[100vh] bg-background-blue flex'>
            <div className='w-full'>
                <div className='w-full z-40'>
                    <NavbarWithoutSidebar name="Anjalee Neelika" userRole="Property Owner" />
                </div>  

                <section className='dashboard-po h-[calc(100vh-4.5rem)] w-full flex overflow-auto z-10'>
                    <div className='w-full min-h-full h-fit p-10'>
                        <h1 className='text-2xl font-semibold text-center'>Schedule Tasks</h1>
                        <div className='w-full h-full bg-slate-100 p-10'>
                            <div>
                                <div className='w-fit mx-auto'>
                                    <input type='checkbox' className='mr-5' />
                                    T001: Cleaning the house
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TasksListPO
