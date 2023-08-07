import React from "react";
import { Card } from "flowbite-react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";

const LandingContactUs = () => {
  return (
    <>
      <section className="h-screen py-24 overflow-hidden bg-primary-blue-800 lg:py-28">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:w-full">
            <div className="space-y-8 pl-14 mb-35">
              <h5 className="max-w-md text-2xl font-bold text-center text-slate-100 md:text-2xl md:text-left ">
                We're Here to Help
              </h5>
              <p className="text-center text-slate-100 text-darkGrayishBlue md:text-left ">
                Have questions or ready to get started with hassle-free property
                management? Our team is here to assist you every step of the
                way. Feel free to reach out to us via the contact information
                below, or use the convenient contact form to send us a message.
                We look forward to hearing from you!
              </p>
            </div>
            <div className="mt-8 space-y-4 pl-14 mb-35">
              <h7 className="max-w-md text-xl font-bold text-center text-slate-100 md:text-2xl md:text-left ">
                Contact Information
              </h7>
              <p className="text-center text-slate-100 text-darkGrayishBlue md:text-left ">
                Phone: 0715702788
              </p>
              <p className="text-center text-slate-100 text-darkGrayishBlue md:text-left ">
                Email: info@propertypulse.com
              </p>
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-center text-slate-100 text-darkGrayishBlue md:text-left ">
                    Physical Address:
                  </p>
                </div>
                <div>
                  <p className="text-left text-slate-100 text-darkGrayishBlue md:text-left ">
                    No.508/2/4,<br /> Jayamini Building, <br />Avissawella rd, Kaduwela,
                    <br />
                     Sri
                    Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 mx-auto lg:ml-40 md:w-full">
            <Card className="max-w-sm lg:w-96">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>Contact Us</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <form className="flex flex-col max-w-md gap-4">
                  <div>
                    <div className="block mb-2">
                      <Label htmlFor="email2" value="Your Name" />
                    </div>
                    <TextInput
                      id="Name"
                      placeholder="Enter Your Name"
                      required
                      shadow
                    />
                  </div>
                  <div className="max-w-md">
                    <div className="block mb-2">
                      <Label htmlFor="email4" value="Your email" />
                    </div>
                    <TextInput
                      icon={HiMail}
                      id="email4"
                      placeholder="Enter your Email"
                      required
                      rightIcon={HiMail}
                      type="email"
                    />
                  </div>

                  <div className="max-w-md" id="textarea">
                    <div className="block mb-2">
                      <Label htmlFor="comment" value="Your message" />
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Leave a Massage..."
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingContactUs;
