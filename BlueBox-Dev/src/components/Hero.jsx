import React from 'react'
import { ReactTyped } from "react-typed";
import me from '../components/BG/me-no-bg.png'


function Hero() {
  return (
    
    <>
    <section id="hero">
     <div className='bg-cover  bg-center bg-no-repeat pb-40 border-b-10 border-[#011b31]'>

        {/*desktop*/}
        <div className='hidden md:flex'>
            <div className='m-5 p-10 pt-[150px] '>
            
            <div className=' flex pb-5 text-white '>
            <h1 className='text-2xl font-FD border p-4 rounded-full
                        font-bold hover:font-black 
                        bg-linear-to-r from-blue-900 via-blue-500 to-blue-900
                         '> Welcome to my Portfolio</h1>
         </div>

        <div className='text-white  gap-2 text-7xl pb-7 '> 
            <h1 className='font-bold'>Hello! I'm Lenard </h1>
            <ReactTyped 
             className=' font-FD hover:font-black hover:text-blue-600
                        drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]
                        transition-all duration-100 cursor-pointer'
                                strings={[
                                "Front-End Developer", 
                                "UI/UX Designer", 
                                ]}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                                />
        </div>

        <div className='border-white border rounded-3xl backdrop-blur-xl p-4'>
            <p className='text-gray-200 text-c  text-lg'>I am passionate about turning ideas into working software, with adaptability, a strong willingness to learn, <br />
            and a commitment to producing efficient and high-quality outputs.</p>
        </div>
            </div>
            <div>
                <img 
                src={me} 
                alt="me"
                className='hidden' />
            </div>
        </div>


        {/*Mobile*/}
        <div className='block md:hidden'>
            <div className=' p-10 pt-[150px] '>
            
                <div className=' flex pb-5 text-white '>
                    <h1 className='text-2xl font-FD border p-4 rounded-full
                                font-bold hover:font-black 
                                bg-linear-to-r from-blue-900 via-blue-500 to-blue-900
                                '> Welcome to my Portfolio
                    </h1>
                 </div>

                <div className='text-white  gap-2 text-5xl pb-7 '> 
                    <h1 className='font-bold'>Hello! I'm Lenard </h1>
                    <ReactTyped 
                    className=' font-FD hover:font-black hover:text-blue-600
                                drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]
                                transition-all duration-100 cursor-pointer'
                                        strings={[
                                        "Front-End Developer", 
                                        "UI/UX Designer", 
                                        ]}
                                        typeSpeed={40}
                                        backSpeed={60}
                                        loop
                                        />
                </div>

                <div className='border-white border rounded-3xl backdrop-blur-xl p-4 ='>
                    <p className='text-gray-200 text-c  text-lg'>I am passionate about turning ideas into working software, with adaptability, a strong willingness to learn, <br />
            and a commitment to producing efficient and high-quality outputs.</p>
                </div>
            </div>
        </div>

    </div>
    </section>
    </>
   
  )
}

export default Hero