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
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from 'next/image';
import success from '../public/images/success.jpg';
import { motion } from 'framer-motion';

export default function Imagine() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-indigo-600 sm:text-4xl">
              Imagine
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="relative mx-auto text-base max-w-prose lg:max-w-none"
            >
              <figure>
                <motion.div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image src={success} alt="" />
                </motion.div>
              </figure>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="mt-8 lg:mt-0"
          >
            <div className="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                <span className="text-green-700"> Imagine </span>knowing in
                advance if a candidate is a strong fit experimentally and
                culturally before you (or your team) invest hours, days, and
                weeks interviewing only to find out they don’t meet the
                standard.
              </p>
              <p>
                <span className="text-green-700"> Imagine </span> only talking
                with the top three candidates from a massive network of relevant
                talent.
              </p>
              <p>
                <span className="text-green-700"> Imagine </span>if you could
                have peace of mind making an offer to the best fit talent in the
                market for your company, role, and culture.
              </p>
              <p>
                <span className="text-green-700"> We have the solution</span>,
                by using the ExecuLinks Talent Predictor Program built on
                patented technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
