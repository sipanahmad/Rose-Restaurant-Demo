/** @format */

import React from 'react';
import About from '../container/AboutUs';
import Gallery from '../container/Gallery';
import Header from '../container/Header';
import Welcome from '../container/Welcome';
function Home() {
	return (
						<>
							<Header />
							<Welcome />
							<About />
							<Gallery />
						
						</>
	);
}

export default Home;
