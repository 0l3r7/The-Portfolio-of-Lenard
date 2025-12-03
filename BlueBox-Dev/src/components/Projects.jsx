import React from "react";
import JQRTC from '../components/Projects/JQRTC.png'
import SWIRLS from '../components/Projects/SWIRLS.png'
import TUTORTAP from '../components/Projects/TUTORTAP.png'
import CLASSBUDDY from '../components/Projects/CLASSBUDDY.png'
import ISHTAR from '../components/Projects/ISHTAR.png'

function Projects() {
  return (
    <section className=" py-20" id="projects">
      <div className="m-5 p-10   drop-shadow-[0_0_10px_#3B82F6]  ">
        <h1 className="text-center font-light uppercase border-b-2 text-6xl md:text-8xl text-white mb-10   ">Projects</h1>


      <div className="   border-white border-2 rounded-2xl p-10 ">
         {/* Horizontal scroll container */}
      
        <div className="flex space-x-6  overflow-x-auto scrollbar-hide  ">
          {/* smunting pa alala */}
            <div className="text-center flex flex-col items-center justify-center text-white font-FD text-5xl ">
              <h1>F</h1>
              <h1>R</h1>
              <h1>O</h1>
              <h1>N</h1>
              <h1>T</h1>
              <h1>-</h1>
              <h1>E</h1>
              <h1>N</h1>
              <h1>D</h1>
            </div>

          {/* JQRTC PROJECT */}
          <div className="p-6 shrink-0 w-[500px] h-auto rounded-xl border drop-shadow-[0_0_8px_#87CEEB]  bg-[#003F7F]/30 text-white flex flex-col  text-xl font-bold"
          >
            <img 
            src={JQRTC}
            alt="JQRTC" 
            className="w-[450px] h-[250px] border "/>

            <div className="text-justify pb-4 ">
              <h1 className="font-bold p-2">JOURNAL OF QUANTITATIVE REVIEW THEORY AND COMPUTATION: </h1>
              <h3 className="text-lg font-light p-2">Quantitative Research: Insights and Justification with Statistical Software</h3>
              <h2 className="font-semibold p-2">Frontend Development using WordPress</h2>
            </div>
            <div className=" flex justify-center items-center">
              <button className="border font-extrabold p-2 hover:drop-shadow-[0_0_10px_#3B82F6] px-5 rounded-full cursor-pointer">
                <a href="https://quantreviewcomputations.com/">View Project</a></button>
            </div>
            
          </div>
         
         {/* SWIRLS PROJECT */}
          <div className="p-6 shrink-0 w-[500px] h-auto rounded-xl border drop-shadow-[0_0_10px_#FF69B4]  bg-[#C71585]/30 text-white flex flex-col  text-xl font-bold"
          >
            <img 
            src={SWIRLS}
            alt="JQRTC" 
            className="w-[450px] h-[250px] border "/>

            <div className="text-justify pb-4 ">
              <h1 className="font-bold p-2">Swirls Sales Report System: </h1>
              <h3 className="text-lg font-light p-2">Web-Based Sales Report System With Data Visualization For Swirls</h3>
              <h2 className="font-semibold p-2">Frontend development using HTML, Tailwind CSS, and Alpine JS </h2>
            </div>

             <div className=" flex justify-center items-center">
              <button className="border font-extrabold p-2 hover:drop-shadow-[0_0_10px_#3B82F6] px-5 rounded-full cursor-pointer">
              <a href="https://0l3r7.github.io/swirls-sales-report-system/">View Project</a></button>
             </div>
            
          </div>
           {/* TUTORTAP PROJECT */}
          <div className="p-6 shrink-0 w-[500px] h-auto rounded-xl border drop-shadow-[0_0_10px_#0D75D9]  bg-[#005BBB]/30 text-white flex flex-col  text-xl font-bold"
          >
            <img 
            src={TUTORTAP}
            alt="JQRTC" 
            className="w-[450px] h-[250px] border "/>

            <div className="justify-start pb-15 ">
              <h1 className="font-bold p-2">Tutor App: </h1>
              <h3 className="text-lg font-light p-2">On-Demand Peer Tutoring App</h3>
              <h2 className="font-semibold p-2">Frontend development using FlutterFlow  </h2>
            </div>

            <div className=" flex justify-center items-center">
              <button className="border font-extrabold p-2 hover:drop-shadow-[0_0_10px_#3B82F6] px-5 rounded-full cursor-pointer"><a href="https://tutor-tap-team5.flutterflow.app">View Project</a></button>
            </div>
            </div>
            

         {/* smunting pa alala */}
            <div className="text-center flex flex-col pl-6 items-center justify-center text-white font-FD text-5xl ">
              <h1>U</h1>
              <h1 className="pb-6">I</h1>
              
              <h1>U</h1>
              <h1>X</h1>
              
            </div>

         {/* CLASS BUDDY PROJECT */}
          <div className="p-6 shrink-0 w-[500px] h-auto rounded-xl border drop-shadow-[0_0_7px_#87CEEB]  bg-[#3B82F6]/30 text-white flex flex-col  text-xl font-bold"
          >
            <img 
            src={CLASSBUDDY}
            alt="JQRTC" 
            className="w-[450px] h-[250px] border "/>

            <div className="text-justify  pb-15 ">
              <h1 className="font-bold p-2">Class Buddy: </h1>
              <h3 className="text-lg font-light p-2">On-Demand Peer Tutoring App</h3>
              <h2 className="font-semibold p-2">UI/UX Design using Figma </h2>
            </div>

            <div className=" flex justify-center items-center"> <button className="border font-extrabold p-2 hover:drop-shadow-[0_0_10px_#3B82F6] px-5 rounded-full cursor-pointer">
              <a href="https://www.figma.com/design/JRR26TeQR9XBz0SkWXI8DT/oke?node-id=0-1&p=f&t=p4GnTEN7TgRU4rgd-0">View Project</a></button>
          </div></div>
            

           {/* ISHTAR PROJECT */}
          <div className="p-6 shrink-0 w-[500px] h-auto rounded-xl border drop-shadow-[0_0_7px_#005BBB]  bg-[#001F54]/30 text-white flex flex-col  text-xl font-bold"
          >
            <img 
            src={ISHTAR}
            alt="JQRTC" 
            className="w-[450px] h-[250px] border "/>

            <div className="text-justify  pb-15 ">
              <h1 className="font-bold p-2">ISHTAR: </h1>
              <h3 className="text-lg font-light p-2">Ishtar is an online video streaming platform</h3>
              <h2 className="font-semibold p-2">UI/UX Design using Figma </h2>
            </div>

            <div className=" flex justify-center items-center">
              <button className="border font-extrabold p-2 Phover:drop-shadow-[0_0_10px_#3B82F6] px-5  rounded-full cursor-pointer">
              <a href="https://www.figma.com/design/FVFlPxdSnimFSeoha2IqgD/HCI-De-Guzman-John-Lenard?node-id=50-2&p=f&t=iVGZeq62GOb2Hkhz-0">
              View Project</a></button>
            </div>
            
          </div>



        </div>
      </div>
       
      </div>
    </section>
  );
}

export default Projects;
