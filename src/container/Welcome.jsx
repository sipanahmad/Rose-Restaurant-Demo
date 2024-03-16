/** @format */

import React, { useEffect, useState } from 'react';
import SubHeading from '../components/SubHeading';
import {Link} from 'react-router-dom'
import { images } from '../constants';

const Welcome = () => {
	return (
		<div className='bg-black section-padding flex items-center flex-col md:flex-row justify-between min-h-screen'>
			<div className={`flex-1 w-full flex	justify-center items-start flex-col`}>
				<SubHeading title={'ROSE RESTAURANT'} />
				<h1 className='text-golden uppercase text-[45px] md:text-[70px] lg:text-[90px] leading-[60px] md:leading-[80px] lg:leading-[117px]'>
					Welcome
				</h1>
				<p className=' mx-0  my-8 text-white font-normal text-xs md:text-sm lg:text-lg capitalize 2xl:text-3xl'>
					Indulge your senses and embark on a culinary journey at Rose Restaurant, where exquisite flavors, warm hospitality, and unforgettable moments await. Nestled in the heart of Al-Hasaka,<br/> our restaurant invites you to experience the perfect blend of gastronomic delights and elevated dining ambiance.
				</p>
				<Link to="/menus" className=' uppercase bg-graya text-black font-semibold text-base rounded-md py-2 px-6 border border-graya cursor-pointer 2xl:text-4xl hover:border-graya hover:text-graya hover:bg-black duration-500 '>
					View our menus
				</Link>
			</div>
			<div
				className={`hidden relative flex-1 w-full md:flex justify-center items-center 2xl:ml-8 m-0 mt-20 `}>
				<div className='absolute bg-graya w-2/5 h-4/5 z-10 -top-4 md:right-6 lg:right-10 rounded-se-xl'></div>
				<img
					src={images.welcome}
					className='static z-20 w-4/5 2xl:w-full rounded-xl'
					alt=''
				/>
				<div className='absolute bg-graya w-2/5 h-4/5 z-10 -bottom-4 md:left-6 lg:left-10 rounded-es-xl'></div>
			</div>
		</div>
	);
};

export default Welcome;
