import React from 'react';
import ProjectData from './ProjectsData';

export default function Projects() {
  return (
   <>
   <div id="projects"></div>
   <div className='text-4xl mt-6 text-white font-bold text-center'>Projects</div>
   <div className="row">
      {
        ProjectData.map((item,key)=>{
            return(
                <>
                <div class=" mt-4 max-w-sm mx-auto background-clr rounded-md overflow-hidden shadow-lg">
    <img src={item.image_url} alt="Project Image" class="rounded-md w-full h-48 object-cover" />
    <div class="p-6">
        <h2 class="text-xl font-semibold mb-2 text-white">{item.name_}</h2>
        <p class="text-white mb-4">{item.description}</p>
        <p class="text-sm text-white mb-4">Technologies Used: HTML, CSS, JavaScript, Tailwind CSS</p>
        <a href={item.project_url} class="text-blue-500 flex items-center" target="_blank">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 12H3M12 3l-8 9 8 9"></path>
            </svg>
            Visit Project
        </a>
    </div>
</div>
     </>          
            )
        })
      
      }
   </div>
   </>
  )
}

{/* <div class="m-4 col-lg-3 col-md-5 col-sm-8 card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
<img className="rounded-md" src={item.image_url} />
 <div class="text-2xl font-bold text-white mb-4">{item.name_}</div>
 <div className=" text-white">{item.description}</div>
<div className="row">
 {
     item.Technologies_used.map((itemx,keys)=>{
         return(
             <span className='m-2 text-white rounded-md border-2 p-2 border-color col-5'>{itemx}</span>
         )
     })
 }
</div>

 <div class="mt-4 col-12 card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
                    
                </div>
</div> */}