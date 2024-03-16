/** @format */

import React from 'react';
import logo from '../../public/favicon.png';
function Error() {




	return (
	<div className="bg-url h-screen  text-white">
		<div className=' max-w-[500px] mx-auto my-0'>
		    <a href="/" ><img src={logo}  className="pt-[40px] w-[180px] object-contain"/></a>

		    <h2 className="mt-[50px] mx-0 mb-0 text-[20px] font-semibold uppercase tracking-widest text-white ">404</h2>
		    <h1 className="text-[60px] leading-none font-bold mt-0 mx-0 mb-[40px] text-white [text-shadow:_3px_3px_0_#ffda2e]">Page not found.</h1>
		    <p className="text-[16px] my-[1em] mx-0">We’re sorry but it appears that we can’t find the page you were looking for. Usually this occurs because of a page that previously existed was removed or you’ve mistyped the address.</p>

		    <button className='uppercase bg-graya text-black font-semibold text-base rounded-md py-2 px-6 border border-graya cursor-pointer 2xl:text-4xl hover:border-graya hover:text-graya hover:bg-black duration-500'><a href="/">Go back</a></button>
		  
		</div>
	</div>
	);
}

export default Error;
