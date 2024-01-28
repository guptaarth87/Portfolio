import React from 'react'
import EdurekaCertificate from '../../Assets/Certificates/certificate_edureka.png';
import IbmCertificate from '../../Assets/Certificates/ibm certificate.png';
import GoogleCertificate from '../../Assets/Certificates/coursera certificate google.png';

export default function CertificatesAndBadges() {
  return (
   <>
      <div id="Certificatesandbadges"></div>
   <div className='text-4xl mt-6 text-white font-bold text-center'>Certificates & Badges</div>
   <div className="row">   
    <div class=" mt-4 max-w-sm mx-auto background-clr rounded-md overflow-hidden shadow-lg">
    <img src={EdurekaCertificate} alt="Project Image" class="rounded-md w-full h-54 object-cover" />
    <div class="p-6">
        <h2 class="text-xl font-semibold mb-2 text-white">5 start Full Stack Internship Program by Edureka</h2>  
    </div>
</div>

<div class=" mt-4 max-w-sm mx-auto background-clr rounded-md overflow-hidden shadow-lg">
    <img src={IbmCertificate} alt="Project Image" class="rounded-md w-full h-54 object-cover" />
    <div class="p-6">
        <h2 class="text-xl font-semibold mb-2 text-white">Data Science 101 course by IBM</h2>  
    </div>
</div>

<div class=" mt-4 max-w-sm mx-auto background-clr rounded-md overflow-hidden shadow-lg">
    <img src={GoogleCertificate} alt="Project Image" class="rounded-md w-full h-54 object-cover" />
    <div class="p-6">
        <h2 class="text-xl font-semibold mb-2 text-white">Essential Google Cloud Infrastructure: Core Services by Google</h2>  
    </div>
</div>
   </div>
   
   </>
  )
}
