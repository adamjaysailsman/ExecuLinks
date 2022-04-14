import Image from 'next/image';
import ingram from '../public/images/ingram.png';
import openspan from '../public/images/openspan.png';
import bomgar from '../public/images/bomgar.jpeg';
import simeio from '../public/images/simeio.png';

export default function Testimonial() {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Used by the world&apos;s most influencial companies
            </h2>
            <p className="max-w-3xl mt-3 text-lg text-gray-500">
              We help executives get the fit right with unprecedented accuracy
              using a patented process. Over the last 29 years we have a
              experienced a 99.97% success rate for our clients.
            </p>
            <p className="max-w-3xl mt-3 text-lg text-gray-500">
              This is exactly how companies like Ingram Micro, Openspan, Bomgar,
              SAP, Accenture, Simeo Solutions, Listen360, and Oracle/Logfire
              have reduced turnover, built winning teams, and significantly
              exceeded investor objectives by accurately getting the right
              talent in the right seat the first time.
            </p>

            <div className="mt-8 sm:flex">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <Image src={ingram} alt="ingram logo" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <Image src={openspan} alt="" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <Image src={bomgar} alt="" />
            </div>
            <div className="flex justify-center col-span-1 px-8 py-8 bg-gray-50">
              <Image src={simeio} alt="simeio logo" height={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
