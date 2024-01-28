import React from 'react'
import './Skills.css';
import skillsdata from './SkillsData.jsx';

export default function Skills() {
  return (
    <>
    <div id="skills"></div>
    {/* col-lg-3 col-md-5 col-sm-8 */}
<div className="mt-4 text-center text-4xl white font-bold">Skills and Technologies</div>
<div className="row">
<div class="m-4 max-w-sm mx-auto  card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <div class="text-3xl font-bold text-white mb-4">Frontend Technologies</div>
   <div className="row">
    {
        skillsdata.Frontend.map((item,keys)=>{
            return(
                <span className='m-2 text-white rounded-md border-2 p-2 border-color col-5'>{item.name_}</span>
            )
        })
    }
   </div>
   
</div>

<div class="m-4 max-w-sm mx-auto card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <div class="text-3xl font-bold text-white mb-4">Python libraries</div>
   <div className="row">
    {
        skillsdata.Pythonlibraries.map((item,keys)=>{
            return(
                <span className='m-2 text-white rounded-md border-2 p-2 border-color col-5'>{item.name_}</span>
            )
        })
    }
   </div>
   
</div>


<div class="m-4 max-w-sm mx-auto card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <div class="text-3xl font-bold text-white mb-4">Backend Technologies</div>
   <div className="row">
    {
        skillsdata.Backend.map((item,keys)=>{
            return(
                <span className='m-2 text-white rounded-md border-2 p-2 border-color col-5'>{item.name_}</span>
            )
        })
    }
   </div>
   
</div>

<div class="m-4 max-w-sm mx-auto card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <div class="text-3xl font-bold text-white mb-4">NPM Family</div>
   <div className="row">
    {
        skillsdata.Npmfamily.map((item,keys)=>{
            return(
                <span className='m-2 text-white rounded-md border-2 p-2 border-color col-5'>{item.name_}</span>
            )
        })
    }
   </div>
   
</div>


<div class="m-4 max-w-sm mx-auto card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <div class="text-3xl font-bold text-white mb-4">Databases</div>
   <div className="row">
    {
        skillsdata.Databases.map((item,keys)=>{
            return(
                <span className='m-2 text-white rounded-md border-2 p-2 border-color col'>{item.name_}</span>
            )
        })
    }
   </div>
   
</div>

<div class="m-4 max-w-sm mx-auto card  background-clr rounded-md  shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <div class="text-3xl font-bold text-white mb-4">Cloud and Deployment</div>
   <div className="row">
    {
        skillsdata.Cloudandothertools.map((item,keys)=>{
            return(
                <span className='m-2 text-white rounded-md border-2 p-2 border-color col-5'>{item.name_}</span>
            )
        })
    }
   </div>
   
</div>

</div>


    </>
  )
}
