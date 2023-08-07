
import { Button, Navbar } from "flowbite-react";
import logo from  "../../Assets/logo-with-bg.jpg";

export default function NavbarWithCTAButton() {
  return (

    <>
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img
          alt="logo"
          className="h-6 mr-3 sm:h-9"
          src={logo}
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark">
          Property Pulse
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="mr-4 bg-secondary-gray hover:bg-secondary-gray-light">Login</Button>
        <Button className="bg-secondary-gray hover:bg-secondary-gray-light">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#" className="text-white">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link >
        <Navbar.Link href="#">Why Us</Navbar.Link>
        <Navbar.Link href="#">How it Works</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}
