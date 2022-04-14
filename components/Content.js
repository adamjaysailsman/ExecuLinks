/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
import Image from 'next/image';
import { motion } from 'framer-motion';

import office from '../public/images/office.jpg';
import city from '../public/images/city.jpg';

export default function Content() {
  return (
    <div className="relative mt-16 bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 xl:ml-8">
          <Image src={office} alt="office space" />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto text-base max-w-prose lg:max-w-lg lg:ml-auto lg:mr-0">
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
              Challenges in the industry
            </h3>
            <p className="mt-5 prose text-gray-500 prose-indigo">
              In the current business climate of increasing uncertainty and
              volatility, there are many shared concerns among CEOs and
              executives worldwide, regardless of the industry they're in or the
              type of business they operate.
            </p>
            <div className="mt-5 prose text-gray-500 prose-indigo">
              <p>
                From our experience, we have found that the biggest challenge
                executives face relates to the employment of people who are
                eager to take on a role, but lack the skills necessary to
                achieve. Hiring an inadequate person in a position of leadership
                can be catastrophic to the goals of your company.
              </p>
              <p>
                As a matter of fact Gallup’s latest survey on employee
                engagement touches on one of the impacts of the wrong person in
                the wrong seat with 70% of the US workforce either actively
                disengaged or disengaged; it’s costing businesses billions of
                dollars in lost productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
