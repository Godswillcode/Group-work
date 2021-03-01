import React from 'react';
import Image from "../Images/img.jpg";
import spacIcon from "../Images/spac.png";
import m12 from "../Images/m12.jpg"

const Contact = () => {
    return (
			<section className="bg-white flex flex-col ">
				<div
					className=" flex justify-center items-center  h-96 bg-cover bg-center"
					style={{ backgroundImage: `url(${Image})` }}>
					<div>
						<h1 className="text-6xl font-bold text-white">Contact</h1>
					</div>
				</div>
				<div className="self-center flex-col flex mt-24">
					<h1 className="text-4xl text-primary">
						Experience the Art of Caring{" "}
					</h1>
					<h1 className="text-6xl font-bold">GET IN TOUCH</h1>
					<img className="w-36 self-center mt-4" src={spacIcon} alt="" />
				</div>
				<h4 className="text-center">
					Questions? Comments? We’d love to hear your feedback about Lemon Spa!
					Please fill out the fields below and help us.
				</h4>

				<div className="grid grid-cols-2 justify-items-center mt-8">
					<div>
						<img src={m12} alt="" />
					</div>

                   
				</div>
			</section>
		);
}

export default Contact
