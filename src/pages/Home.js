import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import AddBookmark from '../components/AddBookmark';
import Header from '../components/Header';

export default function Home(props) {
	const [bookmarks, setBookmarks] = useState([]); // <----- Bookmarks State
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

	// ===== For the hide and show form button =====
	const onAdd = () => {
		setShowAddBookmark(!showAddBookmark);
	};

	return (
		<div className="container">
			<Header title="Welcome to the Jungle" />
			{showAddBookmark && <AddBookmark onAdd={addBookmark} />}
			<Button color="green" text="Add" onClick={onAdd} />
			<h3>Click on a title to edit or delete</h3>
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
