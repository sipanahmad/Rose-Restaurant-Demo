/** @format */

import React from 'react';
import { images } from '../constants';
const SubHeading = ({ title }) => (
	<div className='mb-4'>
		<p className='text-white font-semibold capitalize leading-10 text-sm md:text-xl mb-2 2xl:text-3xl'>
			{title}
		</p>
		<img
			src={images.spoon}
			alt='spoon'
			className='w-[45px] 2xl:w-[80px]'
		/>
	</div>
);

export default SubHeading;
