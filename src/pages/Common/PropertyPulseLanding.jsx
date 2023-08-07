import React from 'react'
import './landingHome.css';
import LandingNavBar from '../../Components/Landing/LandingNavBar'
import Body from '../../Components/Landing/Body'
import Features from '../../Components/Landing/Features'
import Testimonial from '../../Components/Landing/Feedback';
import CallToAction from '../../Components/Landing/CallToAction';
import Footer from '../../Components/Landing/Footer';
import AboutUs from '../../Components/Landing/AboutUs';
import { HowItWorks } from '../../Components/Landing/HowItWorks';

const PropertyPulseLanding = () => {
    return (
        <>
        <LandingNavBar />
        <Body />
        <Features />
        <AboutUs />
        <HowItWorks />
        <Testimonial />
        <CallToAction />
        <Footer />
        </>
    )
}
export default PropertyPulseLanding
