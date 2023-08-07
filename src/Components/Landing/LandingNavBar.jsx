
import { Button, Navbar } from "flowbite-react";
import logo from  "../../Assets/logo-with-bg.jpg";

export default function NavbarWithCTAButton() {
  return (

    <div>
    <Navbar fluid rounded  className="bg-primary-blue-800">
      <Navbar.Brand href="#">
        <img
          alt="logo"
          className="h-6 mr-3 sm:h-9"
          src={logo}
        />
        <span className="self-center text-xl font-semibold text-white whitespace-nowrap dark">
          Property Pulse
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-secondary-gray hover:bg-secondary-gray-light">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#" className="text-white">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white">Services</Navbar.Link >
        <Navbar.Link href="#" className="text-white">Why Us</Navbar.Link>
        <Navbar.Link href="#" className="text-white">How it Works</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
