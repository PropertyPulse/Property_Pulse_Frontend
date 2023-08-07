import React from "react";
import { Card } from "flowbite-react";
import item1 from "../../Assets/imageSlider/item1.jpg";
import item2 from "../../Assets/imageSlider/item3.jpg";
import item3 from "../../Assets/imageSlider/item4.jpg";
import item4 from "../../Assets/imageSlider/item5.jpg";
import item5 from "../../Assets/imageSlider/item6.jpg";
const Features = () => {
  return (
    <section>
      {/* Flex Container */}
      <div className="container grid flex-col px-4 mx-auto mt-10 space-y-12 place-content-center md:space-y-0 md:flex-row " id="services">
        {/* What's Different */}
        <div className="flex flex-col space-y-12 md:w-3/3 place-content-center">
          <div>
            <h2 className="text-4xl font-bold text-center md:text-center">
              Services Tailored to You
            </h2>
          </div>

          <div className="grid gap-10 p-10 md:grid-cols-4">
            <div className="flex h-full">
              <Card imgAlt="cardImage" imgSrc={item1}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Manage Your Property, Your Way</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>
                    Maintaining your property has never been easier. With our
                    online platform, you're in control. Delegate property
                    maintenance, repairs, and inspections according to your
                    preferences. Customize your services to match your
                    property's requirements and your peace of mind.
                  </p>
                </p>
              </Card>
            </div>
            <div className="flex h-full">
              <Card imgAlt="cardImage" imgSrc={item2}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Expert Care, Anytime, Anywhere</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>
                    We offer more than just convenience; we offer expertise. Our
                    property management company is dedicated to the safety and
                    security of your property. Whether it's a house or land, we
                    ensure it's maintained and secure, even when you're far
                    away.
                  </p>
                </p>
              </Card>
            </div>
            <div className="flex h-full">
              <Card imgAlt="cardImage" imgSrc={item3}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Transparent Communication, Real-time Updates</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>
                    Stay informed every step of the way. Our web application
                    provides continuous updates, allowing you to monitor ongoing
                    tasks, receive reports on property maintenance, and stay
                    connected with your property, no matter where you are in the
                    world.
                  </p>
                </p>
              </Card>
            </div>
            <div className="flex h-full">
              <Card imgAlt="cardImage" imgSrc={item4}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>Special Security System for Your Property</p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <p>
                    We will provide a special security system for your property.
                    We can ensure that your property is safe and secure. we will
                    be notified if there is any unauthorized access to your
                    property.
                  </p>
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Flex Container */}
      <div className="bg-background-blue" id="why-us">
        <div>
          <h2 className="p-4 text-4xl font-bold text-center md:text-center">
            Why Us
          </h2>
        </div>
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* What's Different */}

          <div className="flex items-center justify-center mx-10 md:w-1/3">
            <img
              class="h-auto max-w-auto rounded-lg px-10"
              src={item5}
              alt="imagedescription"
            />
          </div>

          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-2/3">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-secondary-gray-light md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-secondary-gray-light">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Your Property, Our Priority
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Your Property, Our Priority
                </h3>
                <p className="text-darkGrayishBlue">
                  We treat your property as if it were our own. Our team is
                  committed to delivering top-notch service and ensuring your
                  property's well-being.
                </p>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-secondary-gray-light md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-secondary-gray-light">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Communication at its Best
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Communication at its Best
                </h3>
                <p className="text-darkGrayishBlue">
                  We believe in transparent communication. Receive real-time
                  updates and reports, ensuring you're always in the loop
                  regarding your property's status.
                </p>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-secondary-gray-light md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-secondary-gray-light">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Affordable Solutions
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Affordable Solutions
                </h3>
                <p className="text-darkGrayishBlue">
                  We understand the importance of cost-effectiveness. Our
                  customized pricing ensures you only pay for the services your
                  property truly needs.
                </p>
              </div>
            </div>

            {/* List Item 4*/}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-secondary-gray-light md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-secondary-gray-light">
                    04
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Security
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Security
                </h3>
                <p className="text-darkGrayishBlue">
                  We will protect your property as you do...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section id='features'>
    //   {/* Flex Container */}
    //   <div className='container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row'>
    //     {/* What's Different */}
    //     <div className='flex flex-col space-y-12 md:w-1/3 pt-60'>
    //       <h2 className='max-w-md text-4xl font-bold text-center md:text-left'>
    //       Services Tailored to You
    //       </h2>
    //       <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
    //         Manage provides all the functionality your team needs, without the
    //         complexity. Our software is tailor-made for modern digital product
    //         teams.
    //       </p>
    //     </div>

    //     {/* Numbered List */}
    //     <div className='flex flex-col space-y-8 md:w-2/3'>
    //       {/* List Item 1 */}
    //       <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
    //         {/* Heading */}
    //         <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
    //           <div className='flex items-center space-x-2'>
    //             <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
    //               01
    //             </div>
    //             <h3 className='text-base font-bold md:mb-4 md:hidden'>
    //             Manage Your Property, Your Way
    //             </h3>
    //           </div>
    //         </div>

    //         <div>
    //           <h3 className='hidden mb-4 text-lg font-bold md:block'>
    //           Manage Your Property, Your Way
    //           </h3>
    //           <p className='text-darkGrayishBlue'>
    //           Maintaining your property has never been easier. With our online platform,
    //            you're in control. Delegate property maintenance, repairs, and inspections according to your preferences.
    //             Customize your services to match your property's requirements and your peace of mind.
    //           </p>
    //         </div>
    //       </div>

    //       {/* List Item 2 */}
    //       <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
    //         {/* Heading */}
    //         <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
    //           <div className='flex items-center space-x-2'>
    //             <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
    //               02
    //             </div>
    //             <h3 className='text-base font-bold md:mb-4 md:hidden'>
    //             Expert Care, Anytime, Anywhere
    //             </h3>
    //           </div>
    //         </div>

    //         <div>
    //           <h3 className='hidden mb-4 text-lg font-bold md:block'>
    //           Expert Care, Anytime, Anywhere
    //           </h3>
    //           <p className='text-darkGrayishBlue'>
    //           We offer more than just convenience; we offer expertise. Our property management company is
    //           dedicated to the safety and security of your property. Whether it's a house or land, we ensure
    //            it's maintained and secure, even when you're far away.
    //           </p>
    //         </div>
    //       </div>

    //       {/* List Item 3 */}
    //       <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
    //         {/* Heading */}
    //         <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
    //           <div className='flex items-center space-x-2'>
    //             <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
    //               03
    //             </div>
    //             <h3 className='text-base font-bold md:mb-4 md:hidden'>
    //             Transparent Communication, Real-time Updates
    //             </h3>
    //           </div>
    //         </div>

    //         <div>
    //           <h3 className='hidden mb-4 text-lg font-bold md:block'>
    //           Transparent Communication, Real-time Updates
    //           </h3>
    //           <p className='text-darkGrayishBlue'>
    //           Stay informed every step of the way. Our web application provides continuous updates,
    //            allowing you to monitor ongoing tasks, receive reports on property maintenance,
    //             and stay connected with your property, no matter where you are in the world.
    //           </p>
    //         </div>
    //       </div>

    //        {/* List Item 4*/}
    //        <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row'>
    //         {/* Heading */}
    //         <div className='rounded-l-full bg-brightRedSupLight md:bg-transparent'>
    //           <div className='flex items-center space-x-2'>
    //             <div className='px-4 py-2 text-white rounded-full md:py-1 bg-brightRed'>
    //               04
    //             </div>
    //             <h3 className='text-base font-bold md:mb-4 md:hidden'>
    //             Special Security System for Your Property
    //             </h3>
    //           </div>
    //         </div>

    //         <div>
    //           <h3 className='hidden mb-4 text-lg font-bold md:block'>
    //           Special Security System for Your Property
    //           </h3>
    //           <p className='text-darkGrayishBlue'>
    //           We will provide a special security system for your property.
    //           We can ensure that your property is safe and secure.
    //           we will be notified if there is any unauthorized access to your property.

    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Features;
