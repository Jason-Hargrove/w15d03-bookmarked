import React, { useState, useEffect } from 'react';

export default function App(props) {
	const [bookmarks, setBookmarks] = useState([]);
	const [singleBookmark, setBookmark] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/bookmarks'); // <----- Postman Querry
				const data = await response.json(); // Recieved data turn it into a js object.
				setBookmarks(data); // Store JS object or Array.
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleClick = async e => {
		try {
			const response = await fetch('/api/bookmarks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: 'GitHub',
					url: 'https://github.com/'
				})
			});
			const data = await response.json();
			setBookmark(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="AppPage">
			This is the {props.page} page
			<ul>
				{bookmarks.map(bookmark => {
					return (
						<li key={bookmark._id}>
							The bookmark is {bookmark.title} its link is {bookmark.url}
						</li>
					);
				})}
			</ul>
			<button onClick={handleClick}>CLICK ME TO MAKE A BOOKMARK</button>
		</div>
	);
}
