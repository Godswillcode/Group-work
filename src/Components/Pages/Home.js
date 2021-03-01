import React from 'react';
import Hero from '../Images/hero.jpg';
import history from '../Images/history.jpg'
import { Button } from "../Gbutton"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
         <>
        <div className="h-screen w-full bg-cover bg-center" style={{backgroundImage: `url(${Hero})`}}>
               <div className="bg-black h-screen w-full bg-opacity-50 flex justify-center items-center text-center">
               <div>
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white pb-10 text-shadow ">LEMON SPY</h1> 
                   <div className="animate-bounce"> <Button heroBtn as={Link} to="/service">Learn more</Button>  </div> 
                </div>
               </div>
        </div>
               <div className="container mx-auto px-10 mt-10 mb-11 text-center">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
           <h1 className="font-medium lg:text-5xl sm:text-2xl pb-7 text-left"> <span className="text-primary">50 Years</span> We Reflect that Experience</h1>
           <p>Alienum phaedrum torquatos nec eu, vis detraxit peri culis ex, nihil is in mei. Mei an periculaeuripidis, hincar tem ei est Alienum phae drum torquatos nec eu, vis d periculaeuripid etraxit.</p>
           <div className="border-2 border-gray-500 p-3 mt-5">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae illum, facilis quasi commodi qui similique deleniti nihil quidem cumque provident nesciunt, quisquam officia fugiat! Ipsum excepturi</p>
           </div>
          </div>
              <div>
         <img src={history} alt="history" className="h-80 rounded-sm w-full"/>
           </div>
            </div>
               </div>
     </>
      
    )
}

export default Home
