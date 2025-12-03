import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Tardis1 from './BG/Tardis.jpg'



function Connect() {
      const [showWarning, setShowWarning] = useState(false);

    const handleSubmit = (e) => {
            e.preventDefault();
            // Show warning when "Send" is clicked
            setShowWarning(true);};

            // Automatically hide the warning after 10 seconds
            setTimeout(() => {
            setShowWarning(false);
            },30000); // 10000ms = 10 seconds

            
  return (
     <section
      id="connect"
      className="relative bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${Tardis1})` }}
    >
        
        <div className='pt-[250px] pb-[200px] flex justify-start'>
            <div className="max-w-lg  p-8 items-center text-left m-4 ml-[10%]  border-2 bg-black/40 border-white rounded-xl shadow-lg ">
                <h1 className="text-4xl text-white font-FD font-bold mb-2 text-center">
                Contact Me
                </h1>
                    <ReactTyped
                            className="
                            w-auto  p-4 flex items-center justify-center
                            font-FD hover:font-black hover:text-blue-600
                            text-white drop-shadow-[0_0_10px_#3B82F6]
                            text-center  whitespace-nowrap 
                            transition-all duration-150 cursor-pointer
                            "
                            strings={[
                            "Let’s Go!",
                            "Allons-y!",
                            "Here We Go!",
                            "Let’s Do This!",
                            "Game On!",
                            "Onward!!",
                            "Make It Happen",
                            "Jump In!",
                            "Go Time",
                            "Let’s Work Together",
                            "Build With Me",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />



                    {/*Warning to */}
                    {showWarning && (
                    <p className="   text-yellow-500 font-semibold text-lg text-center mb-4">
                        HELLO!!: <br /> So, Yeah, This form will not send emails Sorry. <br />Please email me directly at  
                        <a href="mailto:lenard.educ.acc@gmail.com" className="cursor-pointer font-bold"> lenard.educ.acc@gmail.com</a>
                    </p>
                    )}

                <form onSubmit={handleSubmit} className="space-y-4 ">

                    {/*name*/}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md bg-gray-700/40 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />

                    {/*Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-md bg-gray-700/40 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />

                    {/*Message */}
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-3 rounded-md bg-gray-700/40 border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600/80 border hover:bg-blue-700 hover:drop-shadow-[0_0_10px_#3B82F6] text-white font-bold rounded-md transition-colors duration-200"
                >
                    Send
                </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Connect