import React from "react";
import logo from "../../Assets/logo.png";
import calender from "../../Assets/calender.png";
import analitics from "../../Assets/Analitics.png";
import Calender from "./Calender";

const TaskSupervisorDashboard = () => {
    return (
        <div>
            <div className='row-auto flex bg-background-blue'>
                <section className='sidebar w-2/12 h-screen bg-white z-50'>
                    <div className='row-auto flex'>
                        <div className='p-0'>
                            <img className='w-28 h-28' src={logo} alt='logo' />
                        </div>
                        <div className='text-center pt-3'>
                            <span className='title text-4xl'>Property<br />Pulse</span>
                        </div>
                    </div>
                </section>

                <section className='w-10/12'>
                    <section className='navbar h-24 bg-primary-blue-800 z-40'>
                        <div className=''></div>
                    </section>

                    <section className='dashboard h-[calc(100vh-6rem)]'>
                        <div className='top w-12/12 h-3/5 flex'>
                            <div className='top-left-inner w-6/12'>
                                <div className='top-left h-full px-5 py-5'>
                                    {/* Google Maps iframe */}
                                    <div className='map-div h-full'>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9034101404995!2d79.85875276094056!3d6.902153718617741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1690225374454!5m2!1sen!2slk"
                                            className='w-full h-full'
                                            frameBorder='0'
                                            allowFullScreen=''
                                            loading='lazy'
                                            referrerPolicy='no-referrer-when-downgrade'
                                            title='Google Maps Embed'
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className='top-right-inner w-6/12 h-full'>
                                <div className="top-right h-full px-5 py-5">
                                    <Calender />

                                </div>
                            </div>
                        </div>
                        <div className='bottom w-12/12 h-1/5'>
                            <div className="bottom-inner h-full px-5 py-5">

                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default TaskSupervisorDashboard;
