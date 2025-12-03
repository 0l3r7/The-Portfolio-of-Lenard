import React from 'react'

function Skills() {
  return (
    <section id="skills"
      className='border-b-10 border-[#011b31] m-2 '>
      
      <div className="m-5 pt-25  lg:flex md:flex drop-shadow-[0_0_10px_#3B82F6] item-center w-auto mb-10 ">
          <div className="text-white text-center w-auto  font-light uppercase border-b-2 p-2 text-3xl flex justify-center
                           md:text-8xl md:flex md:flex-col md:p-14  md:border-r-2 md:border-b-0">
              <h1>S</h1>
              <h1>K</h1>
              <h1>I</h1>
              <h1>L</h1>
              <h1>L</h1>
              <h1>S</h1>
          </div>

          <div className=' bg-[#011b31] w-full  '>
              <div className="space-y-10 w-full   lg:flex justify-center p-10 md:p-20 ">
                
                {/*Programming Languages*/}
                <div 
                 className='flex flex-col  w-full '>
                  <h1 className="text-white text-3xl pb-2 font-FD">Programming Languages</h1>

                    {/*progress bar  HTML & CSS*/}
                    <h1 className="text-white text-2xl pt-2 font-semibold">HTML & CSS</h1>
                      <div className="w-full max-w-md">
                          <div className="h-7 bg-slate-800 rounded-full overflow-hidden">
                            
                            {/* Progress fill */}
                            <div className="h-full w-[50%] bg-linear-to-r  from-sky-700 via-blue-800 to-blue-900 rounded-full">
                              <h1 className='text-end text-white pr-2'>50%</h1>
                            </div>

                          </div>
                      </div>

                    {/*progress bar javaScript */}
                    <h1 className="text-white  text-2xl pt-4 font-semibold">JavaScript</h1>
                      <div className="w-full max-w-md">
                          <div className="h-7 bg-slate-800 rounded-full overflow-hidden">
                            
                            {/* Progress fill */}
                            <div className="h-full w-[15%] bg-linear-to-r   from-sky-700 via-blue-800 to-blue-900  rounded-full">
                              <h1 className='text-end text-white pr-2'>15%</h1>
                            </div>

                          </div>
                      </div>

                    {/*progress bar Python */}
                    <h1 className="text-white  text-2xl pt-4 font-semibold">Python</h1>
                      <div className="w-full max-w-md">
                          <div className="h-7 bg-slate-800 rounded-full overflow-hidden">
                            
                            {/* Progress fill */}
                            <div className="h-full w-[15%] bg-linear-to-r   from-sky-700 via-blue-800 to-blue-900  rounded-full">
                              <h1 className='text-end text-white pr-2'>15%</h1>
                            </div>

                          </div>
                      </div>

                      {/*progress bar Java */}
                    <h1 className="text-white  text-2xl pt-4 font-semibold">Java</h1>
                      <div className="w-full max-w-md">
                          <div className="h-7 bg-slate-800 rounded-full overflow-hidden">
                            
                            {/* Progress fill */}
                            <div className="h-full w-[10%] bg-linear-to-r   from-sky-700 via-blue-800 to-blue-900  rounded-full">
                              <h1 className='text-end text-white pr-2'>10%</h1>
                            </div>

                          </div>
                      </div>

                      {/*progress bar C++ */}
                    <h1 className="text-white  text-2xl pt-4 font-semibold">C++</h1>
                      <div className="w-full max-w-md">
                          <div className="h-7 bg-slate-800 rounded-full overflow-hidden">
                            
                            {/* Progress fill */}
                            <div className="h-full w-[6%] bg-linear-to-r   from-sky-700 via-blue-800 to-blue-900  rounded-full">
                              <h1 className='text-end text-white '>5%</h1>
                            </div>

                          </div>
                      </div>





                </div>


                <div className='flex flex-col space-y-10 w-full'>
                  
                  {/*My Professional Skills*/}
                  <div 
                  className='flex flex-col  w-full'>
                    
                    <h1 className="text-white text-3xl pb-2 font-FD">My Professional Skills</h1>

                      {/*progress bar Front-End Development*/}
                    <h1 className="text-white text-2xl pt-2 font-semibold">
                      Front-End Development</h1>
                    <div className="w-full max-w-md">
                      <div className="h-7 bg-slate-800 rounded-full overflow-hidden">
                        
                        {/* Progress fill */}
                        <div className="h-full w-[59%] bg-linear-to-r  from-sky-500 via-blue-600 to-purple-600 rounded-full">
                        <h1 className='text-end text-white pr-2'>59%</h1>
                        </div>

                      </div>
                    </div>

                    {/*progress bar Ui/Ux Design */}
                    <h1 className="text-white  text-2xl pt-4 font-semibold">Ui/Ux Design</h1>
                    <div className="w-full max-w-md">
                      <div className="h-7 bg-slate-800 rounded-full overflow-hidden">
                        
                        {/* Progress fill */}
                        <div className="h-full w-[50%] bg-linear-to-r  from-sky-500 via-blue-600 to-purple-600 rounded-full">
                        <h1 className='text-end text-white pr-2'>50%</h1>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/*My Professional Skills*/}
                  <div className='border-white border rounded-3xl   p-4'>
                    <p className='text-white text-justify text-lg '>A passionate Man focused on turning ideas into functional software, 
                    offering adaptability, a strong willingness to learn, and a commitment to delivering efficient,
                     high-quality, user-centered projects.
                    </p>
                  </div>
                </div>
                  
              </div>

          </div>
      
                   
      </div>
    </section>
  )
}

export default Skills