/** @format */

import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../constants';
const Header = () => {
	const vidRef = useRef();
	const [playVideo, setPlayVideo] = useState(true);
	const [showShadow, setShowShadow] = useState(false);
	const handleVideo = () => {
		setPlayVideo((prevPlayVideo) => !prevPlayVideo);
		if (playVideo) {
			vidRef.current.pause();
		} else {
			vidRef.current.play();
		}
	};
	return (
		<div className='h-screen relative z-0'>
			<video
				className='w-full h-full object-cover'
				src={meal}
				ref={vidRef}
				type='video/mp4'
				autoPlay={true}
				loop
				controls={false}
				muted
				onPlaying={() => setShowShadow(false)}
			/>
			<div
				className={` flex absolute inset-0 bg-[rgba(0,0,0,0.45)]  justify-center items-center`}>
				<div
					className={`${
						showShadow ? 'opacity-100' : 'opacity-0'
					} w-24 h-24 rounded-full border border-golden cursor-pointer flex justify-center items-center duration-500`}
					onClick={handleVideo}
					onMouseOver={() => setShowShadow(true)}
					onMouseLeave={() => setShowShadow(false)}>
					{playVideo ? (
						<BsPauseFill
							color='#fff'
							fontSize={30}
						/>
					) : (
						<BsFillPlayFill
							color='#fff'
							fontSize={30}
						/>
					)}
				</div>
			</div>
			<div className='relative -top-[190px] w-full h-[200px] bg-gradient-to-b  from-transparent via-[rgba(37,37,37,0.61)] to-[#090900]'></div>
		</div>
	);
};

export default Header;
