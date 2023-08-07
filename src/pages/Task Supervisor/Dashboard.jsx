import React from 'react'
import Calender from "./Calender";
import Chart from "./Chart";
const Dashboard = () => {
  return (
          // <section className='dashboard h-[calc(100vh-6rem)]'>
          //     <div className='top w-12/12 h-3/5 flex'>
          //         <div className='top-left-inner w-6/12'>
          //             <div className='top-left h-full px-5 py-5 '>
          //                 {/* Google Maps iframe */}
          //                 <div className='map-div h-full card'>
          //                     <iframe
          //                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9034101404995!2d79.85875276094056!3d6.902153718617741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sUniversity%20of%20Colombo%20School%20of%20Computing%20(UCSC)!5e0!3m2!1sen!2slk!4v1690225374454!5m2!1sen!2slk"
          //                         className='w-full h-full'
          //                         frameBorder='0'
          //                         allowFullScreen=''
          //                         loading='lazy'
          //                         referrerPolicy='no-referrer-when-downgrade'
          //                         title='Google Maps Embed'
          //                     ></iframe>
          //                 </div>
          //             </div>
          //         </div>
          //         <div className='top-right-inner w-6/12 h-full'>
          //             <div className="top-right h-full px-5 py-5">
          //               <div className='calender-div h-full card'>
          //                 <Calender />
          //               </div>
          //             </div>
          //         </div>
          //     </div>
          //     <div className='bottom w-12/12 h-1/5 card'>
          //         <div className="bottom-inner h-full px-5 py-5">
          //             <Chart />
          //         </div>
          //     </div>
          // </section>
      <section className='dashboard h-[calc(100vh-6rem)] w-full flex'>
        <div className='left h-full w-1/2'>
          <div className='left-top w-full h-1/2'>
            <div className='top-left h-full w-full px-5 py-5 '>
              {/* Google Maps iframe */}
              <div className='map-div h-full card bg-white'>
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
          <div className='left-bottom h-1/2 w-full'>
            <div className='bottom-left w-full h-full px-5 py-5'>
              <div className="bottom-inner h-full card bg-white">
                <Chart />
              </div>
            </div>
          </div>
        </div>

        <div className='right w-1/2 h-full'>
          <div className="right-all w-full h-full items-center flex justify-center px-5 py-5">
            <div className='calender-div card bg-white h-full'>
              <h3 className='pt-5 pb-5 justify-center flex' >Month Schedule</h3>
              <Calender />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Dashboard
