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
import solution from '../public/images/solution.jpg';

export default function Solution() {
  return (
    <div className="relative py-16 overflow-hidden bg-white">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <svg
            className="absolute transform translate-x-32 top-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute transform translate-x-32 bottom-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              Introducing the <span className="text-indigo-800"> Execu</span>
              <span className="text-green-700">Links </span>Solution
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            We start by creating a Job Benchmark specific to your opening. Our
            process removes common biases that result in mis-hires, and creates
            unity and agreement on the bottom line results in the role that have
            to be achieved for superior performance. We help you define 55
            qualities of superior performance for your specific role, and
            measure the candidates scientifically before you spend any time
            wasted on interviewing. After assessing your company, culture, and
            role, we search our massive network of executives, and compare their
            assessment with your Job Benchmark.
          </p>
        </div>
        <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
          <p>
            Once the Gap Analysis is completed, we present you with the top
            matching candidates. So not only do we find candidates with the
            right KSEs (knowledge, skills, and experience), but also the best
            fit to your 55 attributes for superior performance. Remember people
            are typically hired for what they know, but let go for who they are.
            We tell you who they are too. So not only do we find candidates with
            the right KSE’s (Knowledge, skills and experience), but also the
            best fit to your 55 attributes for superior performance. Remember
            people are typically hired for what they know, but let go for who
            they are. We tell you who they are too.
          </p>

          <p>
            By combing the science of psychometrics with 29 years of experience
            and the art of recruiting, we can measure and predict the top
            performers for your company, role, and culture.
          </p>

          <Image src={solution} alt="man in suit" />
        </div>
      </div>
    </div>
  );
}
