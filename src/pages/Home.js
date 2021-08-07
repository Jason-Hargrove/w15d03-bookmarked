import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [bookmarks, setBookmarks] = useState([]);

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

	return (
		<div className="HomePage">
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
