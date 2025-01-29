import React from "react";

const BoardingPass = () => {
  return (
    <div className='min-h-screen bg-purple-100 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-lg flex max-w-2xl w-full overflow-hidden'>
        {/* Left Section - Flight Details */}
        <div className='flex-1 p-6'>
          {/* Cities */}
          <div className='flex items-center justify-between mb-6'>
            <div>
              <p className='text-purple-600 text-2xl font-bold'>SYD</p>
              <p className='text-gray-500 text-sm'>SYDNEY</p>
            </div>

            <div className='flex items-center px-4'>
              <div className='w-4 h-4'>
                <svg
                  viewBox='0 0 24 24'
                  className='text-purple-600 w-full h-full'
                >
                  <path
                    fill='currentColor'
                    d='M3.414 13.778l2.926.328-.124 1.11-4.414-.494a.75.75 0 0 1-.475-1.27l6.342-6.343a7.898 7.898 0 0 1 11.164 0l.708.708-1.06 1.06-.708-.707a6.398 6.398 0 0 0-9.043 0L3.414 13.778z'
                  />
                </svg>
              </div>
              <div className='border-t-2 border-dashed border-purple-300 w-32 mx-2'></div>
            </div>

            <div className='text-right'>
              <p className='text-purple-600 text-2xl font-bold'>DEL</p>
              <p className='text-gray-500 text-sm'>DELHI</p>
            </div>
          </div>

          {/* Flight Info Grid */}
          <div className='grid grid-cols-3 gap-6'>
            <div>
              <p className='text-gray-500 text-sm mb-1'>FLIGHT NO.</p>
              <p className='font-semibold'>CX 138</p>
            </div>
            <div>
              <p className='text-gray-500 text-sm mb-1'>DATE</p>
              <p className='font-semibold'>12 FEB, 2020</p>
            </div>
            <div>
              <p className='text-gray-500 text-sm mb-1'>TERMINAL</p>
              <p className='font-semibold'>05 B</p>
            </div>
            <div>
              <p className='text-gray-500 text-sm mb-1'>DEPARTS</p>
              <p className='font-semibold text-purple-600'>08:00 PM</p>
            </div>
            <div>
              <p className='text-gray-500 text-sm mb-1'>ARRIVES</p>
              <p className='font-semibold'>10:00 PM</p>
            </div>
            <div>
              <p className='text-gray-500 text-sm mb-1'>PASSENGER</p>
              <p className='font-semibold'>RENEE KERLUKE</p>
            </div>
          </div>
        </div>

        {/* Right Section - Boarding Pass */}
        <div className='bg-purple-600 text-white p-6 flex flex-col justify-between min-w-[150px]'>
          <div>
            <p className='text-sm opacity-80 mb-1'>BOARDING</p>
            <p className='text-2xl font-bold mb-6'>07:00 PM</p>

            <p className='text-sm opacity-80 mb-1'>GATE</p>
            <p className='text-2xl font-bold mb-6'>12 A</p>

            <p className='text-sm opacity-80 mb-1'>CLASS</p>
            <p className='text-2xl font-bold'>BUSINESS</p>
          </div>

          <div className='mt-6'>
            {/* Barcode representation */}
            <div className='space-y-1'>
              <div className='h-1 bg-white opacity-80'></div>
              <div className='h-1 bg-white opacity-80'></div>
              <div className='h-1 bg-white opacity-80'></div>
              <div className='h-1 bg-white opacity-80'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingPass;
