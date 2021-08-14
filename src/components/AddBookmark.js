import React from 'react';
import { useState } from 'react';

const AddBookmark = ({ onAdd }) => {
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');

	const onSubmit = e => {
		e.preventDefault();

		if (!title || !url) {
			alert('Please add a bookmark');
			return;
		}
		onAdd({ title, url });
		setTitle('');
		setUrl('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3">
				<label className="form-label">Title</label>
				<input
					className="form-control"
					type="text"
					placeholder="Add Bookmark"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<div className="form-text">
					We'll always share your email with everyone.
				</div>
			</div>
			<div className="mb-3">
				<label className="form-label">url</label>
				<input
					className="form-control"
					type="text"
					placeholder="Add url"
					value={url}
					onChange={e => setUrl(e.target.value)}
				/>
			</div>

			<input type="submit" value="Save Bookmark" className="btn btn-primary mb-3" />
		</form>
	);
};

export default AddBookmark;
