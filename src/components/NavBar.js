import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div className="container">
			<nav className="navbar navbar-dark bg-dark">
				<div className="nav">
					{props.routes.map(({ key, path }) => (
						<Link className="nav-link active" key={key} to={path}>
							{key}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
