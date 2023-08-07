import React, { useEffect, useRef, useState } from 'react';
import { Button, Navbar } from 'flowbite-react';
import logo from '../../Assets/logo-with-bg.jpg';

export default function NavbarWithCTAButton() {
  const sections = ['home', 'services', 'why-us', 'how-it-works', 'contact-us'];
  const [activeSection, setActiveSection] = useState(null);
  const observerRef = useRef([]);

  useEffect(() => {
    const observers = sections.map(section => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section);
          }
        },
        { rootMargin: '-50% 0px -50% 0px' } // Adjust this margin as needed
      );
    });

    observerRef.current = observers;

    sections.forEach((section, index) => {
      const element = document.getElementById(section);
      if (element) {
        observers[index].observe(element);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <img alt="logo" className="h-6 mr-3 sm:h-9" src={logo} />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark">
            Property Pulse
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="mr-4 bg-secondary-gray hover:bg-secondary-gray-light">
            Login
          </Button>
          <Button className="bg-secondary-gray hover:bg-secondary-gray-light">
            Get started
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            active={activeSection === 'home'}
            onClick={() => scrollToSection('home')}
            className="text-white"
          >
            <p>Home</p>
          </Navbar.Link>
          {/* Repeat for other links */}
          <Navbar.Link
            active={activeSection === 'services'}
            onClick={() => scrollToSection('services')}
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            active={activeSection === 'why-us'}
            onClick={() => scrollToSection('why-us')}
          >
            Why Us
          </Navbar.Link>
          <Navbar.Link
            active={activeSection === 'how-it-works'}
            onClick={() => scrollToSection('how-it-works')}
          >
            How It Works
          </Navbar.Link>
          {/* ... Repeat for other links */}
          <Navbar.Link href="/contact-us"
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
