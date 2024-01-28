import React from 'react'
import './Testimonials.css';
import TestimonialsData from './TestimonialsData';

export default function Testimonials() {
  return (
    <>
     <div id="testimonials"></div>
     <div className="mt-4 text-center text-4xl white font-bold">Testimonials</div>

     <div className="slider">
        <div className="slide-track">
            
          {   
              TestimonialsData.map((items,key)=>{
               
               return( 
               <>
                <div className = " slide">
                 <div className=" card_div  text-white p-3 rounded-md border-2  border-color ">
                <div className="title text-xl">{items.company}</div>
                <br></br>
                 <div className="description">
                 {items.description}
                    </div>   
                    <br></br>
                    {items.email}
               </div> 
            </div>
               </>
               )

              })
          }
     
        </div>
    </div>   
<br></br>
    <div className="slider">
        <div className="slide-track-reverse">
            
          {
              TestimonialsData.map((items,key)=>{
              
               return( 
               <>
                    <div className = " slide">
                 <div className=" card_div  text-white p-3 rounded-md border-2  border-color ">
                <div className="title text-xl">{items.company}</div>
                <br></br>
                 <div className="description">
                 {items.description}
                    </div>   
                    <br></br>
                    {items.email}
               </div> 
            </div>
               </>
               )
              })
          }
        </div>
    </div>  
    </>
  )
}
