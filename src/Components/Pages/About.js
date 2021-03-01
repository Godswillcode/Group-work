import React from 'react'
import Image from '../Images/photo1.jpg';
import Image1 from '../Images/photo2.jpg';

const About = () => {
    return (
       <>
           <div className="bg-cover bg-center w-full h-96 mb-36" style={{backgroundImage: `url(${Image})`}}>
             <div className="bg-black bg-opacity-25 w-full h-96 flex justify-center items-center">
                 <h1 className="text-white text-6xl font-bold"> About us</h1>
             </div>
           </div>
           <div className="text-center mt-1">
               <h1 className="text-3xl mt-5 text-primary font-medium">Expercience the Art of caring</h1>
               <h2 className="text-5xl mt-5 font-medium ">ABOUT OUR LEMON</h2>
                 </div>

               <div className="container mx-auto px-10 ">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-10">
                   <img src={Image1} alt="photo2" className="w-9/12 h-96" />
                   <p className="text-lg font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                       Facere expedita numquam saepe aut nihil id praesentium nobis delectus repudiandae, 
                       molestias quo soluta necessitatibus natus voluptas neque assumenda blanditiis placeat aperiam!
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo magnam voluptatum corrupti! Dolor voluptatem eveniet, 
                       officiis sapiente eligendi, nobis asperiores inventore, modi tempora consequuntur hic a consequatur est praesentium.
                       </p>
                       </div>
               </div>
       </>
    )
}

export default About
