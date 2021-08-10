import React, { useState } from 'react';

export default function About(props) {
	return (
		<div className="container mt-3">
			This is the {props.page} page. Click on a title to edit or delete.
		</div>
	);
}
