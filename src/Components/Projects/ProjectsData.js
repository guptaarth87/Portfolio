import Vrikshanetra from '../../Assets/Projects/vrikshanetra.png'
import FlavourFusion from '../../Assets/Projects/flavourfusion.jpg'
import Hotelbooking from '../../Assets/Projects/hotelbooking.jpg'

const ProjectData = [
    {
        id:0,
        name_: "Vrikshnetra",
        description:"Developed a web-based plant identification system using AI/ML, incorporating teachable machine and TensorFlow.js. Enables users to capture images for accurate species prediction, enhancing plant recognition with advanced technology." ,
        image_url:Vrikshanetra,
        Technologies_used: ["TeachableMachine", "TensorFlowjs","HTML","CSS3"]
    },
    {
        id:1,
        name_: "Flavour Fusion",
        description:"Zomato-like app with the MERN Stack, Constructed a backend with MVC architecture, specializing in REST APIs, database connections, and browser storage like cookies." ,
        image_url:FlavourFusion,
        Technologies_used: ["MERN Stack"]
    },
    {
        id:2,
        name_: "Amar Shanti Hotel",
        description:"Worked on a live project, handling everything from design to deployment with continuous integration and continuous development using github and netlify. The complete software includes both user and admin panels" ,
        image_url:Hotelbooking,
        Technologies_used: ["MERN Stack"]
    },


]

export default ProjectData;