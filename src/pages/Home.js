import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home(props) {
	const [bookmarks, setBookmarks] = useState([]); // <----- Bookmarks State

	// ↓↓↓↓↓↓ After the component mounts ↓↓↓↓↓
	// Fetch all blog posts with the nasty looking string. Turns it into an object we can do something with.
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/bookmarks');
				const data = await response.json();
				setBookmarks(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const onClick = () => {
		console.log('You clicked me Jason!');
	};

	return (
		<div className="container">
			<h1>This is the {props.page} Page</h1>
			<Button color="green" text="Add" onClick={onClick} />
			<ul>
				{bookmarks.map(bookmark => {
					return (
						<li key={bookmark._id}>
							<Link to={`/${bookmark._id}`}>
								<h3>{bookmark.title}</h3>
							</Link>
							<a href={bookmark.url}>{bookmark.url}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
