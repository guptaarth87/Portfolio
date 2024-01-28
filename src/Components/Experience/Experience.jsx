import React from 'react'
import './Experience.css';

import ExperienceData from './ExperienceData'; 

export default function Experience() {
  return (<>
  <div id="experience"></div>
   <div className='text-4xl  text-white font-bold text-center mt-6'>Experience</div>

  <div class="wrapper">
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section className="card background-clr">
        
        <div className="icon"><span className="white">1</span></div>
        <div class="details ">
          <span class="title text-white">{ExperienceData[0].title} </span>
          
        </div>
        <br></br><h1 className='text-white font-semibold'>{ExperienceData[0].date_}</h1>
        <p className='text-white'>{ExperienceData[0].description}</p>
        <div class="bottom">
         
         
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section className="card background-clr">
      <div className="icon"><span className="white">2</span></div>
        <div class="details">
          <span class="title text-white">{ExperienceData[1].title}</span>
        
        </div>
        <br></br><h1 className='text-white font-semibold'>{ExperienceData[1].date_}</h1>
        <p className='text-white'>{ExperienceData[1].description}</p>
        <div class="bottom">
         
         
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section className="card background-clr">
      <div className="icon"><span className="white">3</span></div>
        <div class="details">
          <span class="title text-white">{ExperienceData[2].title}</span> 
        </div><br></br>
        <h1 className='text-white font-semibold'>{ExperienceData[2].date_}</h1>
        <p className='text-white'>{ExperienceData[2].description}</p>
        <div class="bottom">
         
         
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section className="card background-clr">
        
      <div className="icon"><span className="white">4</span></div>
        <div class="details">
          <span class="title text-white">{ExperienceData[3].title}</span>
        
        </div>
        <br></br><h1 className='text-white font-semibold'>{ExperienceData[3].date_}</h1>
        <p className='text-white'>{ExperienceData[3].description}</p>
        <div class="bottom">
         
         
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section className="card background-clr">
      <div className="icon"><span className="white">5</span></div>
        <div class="details">
          <span class="title text-white">{ExperienceData[4].title}</span>
          
        </div>
        <br></br><h1 className='text-white font-semibold'>{ExperienceData[4].date_}</h1>
        <p className='text-white '>{ExperienceData[4].description}</p>
        <div class="bottom">
         
         
        </div>
      </section>
    </div>
   
    </div>
  </>
   

  )
}
