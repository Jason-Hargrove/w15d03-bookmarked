import React from 'react';
import ButtonX from './ButtonX';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<ButtonX color="blue" text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
		</header>
	);
};

export default Header;
