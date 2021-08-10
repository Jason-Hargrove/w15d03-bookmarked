import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div className="container NavBar">
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					{props.routes.map(({ key, path }) => (
						<Link key={key} to={path}>
							{key}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
