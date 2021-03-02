import React from 'react';
import logo from "./Images/logo-ms.png";
import { Button } from "./Gbutton";

function Footer() {
    return (
			<footer className="bg-white">
				<div className="bg-white items-center mx-auto text-justify w-4/5 h-56 grid justify-items-start grid-cols-3">
					<div className="px-3 flex flex-col">
						<img className="w-32" src={logo} alt="" />
						<h3>
							Claritas est etiam processus dynamicus, il qui uitur mutationem
							consuetudium sitlectorum. il orum Claritas processus dynamicus,
							qui sequi mutationem consuetudium lectorum.
						</h3>
					</div>
					<div className="px-3 flex flex-col">
						<h1>HELPFUL SERVICES</h1>
						<div className="flex justify-around">
							<div>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>
										Body Massage
									</a>
								</h3>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>Nail Care
									</a>
								</h3>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>Skin Polish
									</a>
								</h3>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>Colors Hair
									</a>
								</h3>
							</div>
							<div>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>Massage
									</a>
								</h3>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>Aromatherapy
									</a>
								</h3>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>Lomi Massage
									</a>
								</h3>
								<h3>
									<a href="!#">
										<i class="fas fa-chevron-right"></i>Skin Beauty
									</a>
								</h3>
							</div>
						</div>
					</div>
					<div className="px-3 flex flex-col">
						<h1>STAY IN TOUCH</h1>
						<div className="flex justify-between mt-2">
							<i className="fab fa-facebook-f fa-2x text-blue-500"></i>
							<i className="fab fa-instagram fa-2x ml-3"></i>
							<i className="fab fa-youtube fa-2x ml-3 text-red-500"></i>
							<i className="fab fa-twitter fa-2x ml-3  text-blue-200"></i>{" "}
						</div>
						{/* <Button btn_outline_primary>
							<i className="fab fa-twitter fa-2x ml-3  text-blue-200"></i>
						</Button> */}
					</div>
				</div>
			</footer>
		);
}

export default Footer
