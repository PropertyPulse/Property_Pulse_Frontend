import React from "react";
import { Button, Timeline } from "flowbite-react";

export const HowItWorks = () => {
  return (
    <div>
      <div className="p-20 pt-10 text-4xl font-bold text-center md:text-center">
        How it Works
      </div>
      <div className="mx-auto lg:px-40">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point/>
            <Timeline.Content>
              <Timeline.Title className="text-black">
                1. Sign Up and Provide Property Details
              </Timeline.Title>
              <Timeline.Body>
                <p>
                  Start by signing up on our user-friendly platform. Create your
                  account and provide essential details about your property,
                  including its location, type, and any specific requirements
                  you have. This information helps us tailor our services to
                  your property's unique needs.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Title>2. Select Your Services</Timeline.Title>
              <Timeline.Body>
                <p>
                  Choose from a range of property management services that best
                  suit your property and preferences. Whether it's routine
                  maintenance, repairs, inspections, or security measures, our
                  services are customizable to ensure your property is well
                  taken care of, even in your absence.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Title>3. Customize Your Preferences</Timeline.Title>
              <Timeline.Body>
                <p>
                Personalize your property management experience by setting your preferences. 
              Decide how often you want updates, the level of communication you prefer,
               and any specific instructions you have for our team. Your satisfaction is our priority,
                and we ensure your preferences are meticulously followed.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Title>4. Leave the Rest to Us</Timeline.Title>
              <Timeline.Body>
                <p>
                Once your preferences are set, it's time to sit back and relax. Our expert property management team takes over,
               executing the tasks you've delegated with efficiency and professionalism. Whether it's coordinating repairs, 
               conducting inspections, or ensuring security measures are in place, we've got it covered.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Title>5. Real-Time Updates and Reports</Timeline.Title>
              <Timeline.Body>
                <p>
                Stay connected to your property's status at all times. Our web application provides real-time updates 
              and detailed reports on ongoing tasks and maintenance activities. You'll receive timely notifications, 
              ensuring you're informed about every aspect of your property's management.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Title>6. Enjoy Stress-Free Property Ownership</Timeline.Title>
              <Timeline.Body>
                <p>
                With the Property Management Web Application by your side, you can enjoy the benefits of stress-free property ownership.
               Travel with confidence, knowing that your property is being expertly managed and maintained, 
               allowing you to focus on what truly matters.
                </p>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>

          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Title>
              Get Started Today!
              </Timeline.Title>
              <Timeline.Body>
                <p>
                Take the first step towards effortless property management. 
                Join our platform, customize your services, and experience the peace of mind that 
                comes with knowing your property is in capable hands. Start your journey towards hassle-free property ownership now.
                </p>
              </Timeline.Body>
              <Button className="bg-secondary-gray hover:bg-secondary-gray-light">
                <p>Get Start</p>
              </Button>
            </Timeline.Content>
          </Timeline.Item>

        </Timeline>
      </div>
    </div>
  );
};
