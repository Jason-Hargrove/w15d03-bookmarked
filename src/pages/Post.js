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
		} finally {
			window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'
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
			window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'
		}
	};

	return (
		<div className="container">
			{Object.keys(bookmark).length ? (
				<>
					<h3>{bookmark.title}</h3>
					<a href={bookmark.url}>{bookmark.url}</a>
				</>
			) : (
				<h1>Loading...</h1>
			)}
			<form onSubmit={handleUpdate}>
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input
						type="text"
						className="form-control"
						ref={titleInput}
						defaultValue={bookmark.title}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Url</label>
					<input
						type="text"
						className="form-control"
						ref={urlInput}
						defaultValue={bookmark.url}
					/>
					<div className="form-text">
						Whatever you put in here with be a link.
					</div>
				</div>
				<div className="d-inline">
					<input
						className="btn btn-primary"
						type="submit"
						value="Update Bookmark"
					/>
				</div>
				<div className="d-inline p-2">
					<button
						className="btn btn-danger"
						onClick={handleDelete}
						type="button"
					>
						DELETE ME
					</button>
				</div>
			</form>
		</div>
	);
}
