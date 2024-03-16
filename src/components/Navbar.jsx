/** @format */

import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { GiForkKnifeSpoon } from 'react-icons/gi';

import logo from '../../public/favicon.png';
const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [shadow, setShadow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShadow(true);
			} else {
				setShadow(false);
			}
			return () => {
				window.removeEventListener('scroll');
			};
		});

		return () => {};
	}, []);

	return (
		<nav
			className={` ${
				shadow && 'bg-black border-b-2 border-b-golden duration-500'
			} fixed top-0 left-0 h-[88px] w-full flex justify-between items-center  p-5 md:section-padding  z-50`}>
			<div className='flex justify-start items-center '>
				<Link
					to='/'>
					<img
						src={logo}
						className='w-[70px] object-contain py-0   '
						alt='Rose logo'
					/>
				</Link>
			</div>
			<ul className='hidden uppercase text-white lg:flex flex-1 justify-center items-center'>
				<li className='font-mono mx-4 m-0 hover:text-golden duration-500'>
					<Link to='/'>Home</Link>
				</li>
				<li className='font-mono mx-4 m-0 hover:text-golden duration-500'>
					<Link to='/menus'>Menus</Link>
				</li>
				<li className='font-mono mx-4 m-0 hover:text-golden duration-500'>
					<Link to='/hours-location'>Hours & Location</Link>
				</li>
				<li className='font-mono mx-4 m-0 hover:text-golden duration-500'>
					<Link to='/events'>Events</Link>
				</li>
			
			</ul>
			<div className='text-sm lg:text-base text-white font-mono hidden md:flex justify-end items-center uppercase'>
				<Link
					to='/login'
					className='my-0 mx-4 duration-500 hover:border-b hover:border-golden '>
					Log In
				</Link>
				<div className='w-[1px] h-[30px] bg-golden ' />
				<Link
					to='/login'
					className='my-0 mx-4 duration-500 hover:border-b hover:border-golden'>
					Book A Table
				</Link>
			</div>
			{/* Small Screens  */}
			<div className='lg:hidden'>
				<GiForkKnifeSpoon
					className='lg:hidden text-[27px] -rotate-90 text-white'
					onClick={() => {
						setToggleMenu(true);
					}}
				/>
				{toggleMenu && (
					<div className='lg:hidden fixed top-0 left-0 w-full h-screen bg-black duration-500 ease-in flex justify-center items-center animate-slide-bottom flex-col z-50'>
						<GiKnifeFork
							className='text-[27px] text-golden cursor-pointer absolute top-8 right-5 md:top-8 md:right-16 '
							onClick={() => {
								setToggleMenu(false);
							}}
						/>
						<ul className='uppercase text-golden text-center font-great-vibes'>
							<li className='font-mono m-4 cursor-pointer hover:text-white duration-500'>
								<Link to='/'>Home</Link>
							</li>
							<li className='font-mono m-4 cursor-pointer  hover:text-white duration-500'>
								<Link to='/menus'>Menus</Link>
							</li>
							<li className='font-mono m-4 cursor-pointer  hover:text-white duration-500'>
								<Link to='/hours-location'>Hours & Location</Link>
							</li>
							<li className='font-mono m-4 cursor-pointer  hover:text-white duration-500'>
								<Link to='/events'>Events</Link>
							</li>
							
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
