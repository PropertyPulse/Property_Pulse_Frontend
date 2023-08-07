

const AboutUs = () => {
  return (

    <section id='features'className="bg-background-blue">
      {/* Flex Container */}
      <div className='container grid flex-col px-4 pt-10 mx-auto space-y-12 md:space-y-0 md:flex-row place-items-center'>
        {/* What's Different */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
         
         <div><h2 className='text-4xl font-bold text-center md:text-center'>
            Our Mission
          </h2></div> 
          <p className='text-center text-darkGrayishBlue md:text-center'>
          At Property Management Web Application, our mission is clear: to provide property
           owners with a user-friendly platform to manage and safeguard their properties from a distance.
            We understand the challenges you face, and our comprehensive software solution is designed to bridge the gap, 
            offering customized property management services that fit your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
