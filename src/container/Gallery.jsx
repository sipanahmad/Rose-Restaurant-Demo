/** @format */

import React, { useRef } from 'react';
import SubHeading from '../components/SubHeading';
import {
	BsArrowLeftShort,
	BsArrowRightShort,
	BsFacebook,
} from 'react-icons/bs';
import {Link} from 'react-router-dom'
import { data } from '../constants';
const Gallery = () => {

	const scrollRef = useRef();
	const scroll = (direction) => {
		const { current } = scrollRef;
		if (direction === 'left') {
			if (window.screen.availWidth <= 768) {
				current.scrollLeft -= 225;
			} else {
				current.scrollLeft -= 300;
			}
		} else {
			if (window.screen.availWidth <= 768) {
				current.scrollLeft += 225;
			} else {
				current.scrollLeft += 300;
			}
		}
		console.log(window.screen.availWidth);
	};
	return (
		<div className=' bg-black w-full pt-16 pr-0 pb-24 pl-24  md:flex flex-col md:flex-row justify-center items-center'>
			<div className='flex-1 flex justify-center flex-col items-start -ml-10 md:ml-0 xl:min-w-[500px] pr-16 lg:pr-8 xl:pr-16'>
				<SubHeading title='Facebook' />
				<h1 className='py-4 text-golden capitalize text-4xl md:text-5xl 2xl:text-9xl'>
					Photo Gallery
				</h1>
				<p className='text-[#AAA] mt-8 capitalize text-xs sm:text-sm md:text-base 2xl:text-3xl'>
					Welcome to our photo gallery, where you can get a glimpse of the delicious dishes and inviting ambiance we offer at Rose Restaurant. Browse through our collection of images to see our mouthwatering dishes, cozy dining areas, and friendly staff in action.
				</p>
				<Link
					to='/menus'
					className='mt-8 md:mt-12 uppercase bg-graya text-black font-semibold text-base rounded-md py-2 px-6 border border-graya cursor-pointer 2xl:text-4xl hover:border-graya hover:text-graya hover:bg-black duration-500'>
					Know More
				</Link>
			</div>
			<div className='flex-1 flex flex-row  md:max-w-[30%] lg:max-w-[50%] relative -left-10  lg:left-0'>
				<div
					ref={scrollRef}
					className='flex overflow-x-scroll overflow-style'>
					{data.gallery.map((image) => (
						<div
							className='group relative min-w-[200px] lg:min-w-[301px]  h-[337px] lg:h-[447px] mr-8 flex justify-center items-center duration-500 bg-[#3b5998] xl:min-w-[400px] xl:h-[550px] max-w-full my-24 mx-0 rounded-lg'
							key={image.id}>
							<img
								src={image.imgUrl}
								alt='gallery'
								className='rounded-lg group-hover:opacity-30  h-full w-full object-cover opacity-100 duration-500'
							/>
							<a href={image.link} className=' absolute group-hover:opacity-100 text-white text-4xl  opacity-0 duration-500 cursor-pointer'><BsFacebook /></a>
						</div>
					))}
				</div>
				<div className='w-full flex justify-between items-center py-0 px-4 absolute -ml-3 lg:-ml-3 bottom-[20%] lg:bottom-[16%] '>
					<BsArrowLeftShort
						onClick={() => scroll('left')}
						className='hover:text-golden  text-3xl cursor-pointer bg-black rounded-md text-white duration-500'
					/>
					<BsArrowRightShort
						className='hover:text-golden text-3xl cursor-pointer bg-black rounded-md text-white duration-500'
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
