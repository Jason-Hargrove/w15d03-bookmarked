import React, { useState } from 'react';

export default function App(props) {
	return (
		<div className="container">
			<h1>This is the {props.page} page</h1>
		</div>
	);
}

// Old code below.

// import React, { useState, useEffect } from 'react';
//
// export default function App(props) {
// 	const [bookmarks, setBookmarks] = useState([]);
// 	const [singleBookmark, setBookmark] = useState({
// 		title: '',
// 		url: ''
// 	});
//
// 	useEffect(() => {
// 		(async () => {
// 			try {
// 				const response = await fetch('/api/bookmarks'); // <----- Postman Querry
// 				const data = await response.json(); // Recieved data turn it into a js object.
// 				setBookmarks(data); // Store JS object or Array.
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		})();
// 	}, []);
//
// 	const handleClick = async e => {
// 		try {
// 			const response = await fetch('/api/bookmarks', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify({
// 					title: 'GitHub',
// 					url: 'https://github.com/'
// 				})
// 			});
// 			const data = await response.json();
// 			setBookmarks([...bookmarks, data]);
// 			setBookmark(data);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
//
// 	const handleSubmit = async e => {
// 		e.preventDefault();
// 		try {
// 			const response = await fetch('/api/bookmarks', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify(singleBookmark)
// 			});
// 			const data = await response.json();
// 			setBookmarks([...bookmarks, data]);
// 			setBookmark({
// 				title: '',
// 				url: ''
// 			});
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
//
// 	const handleChange = e => {
// 		setBookmark({ ...singleBookmark, [e.target.id]: e.target.value });
// 	};
//
// 	return (
// 		<div className="AppPage">
// 			This is the {props.page} page
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					id="title"
// 					value={singleBookmark.title}
// 					onChange={handleChange}
// 				/>
// 				<input
// 					type="text"
// 					id="url"
// 					value={singleBookmark.url}
// 					onChange={handleChange}
// 				/>
// 				<input type="submit" value="Submit" />
// 			</form>
// 			<ul>
// 				{bookmarks.map(bookmark => {
// 					return (
// 						<li key={bookmark._id}>
// 							The bookmark is {bookmark.title} its link is{' '}
// 							<a href={bookmark.url}>{bookmark.url}</a>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// }
