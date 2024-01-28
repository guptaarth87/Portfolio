import React from 'react'
import './DownloadResume.css'
import Resume from '../DownloadResume/Arthresume.pdf';

export default function DownloadResume() {
  return (
    <div className=" downloadResume p-4 ">
        <a className="rounded-md text-white btn background-clr mt-2 transform transition duration-500 hover:scale-105" href={Resume} download="Arth Gupta Resume.pdf">Download Resume</a>
    </div>
  )
}
