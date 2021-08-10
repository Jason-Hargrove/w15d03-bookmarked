import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	}
];

export default routes;
