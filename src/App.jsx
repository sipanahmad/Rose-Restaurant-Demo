/** @format */

import React from 'react';
import About from './container/AboutUs';
import Footer from './container/Footer';
import Gallery from './container/Gallery';
import Header from './container/Header';
import Welcome from './container/Welcome';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Menus from './pages/Menus';
import HoursLocation from './pages/HoursLocation';
import AboutUsPage from './pages/AboutUsPage';
import Events from './pages/Events';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
	return (
		<div className='bg-graya'>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
						<>
							<Navbar />
							<Home/>
							<Footer />
						</>
						}
					/>
					<Route
						path='/menus'
						element={
						<>
							<Navbar />
							<Menus />
							<Footer />
						</>
						}
					/>
					<Route
						path='/hours-location'
						element={
						<>
							<Navbar />
							<HoursLocation />
							<Footer />
						</>
						}
					/>
					<Route
						path='/about-us'
						element={
						<>
							<Navbar />
							<AboutUsPage />
							<Footer />
						</>
						}
					/>
					<Route
						path='/events'
						element={
						<>
							<Navbar />
							<Events />
							<Footer />
						</>
						}
					/>
					
					<Route
						path='/login'
						element={
						<>
							<Navbar />
							<Login />
							<Footer />
						</>
						}
					/>
					<Route path="*" element={<Error/>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
