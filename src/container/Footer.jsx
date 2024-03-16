/** @format */

import React from 'react';
import { images } from '../constants';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
const Footer = () => {
	return (
		<div className=' px-0 md:section-padding bg-url bg-black w-full flex items-center justify-between p-0 pb-8  xl:py-24'>
			<div className='flex-1 text-center m-4'>
				<h1 className='text-white font-normal capitalize text-xl md:text-2xl lg:text-4xl mb-8'>
					Contact Us
				</h1>
				<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal lg:px-10 mb-4 '>
					Marsho, The Amal Private School, Al-Hasaka, Syria
				</p>
				<div className="flex items-center justify-center gap-4 ">
					<div className="flex flex-col gap-2.5">
						<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal '>
							+963-939-227-711 
						</p>
						<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal'>
							225529 
						</p>
						<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal'>
							225549
						</p>
					</div>
					<div className="flex flex-col gap-2.5">
						<span className="block">📞</span>
						<span className="block">☎️</span>
						<span className="block">☎️</span>
					</div>
				</div>
			</div>
			<div className='flex-1 text-center m-4'>
				<img
					src='../assets/logo.png'
					alt='rose logo'
					className='w-[80%] md:w-[210px] object-contain py-0 mb-3 mx-auto'
				/>
				<q className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white font-normal'>
					The best way to find yourself is to lose yourself in the service of
					others.
				</q>
				<img
					src={images.spoon}
					alt=''
					className='w-[45px] 2xl:w-[80px] mt-4 mx-auto'
				/>
				<div className='my-2 flex text-white items-center justify-center'>
					<a href="https://www.facebook.com/Roserestau"><FiFacebook className='m-2 text-2xl cursor-pointer hover:text-golden duration-500' /></a>
					<a href="https://www.facebook.com/Roserestau"><FiInstagram className='m-2 text-2xl cursor-pointer hover:text-golden duration-500' /></a>
					<a href="https://www.facebook.com/Roserestau"><FiTwitter className='m-2 text-2xl cursor-pointer hover:text-golden duration-500' /></a>
				</div>
				<div>
					<p className='mt-12 text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal'>
						2020 Rose Restaurant. All Rights Reserved.
					</p>
				</div>
			</div>
			<div className='flex-1 text-center m-4'>
				<h1 className='text-white font-normal capitalize text-xl md:text-2xl lg:text-4xl mb-8'>
					Working Hours
				</h1>
				<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal mb-2'>
					Monday-Friday:
				</p>
				<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal mb-4'>
					08:00 am -12:00 am
				</p>
				<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal mb-2'>
					Saturday-Sunday:
				</p>
				<p className='text-xs sm:text-sm lg:text-base 2xl:text-3xl text-white capitalize font-normal'>
					07:00 am -11:00 am
				</p>
			</div>
		</div>
	);
};

export default Footer;
