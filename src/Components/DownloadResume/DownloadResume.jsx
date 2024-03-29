import React from 'react'
import './DownloadResume.css'
import Resume from '../DownloadResume/Arthresume.pdf';

export default function DownloadResume() {
  return (
    <div className=" downloadResume p-4 ">
        <a className="rounded-md text-white btn background-clr mt-2 transform transition duration-500 hover:scale-105" href={Resume} download="Arth Gupta Resume.pdf">
         <div className="row ">
          
          <svg className="col-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="download"><path fill="#536784" d="M19.5,20H5.5A2.5,2.5,0,0,1,3,17.5v-8A2.5,2.5,0,0,1,5.5,7h2a.5.5,0,0,1,0,1h-2A1.5,1.5,0,0,0,4,9.5v8A1.5,1.5,0,0,0,5.5,19h14A1.5,1.5,0,0,0,21,17.5v-8A1.5,1.5,0,0,0,19.5,8h-2a.5.5,0,0,1,0-1h2A2.5,2.5,0,0,1,22,9.5v8A2.5,2.5,0,0,1,19.5,20Z"></path><path fill="#5596ff" d="M12.5,17a.5.5,0,0,1-.354-.146l-5-5A.5.5,0,0,1,7.5,11H10V5.5a.5.5,0,0,1,.5-.5h4a.5.5,0,0,1,.5.5V11h2.5a.5.5,0,0,1,.354.854l-5,5A.5.5,0,0,1,12.5,17ZM8.707,12,12.5,15.793,16.293,12H14.5a.5.5,0,0,1-.5-.5V6H11v5.5a.5.5,0,0,1-.5.5Z"></path></svg>
          <h1 className='col-8 mt-3'>Download Resume </h1>
          </div>
          </a>
    </div>
  )
}
