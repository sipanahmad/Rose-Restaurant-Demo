/** @format */

import React from 'react';
import { images } from '../constants';
const AboutUs = () => {
	return (
		<div className='relative section-padding bg-url bg-cover bg-center bg-repeat bg-fixed flex justify-center items-center'>
			<div className=' absolute inset-0 flex justify-center -ml-2 items-center'>
				<img
					src={images.G}
					alt='G letter'
					className='w-4/5 h-[320px] lg:w-[391px] lg:h-[415px] z-0'
				/>
			</div>
			<div className='flex-col w-full z-10 flex md:flex-row justify-center items-center'>
				<div className='flex-1 flex justify-end items-end flex-col text-right'>
					<h1 className='py-4 font-serif text-golden  text-4xl lg:text-5xl xl:text-6xl  capitalize'>
						About us
					</h1>
					<img
						src={images.spoon}
						alt='about us'
						className='w-[45px] 2xl:w-[80px]'
					/>
					<p className=' my-12 sm:my-8 mx-0 sm:ml-0 sm:mr-40 md:mx-0 text-xs md:text-sm text-white font-normal capitalize lg:text-base 2xl:text-5xl'>
						At Rose Restaurant, our philosophy is simple: to create culinary experiences that nourish the body, stimulate the senses, and foster connections among our guests. We believe in the power of food to evoke emotions, spark conversations, and create lasting memories.<br/> With a focus on using fresh, locally sourced ingredients and time-honored recipes, we strive to deliver dishes that are not only delicious but also reflective of our commitment to sustainability and community.
					</p>
					<button
						type='button'
						className='uppercase bg-graya text-black font-semibold text-base rounded-md py-2 px-6 border border-graya cursor-pointer 2xl:text-4xl hover:border-graya hover:text-graya hover:bg-black duration-500'>
						Know More
					</button>
				</div>
				<div className='flex justify-center items-center mx-0 my-16 md:mx-16 md:my-8'>
					<img
						src={images.knife}
						alt='knife image'
						className='h-[910px] 2xl:h-[1110px]'
					/>
				</div>
				<div className='flex-1 flex justify-start items-start flex-col text-left'>
					<h1 className='py-4 font-serif text-golden  text-4xl lg:text-5xl xl:text-6xl  capitalize'>
						our History
					</h1>
					<img
						src={images.spoon}
						alt='about us'
						className='w-[45px] 2xl:w-[80px] rotate-180'
					/>
					<p className='my-12 sm:my-8 mx-0 sm:ml-0 sm:mr-40 md:mx-0 text-xs md:text-sm text-white font-normal capitalize lg:text-base 2xl:text-5xl'>
						Founded in 2020, Rose Restaurant was born out of a passion for bringing people together over delicious food and shared moments. <br/>Our founders set out to create a dining establishment that combines the flavors of the food in Syria is outstanding, Mediterranean ingredients combined with ancient techniques and Arabic flavours cuisine with the charm and hospitality of Al-Hasaka. Over the years, cherished by locals and visitors alike for our commitment to quality and authenticity.
					</p>
					<button
						type='button'
						className='uppercase bg-graya text-black font-semibold text-base rounded-md py-2 px-6 border border-graya cursor-pointer 2xl:text-4xl hover:border-graya hover:text-graya hover:bg-black duration-500'>
						Know More
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
