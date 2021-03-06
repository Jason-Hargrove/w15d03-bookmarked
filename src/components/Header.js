import React from 'react';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1 className="mt-4 mb-4">{title}</h1>
			<Button
				color={showAdd ? 'red' : 'green'}
				text={showAdd ? 'Close' : 'Add a Bookmark'}
				onClick={onAdd}
			/>
		</header>
	);
};

export default Header;
