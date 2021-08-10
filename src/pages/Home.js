import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AddBookmark from '../components/AddBookmark';
import Header from '../components/Header';

export default function Home(props) {
	const [bookmarks, setBookmarks] = useState([]); // <----- Bookmarks State

	// ↓↓↓↓↓↓ For showing and hiding the create form via a btn. ↓↓↓↓↓
	const [showAddBookmark, setShowAddBookmark] = useState(false);

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

	// ===== Add Bookmark =====
	const addBookmark = async e => {
		try {
			const response = await fetch('/api/bookmarks/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(e)
			});
			const data = await response.json();
			setBookmarks([...bookmarks, data]);
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	};

	return (
		<div className="container mt-3">
			<Header
				title="It's the bookmark page"
				onAdd={() => setShowAddBookmark(!showAddBookmark)}
				showAdd={showAddBookmark}
			/>
			{showAddBookmark && <AddBookmark onAdd={addBookmark} />}
			<ul className="list-group">
				{bookmarks.map(bookmark => {
					return (
						<li key={bookmark._id} className="list-group-item">
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
