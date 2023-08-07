import { Link } from "react-router-dom";

import avatarAnisha from "../../Assets/Avatar/avatar-anisha.png";
import avatarAli from "../../Assets/Avatar/avatar-ali.png";
import avatarRichard from "../../Assets/Avatar/avatar-richard.png";

const Feedback = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testm blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What our clients are saying...
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 sm:mb-4">
            <img src={avatarAnisha} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Lisa Simmons</h5>
            <h7 className="text-sm font-light">Property Owners</h7>
            <p className="text-sm text-darkGrayishBlue">
              "I can finally breathe easy knowing my investment property is in
              capable hands. This property management company is reliable and
              attentive, and they always have my best interests in mind."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 sm:mb-4">
            <img src={avatarAli} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Sarah Walker</h5>
            <h7 className="text-sm font-light">Busy Homeowner</h7>
            <p className="text-sm text-darkGrayishBlue">
              "I travel frequently for work, and managing my home was becoming
              burdensome. Thanks to this team, I now have more time to focus on
              my career, knowing my property is well taken care of."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 sm:mb-4">
            <img src={avatarRichard} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Michael Walker</h5>
            <h7 className="text-sm font-light">Remote Property Owner</h7>
            <p className="text-sm text-darkGrayishBlue">
              "Distance was a barrier, but not anymore. This property management
              company bridges the gap and manages my investment property like
              it's right next door."
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="my-16">
          <Link
            to="#"
            className="p-3 px-6 pt-2 text-white rounded-full bg-secondary-gray hover:bg-secondary-gray-lightt"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
