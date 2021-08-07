import React, { useState, useEffect, useRef } from 'react';

export default function Show(props) {
	const [bookmark, setBookmark] = useState({});
	const titleInput = useRef(null); // It's like doc.querySelector('input#title').
	const urlInput = useRef(null); // doc.querySelector('input#url').

	const handleUpdate = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/bookmarks/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleInput.current.value, // <----- Current has all the dom elements you love.
					url: urlInput.current.value
				})
			});
			const data = await response.json();
			setBookmark(data);
		} catch (error) {
			console.error(error);
		}
	};

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
			window.location.assign('/Home'); // Send us back to /Home / reload everyting.
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
			<form
				style={{
					display: 'flex',
					flexDirection: 'column'
				}}
				onSubmit={handleUpdate}
			>
				<label>
					{' '}
					Title:{' '}
					<input type="text" ref={titleInput} defaultValue={bookmark.title} />
				</label>
				<label>
					{' '}
					Url: <input type="text" ref={urlInput} defaultValue={bookmark.url} />
				</label>
				<input type="submit" value="Update Bookmark" />
			</form>
		</div>
	);
}
