import React from "react";

function Projects() {
  return (
    <section className=" py-20" id="projects">
      <div className="m-5 p-10   drop-shadow-[0_0_10px_#3B82F6]  ">
        <h1 className="text-center font-light uppercase border-b-2 text-6xl md:text-8xl text-white mb-10   ">Projects</h1>


      <div className="   border-white border-2 rounded-2xl p-10 ">
         {/* Horizontal scroll container */}
      
        <div className="flex space-x-6  overflow-x-auto scrollbar-hide ">
          {/* Hard-coded containers */}
          <div className="shrink-0 w-64 h-64 rounded-xl border bg-[#011b31]/40 text-white flex items-center justify-center text-xl font-bold">
            Project 1
          </div>
         
        </div>
      </div>
       
      </div>
    </section>
  );
}

export default Projects;
