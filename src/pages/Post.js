import React, { useState, useEffect } from 'react';

export default function Show(props) {
	const [bookmark, setBookmark] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/bookmarks/${props.match.params.id}`);
				const data = await response.json();
				setBookmark(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/bookmarks/${props.match.params.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const deletedBookmark = await response.json(); // Saved deleted blog if we want to use it.
		} catch (error) {
			console.error(error);
		} finally {
			window.location('/'); // Send us back to the root / reload everyting.
		}
	};

	return (
		<div className="ShowPage">
			{Object.keys(bookmark).length ? (
				<>
					<h3>{bookmark.title}</h3>
					<a href={bookmark.url}>{bookmark.url}</a>
					<button onClick={handleDelete}>DELETE ME</button>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
}
