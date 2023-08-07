import { Link } from 'react-router-dom';


import facebookLogo from '../../Assets/SocialMidea/icon-facebook.svg';
import youtubeLogo from '../../Assets/SocialMidea/icon-youtube.svg';
import twitterLogo from '../../Assets/SocialMidea/icon-twitter.svg';
import pinterestLogo from '../../Assets/SocialMidea/icon-pinterest.svg';
import instagramLogo from '../../Assets/SocialMidea/icon-instagram.svg';

const Footer = () => {
  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className='bg-primary-blue-800'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        {/* Logo and social links container */}
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © 2022, All Rights Reserved
          </div>
          {/* Social Links Container */}
          <div className='flex justify-center space-x-4'>
            {/* Link 1 */}
            <Link to='#'>
              <img src={facebookLogo} className='h-8' alt='' />
            </Link>
            {/* Link 2 */}
            <Link to='#'>
              <img src={youtubeLogo} className='h-8' alt='' />
            </Link>
            {/* Link 3 */}
            <Link to='#'>
              <img src={twitterLogo} className='h-8' alt='' />
            </Link>
            {/* Link 4 */}
            <Link to='#'>
              <img src={pinterestLogo} className='h-8' alt='' />
            </Link>
            {/* Link 5 */}
            <Link to='#'>
              <img src={instagramLogo} className='h-8' alt='' />
            </Link>
          </div>
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-secondary-gray-light' onClick={() => scrollToSection('home')}>
              Home
            </Link>
            <Link to='#' className='hover:text-secondary-gray-light' onClick={() => scrollToSection('services')}>
              Services
            </Link>
            <Link to='#' className='hover:text-secondary-gray-light' onClick={() => scrollToSection('why-us')}>
              Why us
            </Link>
            <Link to='#' className='hover:text-secondary-gray-light' onClick={() => scrollToSection('how-it-works')}>
              How it works
            </Link>
            <Link to='/contact-us' className='hover:text-secondary-gray-light'>
              Contact Us
            </Link>
          </div>
          <div className='flex flex-col space-y-3 text-white'>
            <Link to='#' className='hover:text-secondary-gray-light'>
              FAQ
            </Link>
            <Link to='#' className='hover:text-secondary-gray-light'>
            Terms & Conditions
            </Link>
            <Link to='#' className='hover:text-secondary-gray-light'>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <div className='hidden mt-32 text-white md:block'>
            Copyright © 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
