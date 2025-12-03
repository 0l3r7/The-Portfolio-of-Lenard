import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

function Contact() {
  return (

  <section id="contact"
  className='border-b-10 border-[#011b31]'>
      <div className='m-5 pt-[150px] pb-[200px]'>
        <div className="flex items-center flex-col  ">
          <h1 className='text-center w-auto  font-FD uppercase text-6xl md:text-8xl text-white mb-10 drop-shadow-[0_0_10px_#3B82F6]  '>Socials</h1>
          <div className='space-y-4 w-auto border-2 border-white p-6 rounded-2xl shadow-[inset_0_0_50px_#ffffff]/30 '>
              {/* Facebook */}
              <div  className=' flex flex-row items-center text-white space-x-2'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-600 w-20 h-20 pt-4 border-2 rounded-full cursor-pointer hover:text-blue-800 transition-colors" />
                </a>
                <a href="https://www.facebook.com">
                <h1 className='cursor-pointer hover:font-semibold text-lg md:text-3xl hover:text-blue-600 '>Lenard</h1></a>
              </div>

              {/* Gmail*/}
              <div  className=' flex flex-row items-center text-white space-x-2'>
                <a href="mailto:lenard.educ.acc@gmail.com" >
                  <SiGmail className="text-red-600 w-20 h-20 hover:text-red-800 transition-colors  cursor-pointer" />
                </a>
                <a href="mailto:lenard.educ.acc@gmail.com">
                  <h1 className='cursor-pointer hover:font-semibold text-lg md:text-3xl hover:text-red-600'>lenard.educ.acc@gmail.com</h1></a>
              </div>

          </div>
        
      </div>
      </div>

  </section>

  )
}

export default Contact