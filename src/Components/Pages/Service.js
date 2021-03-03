import React from 'react'
import {serviceData} from '../serviceData'
import service_hero from '../Images/service_hero.jpg'
import { Button } from "../Gbutton";

const Service = () => {
    return (
        <>
           <div className="w-full h-96 bg-cover bg-center" style={{backgroundImage: `url(${service_hero})`}}>
             <div className="w-full h-96 bg-black bg-opacity-30 flex justify-center items-center">
                 <h1 className="text-white text-2xl md:text-6xl font-bold">Our services</h1>
             </div>
           </div>

           <div className="text-center pt-16">
               <h1 className="text-xl md:text-2xl text-primary font-bold">Experience the Art of Caring</h1>
               <h2 className="font-extrabold text-xl md:text-3xl pt-2 text-gray-900">LEMON MASSAGE SERVICES</h2>
           </div>

           <div className="container mx-auto mt-10 mb-20 px-10 ">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                   {
                       serviceData.map((data) => {
                           return (
                               <div className="shadow-lg pb-5 rounded-2xl">
                                   <div className="">
                                       <img src={data.img} alt="images" className="w-full h-72 rounded-t-2xl"/>
                                    </div>
                                   <div className="px-5 py-5">
                                       <h2 className="text-center pb-2 font-bold text-xl md:text-2xl">{data.source}</h2>
                                       <h4 className="text-center pb-2 font-bold text-2xl text-primary">{data.price}</h4>
                                       <p className="text-lg opacity-90">{data.desc}</p>
                                   </div>
                                    <div className="flex justify-center ">
                                        <Button btn_primary="true" href="#">MAKE APPOINTMENT</Button></div>
                               </div>
                           )
                       })
                   }
               </div>
           </div>
        </>
    )
}


export default Service



