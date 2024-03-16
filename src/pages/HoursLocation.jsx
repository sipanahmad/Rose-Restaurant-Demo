/** @format */

import React from 'react';
//36.512548388225646, 40.74302126568763
import gmap from '../assets/gmap.png'
function HoursLocation() {
			
	return (
		<div className="bg-url h-fit text-center text-white py-40 font-medium">
			<h4 className="py-8 text-7xl font-great-vibes text-golden font-black">Hours & Location</h4>
			<div className="flex flex-col gap-3 text-base ">
				<a href="/">GP5V+F8Q, Al Hasakah, Syria</a>
				<a href="/">+963-939-227-711</a>
				<a href="/">225529</a>
				<a href="/">225549</a>
			</div>
			<ul className="text-base py-8">
				<li className="text-4xl  pb-4 font-semibold text-golden font-great-vibes">Lunch</li>
				<li  className="pb-4 ">Thursday - Sunday</li>
				<li className="pb-4 ">Noon onwards</li>
			</ul>
			<ul className="text-base py-8">
				<li className="text-4xl  pb-4 font-semibold text-golden font-great-vibes">Dinner</li>
				<li  className="pb-4 ">Nightly</li>
				<li className="pb-4 ">5PM onwards</li>
			</ul>
			<ul className="text-base py-8">
				<li className="text-4xl  pb-4 font-semibold text-golden font-great-vibes">Golden Hour</li>
				<li  className="pb-4 ">Thursday - Sunday</li>
				<li className="pb-4 ">3-6PM</li>
			</ul>
			<ul className="text-base py-8">
				<li className="text-4xl  pb-4 font-semibold text-golden font-great-vibes">Delivery</li>
				<li  className="pb-4 ">Monday-Wednesday 5—10PM</li>
				<li className="pb-4 ">Thursday - Sunday Noon—10PM </li>
			</ul>
			<div className='w-full h-[200px] md:h-[600px] mt-6 md:mt-0 z-10 overflow-x-hidden bg-black'>
					
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.8820523042627!2d40.7434754839868!3d36.50870916059275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x154ba9034bef832d%3A0x600b9033ecf8853d!2z2YXYt9i52YUg2LHZiNiy!5e0!3m2!1sen!2siq!4v1710563454024!5m2!1sen!2siq" class="w-full h-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
		</div>
		
	);
}

export default HoursLocation;
