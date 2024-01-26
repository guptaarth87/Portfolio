import React from 'react'
import { icons } from '../../DataConfig';
import { BasicInfo } from '../../DataConfig';
import './Hero.css';

export default function Hero() {
  return (
   <>
   <div id="hero"></div>
   <div className="container">
    <div className="row">
   <div className='col-lg-7'>
    <div className=" m-2 tagline-box mt-4">
      <h1  className="text-6xl  text-white font-bold">Hi, </h1>
      <h1  className="text-6xl  text-white font-bold">I am <span className='highlight'>Arth.</span></h1>
      <br></br>
         <h3 className="text-2xl  text-white font-bold">
          I am a passionate explorer of technologies, dedicated to coding and leveraging my extensive programming experience. 
          <br></br>
          <br></br>
          I embrace a holistic approach to learning and implementation, backed by deep knowledge in tech.
          </h3>
    </div>
   
      
    {/* <img src={BasicInfo.profile_photo} className="img-control-profile" /> */}

   </div>
   <div className='col-lg-4 icons-div'> 
   <div className="row mt-4">   
    <img className="col-4 h-32  tech-icon python" src={icons.python} />
   <img className="col-4 h-32 tech-icon  nodejs" src={icons.nodejs} />
   <img className="col-4 h-32 tech-icon  git" src={icons.git} />
    <img className=" col-4 h-32 tech-icon  bootstrap" src={icons.bootstrap} />
    <img className="col-4 h-32  tech-icon mongodb" src={icons.mongodb} />
    <img className="col-4 h-32  tech-icon javascript" src={icons.javascript} />
    <img className="col-4 h-32  tech-icon npm" src={icons.npm} />
    <img className="col-4 h-32 tech-icon  mysql" src={icons.mysql} />
   <img className="col-4 h-32  tech-icon react" src={icons.react} />
   <img className="col-4 h-32  tech-icon numpy" src={icons.numpy} />
   </div>
    </div>
    </div>

    </div>
   </>
  )
}
